import express from "express";
import { sayHello } from "../controllers/sayHello.js";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => sayHello(req, res));

export default router;
