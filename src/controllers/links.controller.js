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

export const filter_news = async (req, res) => {
  if (req.impact != 'Todos' && req.scope != 'Todos' && req.media_type != 'Todos'){
    var data_body = req.body;
    //impact
    if(data_body.impact == 1){
      data_body.impact = 'Informativo'
    }
    else if(data_body.impact == 2){
      data_body.impact = 'Positivo'
    }
    else if(data_body.impact == 3){
      data_body.impact = 'Negativo'
    }
    //scope
    if(data_body.scope == 1){
      data_body.scope = 'Local'
    }
    else if(data_body.scope == 2){
      data_body.scope = 'Regional'
    }
    else if(data_body.scope == 3){
      data_body.scope = 'Nacional'
    }
    //media_type
    if(data_body.media_type == 1){
      data_body.media_type = 'Medios radiales'
    }
    else if(data_body.media_type == 2){
      data_body.media_type = 'Medios escritos'
    }
    else if(data_body.media_type == 3){
      data_body.media_type = 'TV'
    }
    else if(data_body.media_type == 4){
      data_body.media_type = 'Redes sociales'
    }
    const links = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' ORDER BY links.date desc;");
    res.render("links/list", { links, data_body});
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
  // const links = await pool.query("SELECT * from links where links.date LIKE CURDATE() ORDER BY links.date desc;");
  res.render("links/list", { links });
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
    //impact
    if(data_body.impact == 1){
      data_body.impact = 'Informativo'
    }
    else if(data_body.impact == 2){
      data_body.impact = 'Positivo'
    }
    else if(data_body.impact == 3){
      data_body.impact = 'Negativo'
    }
    //scope
    if(data_body.scope == 1){
      data_body.scope = 'Local'
    }
    else if(data_body.scope == 2){
      data_body.scope = 'Regional'
    }
    else if(data_body.scope == 3){
      data_body.scope = 'Nacional'
    }
    //media_type
    if(data_body.type == 1){
      data_body.type = 'Medios radiales'
    }
    else if(data_body.type == 2){
      data_body.type = 'Medios escritos'
    }
    else if(data_body.type == 3){
      data_body.type = 'TV'
    }
    else if(data_body.type == 4){
      data_body.type = 'Redes sociales'
    }
  console.log(data_body);
  res.render("links/edit", { link: links[0], data_body});
};

export const editLink = async (req, res) => {
  const { id } = req.params;
  const { date, type, title, impact, scope, url, description} = req.body;

  const newLink = {date, type, title, impact, scope, url, description};
  const newLink2 = {date, type, title, impact, scope, url, description, file: filenamegl};

  if(filenamegl){
    await pool.query("UPDATE links set ? WHERE id = ?", [newLink2, id]);
  }
  else{
    await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
  }
  req.flash("success", "Link Updated Successfully");
  res.redirect("/links");
};