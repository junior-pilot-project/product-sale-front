import AuthForm from 'components/auth/AuthForm';
import AuthTemplate from 'components/auth/AuthTemplate';

const LoginPage = () => {
  return (
    <>
      <AuthTemplate>
        <AuthForm type="login"></AuthForm>
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
