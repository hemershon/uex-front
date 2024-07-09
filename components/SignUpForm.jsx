// Componente de registro (RegisterForm.jsx)

import axios from 'axios';
import { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    contact: {
      name: '',
      cpf: '',
      phone: '',
      address: ''
    }
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8181/api/v1/sign_up', {
        user: {
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.passwordConfirmation,
          contact_attributes: formData.contact // Envia os dados do contato
        }
      });

      console.log('User signed up successfully:', response.data);
      // Lógica adicional após o registro do usuário

    } catch (error) {
      console.error('Error signing up:', error);
      // Tratar erros de requisição conforme necessário
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('contact.')) {
      const contactField = name.split('.')[1];
      setFormData(prevState => ({
        ...prevState,
        contact: {
          ...prevState.contact,
          [contactField]: value
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="E-mail" required />
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Senha" required />
      <input type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleInputChange} placeholder="Confirmação de Senha" required />
      <input type="text" name="contact.name" value={formData.contact.name} onChange={handleInputChange} placeholder="Nome" required />
      <input type="text" name="contact.cpf" value={formData.contact.cpf} onChange={handleInputChange} placeholder="CPF" required />
      <input type="text" name="contact.phone" value={formData.contact.phone} onChange={handleInputChange} placeholder="Telefone" required />
      <input type="text" name="contact.address" value={formData.contact.address} onChange={handleInputChange} placeholder="Endereço" required />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegisterForm;
