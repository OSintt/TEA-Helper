import { Router } from "express";

const router = new Router();

router.use('/led', require('./led'));

module.exports = router;