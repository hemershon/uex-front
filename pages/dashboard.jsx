// pages/dashboard.js (ou dashboard.jsx se estiver usando TypeScript)

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }
  
        const response = await axios.get('http://localhost:8181/api/v1/contacts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log('Contacts:', response.data); // Verifique os dados recebidos aqui
  
        setContacts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setLoading(false);
        // Tratar erros de requisição conforme necessário
      }
    };
  
    fetchContacts();
  }, []);

  if (loading) {
    return <p>Carregando contatos...</p>;
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">Dashboard</h1>
      <div className="mt-5">
        <h2>Meus Contatos</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <strong>{contact.name}</strong> - {contact.phone}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
