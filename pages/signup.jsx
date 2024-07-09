// pages/signup.jsx

import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Crie sua conta</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
