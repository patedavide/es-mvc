// app/models/userModel.js
let users = [];
const User = {
  findAll: () => users,
  create: (name, email, linkimg, quantitaOggetto, prezzoOggetto) => {
    const newUser = { id: Date.now(), name, email, linkimg, quantitaOggetto : Number(quantitaOggetto), prezzoOggetto };
    users.push(newUser);
    return newUser;
  },
  findById: (id) => users.find(u => u.id === parseInt(id)),
  delete: (id) => {
    users = users.filter(u => u.id !== parseInt(id));
  },

  buy: (id) => {
    const user = User.findById(id);
    if (user) {
      user.quantitaOggetto++;
    }
  },

  sell: (id) => {
    const user = User.findById(id);
    if (user && user.quantitaOggetto > 0) {
      user.quantitaOggetto--;
    }
  }     
};
module.exports = User;