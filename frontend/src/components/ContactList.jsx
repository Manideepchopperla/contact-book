import ContactItem from './ContactItem';
import './ContactList.css';

function ContactList({ contacts, onDeleteContact }) {
  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        <p>No contacts yet. Add your first contact above!</p>
      </div>
    );
  }

  return (
    <div className="contact-list">
      <h2 className="list-title">Your Contacts</h2>
      <div className="contacts-grid">
        {contacts.map(contact => (
          <ContactItem
            key={contact._id}
            contact={contact}
            onDelete={onDeleteContact}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;