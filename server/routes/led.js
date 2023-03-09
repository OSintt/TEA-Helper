import { Router } from "express";
import { toggleLed } from "../controllers/led.controllers";

const router = new Router();

router.post('/', toggleLed);