import express, { Express, Response, Request } from "express";
import cors from "cors";
import mysql from "mysql2";

const app: Express = express();
app.use(cors());

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "api-ancient-wonder",
});

conn.connect((err) => {
  if (err) {
    console.log("connect database failed" + err);
  } else {
    console.log("database connection");
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome, Ancient Wonder API Server");
});

//api server
app.get("/wonder-list", (req: Request, res: Response) => {
  conn.query("SELECT * FROM `ancient_wonder`", (err, result) => {
    if (err) {
      console.log("error to get information: " + err);
    } else {
      const data = result;
      res.send(data);
    }
  });
});

app.get("/wonder-list/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  conn.query(
    "SELECT * FROM `ancient_wonder` WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.log("error to get information: " + err);
      } else {
        const data = result;
        res.send(data);
      }
    }
  );
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
