import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();

  // Exemplo de efeito para redirecionar se o usuário não estiver autenticado
  useEffect(() => {
    // Verifica se o token está presente no localStorage ou em algum estado de autenticação global
    const token = localStorage.getItem('token'); // ou de onde você estiver armazenando o token

    if (!token) {
      // Se não houver token, redireciona para a página de login
      router.push('/login');
    }
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-5">Dashboard</h1>
      {/* Conteúdo do dashboard aqui */}
    </div>
  );
};

export default Dashboard;
