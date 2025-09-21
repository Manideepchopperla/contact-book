import { useState } from 'react';
import axios from 'axios';
import './ContactItem.css';

function ContactItem({ contact, onDelete }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm(`Delete contact ${contact.name}?`)) {
      setDeleting(true);
      try {
        await axios.delete(`/api/contacts/${contact._id}`);
        onDelete(contact._id);
      } catch (error) {
        alert('Failed to delete contact');
        setDeleting(false);
      }
    }
  };

  return (
    <div className="contact-item">
      <div className="contact-info">
        <h3 className="contact-name">{contact.name}</h3>
        <p className="contact-email">{contact.email}</p>
        <p className="contact-phone">{contact.phone}</p>
      </div>
      <button
        className="delete-btn"
        onClick={handleDelete}
        disabled={deleting}
      >
        {deleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
}

export default ContactItem;