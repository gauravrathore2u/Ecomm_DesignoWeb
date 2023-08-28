const router = require('express').Router();
const userController = require('../controller/userController.js');


router.route("/signup").post(userController.userSignUp);
router.route('/login').post(userController.userLogin);
router.route('/profile/:email').get(userController.profile);


module.exports = router;