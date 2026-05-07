// app/controllers/userController.js
const User = require('../models/userModel');
exports.home = (req, res) => {
  res.render('index');
};
exports.listUsers = (req, res) => {
  const users = User.findAll();
  res.render('users', { users });
};
exports.createUser = (req, res) => {
  const { name, email, linkimg } = req.body;
  User.create(name, email, linkimg);
  res.redirect('/users');
};
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.delete(id);
  res.redirect('/users');
};
exports.buyUser = (req, res) => {  
  const { id } = req.params;
  User.buy(id);
  res.redirect('/users');
}
exports.sellUser = (req, res) => {
  const {id} = req.params;
  User.sell(id);
  res.redirect('/users');
}