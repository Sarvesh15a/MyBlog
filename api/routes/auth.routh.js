import express from 'express'
import {google, signin, signup} from '../controller/auth.controller.js';

const router= new express.Router();

router.post("/signup", signup)
router.post("/signin", signin)
router.post('/google', google)


export default router