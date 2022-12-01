const fs = require("fs").promises;
const path = require("path");
// const { nanoid } = require("nanoid");
import { nanoid } from "nanoid";

const contactsPath = path.resolve("./contacts.json");

async function listContacts() {
    try {
      const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
}

async function getContactById(contactId) {
    try {
        const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
        const contactById = data.find((contact) => contact.id === contactId);
        return contactById;
    } catch (error) {
        console.log(error);
    }
}

async function removeContact(contactId) {
  try {
      const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
      const filteredContacts = JSON.stringify(data.filter(contact => contact.id !== contactId));
      await fs.writeFile(contactsPath, filteredContacts, 'utf8');
  } catch (error) {
    console.log(error);
  }
}

async function addContact({name, email, phone}) {
 try {
    const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
     const newContact = JSON.stringify(data.push({ id: nanoid(3), name, email, phone }));
     await fs.writeFile(contactsPath, newContact, "utf8");
 } catch (error) {
    console.log(error);
 }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
