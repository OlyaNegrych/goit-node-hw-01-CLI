const fs = require("fs");
// const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      console.error(error);
    }
    console.log(JSON.parse(data));
    return data;
  });

//   (async () => {
//     try {
//       const data = await fs.readFile(contactsPath, "utf8");
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   })();
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // fs.writeFile('./contacts.js', newInfo, 'utf8');...
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
