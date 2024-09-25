import SignupForm from "./SignupForm"

const RegisterPage = () => {
  return (
    <div className="auth-form">
      <h2>Sign up</h2>
        <SignupForm />
      <p>Already have an account? <a href="/auth/login">Log in!</a></p>
    </div>
  )
}

export default RegisterPage
