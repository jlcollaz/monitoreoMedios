import pool from "../database";
import multer from "multer";
import mimeTypes from "mime-types";

// file
var filenamegl = "";
const storage = multer.diskStorage({
  destination: 'src/public/files/',
  filename: function(req, file, cb){
      filenamegl = Date.now() + "." + mimeTypes.extension(file.mimetype);
      cb("", Date.now() + "." + mimeTypes.extension(file.mimetype));
  }
})

const upload = multer({
  storage: storage,
})
export const upload_file = upload.single('file_news')

export const canvas = async (req, res, next) => {
  const data = await pool.query("select date_format(links.date, '%M'),sum(links.count_id) from links group by date_format(links.date, '%M');");
  console.log(data);
  res.send(data);
}

export const filter_news = async (req, res) => {
  console.log(req.body)
  var data_body = req.body;
  console.log(data_body)
  if (req.body.impact == 'Todos' && req.body.scope == 'Todos' && req.body.media_type == 'Todos'){   
    const links2 = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' ORDER BY links.date desc;");
    res.render("links/list", { links2, data_body});
  }
  else if (req.body.impact != 'Todos' && req.body.scope != 'Todos' && req.body.media_type == 'Todos'){   
    const links2 = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' AND impact = '" + req.body.impact + "' AND scope = '" + req.body.scope + "' ORDER BY links.date desc;");
    res.render("links/list", { links2, data_body});
  }
  else if (req.body.impact != 'Todos' && req.body.scope == 'Todos' && req.body.media_type != 'Todos'){   
    const links2 = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' AND impact = '" + req.body.impact + "' AND type = '" + req.body.media_type + "' ORDER BY links.date desc;");
    res.render("links/list", { links2, data_body});
  }
  else if (req.body.impact != 'Todos' && req.body.scope == 'Todos' && req.body.media_type == 'Todos'){   
    const links2 = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' AND impact = '" + req.body.impact + "' ORDER BY links.date desc;");
    res.render("links/list", { links2, data_body});
  }
  else if (req.body.impact == 'Todos' && req.body.scope != 'Todos' && req.body.media_type != 'Todos'){   
    const links2 = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' AND scope = '" + req.body.scope + "' AND type = '" + req.body.media_type + "' ORDER BY links.date desc;");
    res.render("links/list", { links2, data_body});
  }
  else if (req.body.impact == 'Todos' && req.body.scope != 'Todos' && req.body.media_type == 'Todos'){   
    const links2 = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' AND scope = '" + req.body.scope + "' ORDER BY links.date desc;");
    res.render("links/list", { links2, data_body});
  }
  else if (req.body.impact == 'Todos' && req.body.scope == 'Todos' && req.body.media_type != 'Todos'){   
    const links2 = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' AND type = '" + req.body.media_type + "' ORDER BY links.date desc;");
    res.render("links/list", { links2, data_body});
  }
  else if (req.body.impact != 'Todos' && req.body.scope != 'Todos' && req.body.media_type != 'Todos'){   
    const links2 = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' AND impact = '" + req.body.impact + "' AND scope = '" + req.body.scope + "' AND type = '" + req.body.media_type + "' ORDER BY links.date desc;");
    res.render("links/list", { links2, data_body});
  }
};

export const renderAddLink = (req, res) => {
  res.render("links/add");
};

export const addLink = async (req, res) => {
  const {date, type, title, impact, scope, url, description } = req.body;
  const newLink = {
    date,
    type,
    title,
    impact,
    scope,
    url,
    description,
    user_id: req.user.id,
  };
  const newLink2 = {
    date,
    type,
    title,
    impact,
    scope,
    url,
    description,
    file: filenamegl,
    user_id: req.user.id,
  };
  if(filenamegl){
    await pool.query("INSERT INTO links set ?", [newLink2]);    
  }
  else{
    await pool.query("INSERT INTO links set ?", [newLink]);
  }
  req.flash("success", "Link Saved Successfully");
  res.redirect("/links");
};

export const renderLinks = async (req, res) => {
  const links = await pool.query("SELECT * from links ORDER BY links.date desc;");
  const links2 = await pool.query("SELECT * from links where links.date LIKE CURDATE() ORDER BY links.date desc;");
  res.render("links/list", { links, links2 });
};

export const deleteLink = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM links WHERE ID = ?", [id]);
  req.flash("success", "Link Removed Successfully");
  res.redirect("/links");
};

export const renderEditLink = async (req, res) => {
  const { id } = req.params;
  const links = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
  var data_body = links[0];
  console.log(data_body);
  res.render("links/edit", { link: links[0], data_body});
};

export const editLink = async (req, res) => {
  const { id } = req.params;
  const { date, media_type, title, impact, scope, url, description} = req.body;
  console.log(req.body);

  const newLink = {date, type: media_type, title, impact, scope, url, description};
  const newLink2 = {date, type: media_type, title, impact, scope, url, description, file: filenamegl};

  if(filenamegl){
    await pool.query("UPDATE links set ? WHERE id = ?", [newLink2, id]);
  }
  else{
    await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
  }
  req.flash("success", "Link Updated Successfully");
  res.redirect("/links");
};