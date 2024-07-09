import SignUpForm from '../components/SignUpForm'; 

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Bem-vindo ao meu aplicativo!</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
