const asyncHandler = require("express-async-handler")

//desc Register a user
//@route GET /api/users/register
//@access public

const createUser = asyncHandler(async (req, res) => {
    res.json({message : "Register the user"});
});

//desc Login user
//@route GET /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
    res.json({message : "Log in the user"});
});

//desc Current user information
//@route GET /api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
    res.json({message : "Current user information"});
});

module.exports = {createUser, loginUser, currentUser}
