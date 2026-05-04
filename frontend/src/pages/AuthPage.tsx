import {LoginForm} from "../components/auth/LoginForm.tsx";
import {RegisterForm} from "../components/auth/RegisterForm.tsx";
import {useAuthForm} from "../hooks";
import type {IUseAuthFormParams} from "../utils";

export const AuthPage = ({ submitLogin, submitRegistration }: IUseAuthFormParams) => {
  const auth = useAuthForm({ submitLogin, submitRegistration });

  return (
    <section className="size-full flex items-center justify-center bg-gray-900 overflow-hidden">
      {auth.form === 'login' ? (
        <LoginForm
          login={auth.login}
          password={auth.password}
          errors={auth.errors}
          isSubmitting={auth.isSubmitting}
          onLoginChange={auth.handleLoginChange}
          onPasswordChange={auth.handlePasswordChange}
          onSubmit={auth.handleSubmit}
          onSwitchToRegister={auth.switchToRegister}
        />
      ) : (
        <RegisterForm
          firstName={auth.firstName}
          lastName={auth.lastName}
          login={auth.login}
          password={auth.password}
          errors={auth.errors}
          isSubmitting={auth.isSubmitting}
          onFirstNameChange={auth.handleFirstNameChange}
          onLastNameChange={auth.handleLastNameChange}
          onLoginChange={auth.handleLoginChange}
          onPasswordChange={auth.handlePasswordChange}
          onSubmit={auth.handleSubmit}
          onSwitchToLogin={auth.switchToLogin}
        />
      )}
    </section>
  );
}
