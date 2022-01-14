import "reflect-metadata";

import express from "express";

import "./database";
import { routes } from "./services/routes";

const app = express();0
app.use(routes);

app.listen(3000, ()=>console.log("Server is running"));