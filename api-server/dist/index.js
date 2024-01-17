"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mysql2_1 = __importDefault(require("mysql2"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const conn = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "api-ancient-wonder",
});
conn.connect((err) => {
    if (err) {
        console.log("connect database failed" + err);
    }
    else {
        console.log("database connection");
    }
});
app.get("/", (req, res) => {
    res.send("Welcome, Ancient Wonder API Server");
});
//api server
app.get("/wonder-list", (req, res) => {
    conn.query("SELECT * FROM `ancient_wonder`", (err, result) => {
        if (err) {
            console.log("error to get information: " + err);
        }
        else {
            const data = result;
            res.send(data);
        }
    });
});
app.get("/wonder-list/:id", (req, res) => {
    const id = req.params.id;
    conn.query("SELECT * FROM `ancient_wonder` WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.log("error to get information: " + err);
        }
        else {
            const data = result;
            res.send(data);
        }
    });
});
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log("Listening on port " + port);
});
