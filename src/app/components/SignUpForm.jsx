// Importe o Axios no topo do arquivo
import axios from 'axios';

// Defina o componente funcional para o formulário de registro
const SignUpForm = () => {

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Função para lidar com a mudança dos inputs do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envie uma requisição POST para a sua API Rails
      const response = await axios.post('http://localhost:8181/api/v1/users', {
        user: {
          name: formData.name,
          email: formData.email,
          password: formData.password
        }
      });

      // Lógica para lidar com a resposta da API
      console.log('Usuário criado com sucesso:', response.data);
      // Aqui você pode redirecionar o usuário para outra página ou atualizar o estado local, etc.

    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      // Lógica para lidar com erros, como exibir uma mensagem de erro para o usuário
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default SignUpForm;
