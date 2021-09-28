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
    console.log(req.body);
    const links = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' ORDER BY links.date desc;");
    console.log(links)
    res.render("links/list", { links });
  }
  
};


export const renderAddLink = (req, res) => {
  res.render("links/add");
};

export const addLink = async (req, res) => {
  const {date, type, title, impact, url, description } = req.body;
  const newLink = {
    date,
    type,
    title,
    impact,
    url,
    description,
    user_id: req.user.id,
  };
  const newLink2 = {
    date,
    type,
    title,
    impact,
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
  const links = await pool.query("SELECT * from links where links.date LIKE CURDATE() ORDER BY links.date desc;");
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
  console.log(links);
  res.render("links/edit", { link: links[0] });
};

export const editLink = async (req, res) => {
  const { id } = req.params;
  const { date, type, title, impact, url, description } = req.body;

  const newLink = {date, type, title, impact, url, description};
  const newLink2 = {date, type, title, impact, url, description, file: filenamegl};

  if(filenamegl){
    await pool.query("UPDATE links set ? WHERE id = ?", [newLink2, id]);
  }
  else{
    await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
  }
  req.flash("success", "Link Updated Successfully");
  res.redirect("/links");
};