import React from 'react';
import { InputField } from '../ui';
import type {LoginFormProps} from '../../utils';

export const LoginForm: React.FC<LoginFormProps> = React.memo(({
                                                          login,
                                                          password,
                                                          errors,
                                                          isSubmitting,
                                                          onLoginChange,
                                                          onPasswordChange,
                                                          onSubmit,
                                                          onSwitchToRegister,
                                                        }) => (
  <div className="bg-gray-100 rounded-3xl shadow-2xl max-w-4xl w-full h-150 flex overflow-hidden relative">
    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
      <h1 className="text-3xl mb-8">Вход</h1>
      <form className="flex flex-col gap-4 mb-6" onSubmit={onSubmit}>
        <InputField
          fieldType="text"
          fieldName="login"
          label="Почта:"
          placeholder="Введите e-mail"
          value={login}
          onChange={onLoginChange}
          error={errors.login || ''}
        />
        <InputField
          fieldType="password"
          fieldName="password"
          label="Пароль:"
          placeholder="Введите пароль"
          value={password}
          onChange={onPasswordChange}
          error={errors.password || ''}
        />
        <div className="flex flex-col gap-6">
          <button
            className="px-4 py-2 bg-accent w-full h-12 rounded-xl cursor-pointer disabled:bg-accent/30"
            type="submit"
            disabled={isSubmitting}
          >
            Войти
          </button>
          <button
            className="cursor-pointer text-sm text-gray-600 hover:text-gray-900"
            type="button"
            onClick={onSwitchToRegister}
          >
            Нет аккаунта? Зарегистрируйтесь
          </button>
        </div>
      </form>
    </div>
    {/* SVG-фон */}
    <div className="hidden md:flex w-1/2 relative overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 600"
        preserveAspectRatio="none"
      >
        <path d="M 0 0 Q 100 300 0 600 L 400 600 L 400 0 Z" fill="#3B82F6" opacity="0.8"/>
        <path d="M 50 0 Q 150 300 50 600 L 400 600 L 400 0 Z" fill="#60A5FA" opacity="0.6"/>
        <path d="M 100 0 Q 200 300 100 600 L 400 600 L 400 0 Z" fill="#93C5FD" opacity="0.4"/>
      </svg>
    </div>
  </div>
));
