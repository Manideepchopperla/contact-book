import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Pagination from './components/Pagination'; 
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchContacts();
  }, [currentPage]);

  const fetchContacts = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/contacts?page=${currentPage}&limit=10`);
      const data = await response.json();
      setContacts(data.contacts);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleAddContact = (newContact) => {
    setContacts([newContact, ...contacts]);
    if (contacts.length >= 10) {
      setContacts(contacts.slice(0, 9));
    }
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact._id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">Contact Book</h1>
        
        <ContactForm onAddContact={handleAddContact} />
        
        {error && <div className="error-message">{error}</div>}
        
        {loading ? (
          <div className="loading">Loading contacts...</div>
        ) : (
          <>
            <ContactList 
              contacts={contacts} 
              onDeleteContact={handleDeleteContact}
            />
            
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;