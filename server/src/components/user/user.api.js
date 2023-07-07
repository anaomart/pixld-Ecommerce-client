const router = require('express').Router();
const { signUp, signIn } = require('./user.auth');
const { createUser, getUser, deleteUser, updateUser, getUsers, adminChangePassword } = require("./user.service");

// create 
router.post('/', createUser);
// get single user
router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.patch("/:id", adminChangePassword)
router.post("/signup", signUp)
router.post("/signin", signIn)

module.exports = router