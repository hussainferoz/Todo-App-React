const express = require('express');

const router = express.Router();

const { getLogin, postLogin } = require('../controllers/authentication');
const authMiddleware = require('../middleware/authentication');

//@route    GET /api/login
//@desc     Login user
//@access   Private
router.get('/', authMiddleware, getLogin);

//@route    POST /api/login
//@desc     Authenticate the user and get the token
//@access   Public
router.post('/', postLogin);

module.exports = router;
