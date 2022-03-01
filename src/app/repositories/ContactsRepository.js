const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Luiz',
    phone: '1234567890',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Edu',
    phone: '22233322233',
    category_id: v4(),
  },
];

class ContacsRepository {
  findAll() {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  deleteById(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4,
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));
      resolve(updatedContact);
    });
  }
}

module.exports = new ContacsRepository();
