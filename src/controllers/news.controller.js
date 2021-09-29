import pool from "../database";

export const filter_news = async (req, res) => {
    if (req.impact != 'Todos' && req.scope != 'Todos' && req.media_type != 'Todos'){
      console.log(req.body);
      const links = await pool.query("SELECT * FROM links WHERE links.date >= '" + req.body.start_day + "' AND links.date <= '" + req.body.end_day + "' ORDER BY links.date desc;");
      res.render("partials/news", { links });
    }
    
};
  