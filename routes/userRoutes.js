const {Router} = require('express');

const userController = require('../controllers/userController');

const router = new Router();

router.post('/user', userController.createUser);
router.get('/user', userController.getUsers);
router.get('/user/login', userController.loginUser)
// router.get('/user/:id', userController.getOneUser);
// router.put('/user/:id', userController.updateUser);
// router.delete('/user/:id', userController.deleteUser);

module.exports = router;
