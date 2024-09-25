import LoginForm from "./LoginForm"

const LoginPage = () => {
  return (
    <div className="auth-form">
      <h2>Sign in</h2>
      <LoginForm />
      <p>First time here? <a href="/auth/register">Create your account</a></p>
    </div>
  )
}

export default LoginPage
