const {Router} = require('express');

const userController = require('../controllers/userController');

const router = new Router();

router.post('/user', userController.postUser);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.putUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
