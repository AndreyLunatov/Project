import React from 'react';
import { InputField } from '../../components/ui';
import type {RegisterFormProps} from '../../utils';


export const RegisterForm: React.FC<RegisterFormProps> = React.memo(({
                                                                firstName,
                                                                lastName,
                                                                login,
                                                                password,
                                                                errors,
                                                                isSubmitting,
                                                                onFirstNameChange,
                                                                onLastNameChange,
                                                                onLoginChange,
                                                                onPasswordChange,
                                                                onSubmit,
                                                                onSwitchToLogin,
                                                              }) => (
  <div className="bg-gray-100 rounded-3xl shadow-2xl max-w-4xl w-full h-150 flex overflow-hidden relative">
    {/* SVG-фон (развернут) */}
    <div className="hidden md:flex w-1/2 relative overflow-hidden rotate-180">
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
    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
      <h1 className="text-3xl mb-8">Регистрация</h1>
      <form className="flex flex-col gap-6 mb-6" onSubmit={onSubmit}>
        <div className="flex gap-6 mb-2">
          <InputField
            fieldType="text"
            fieldName="firstName"
            label="Имя"
            placeholder="Введите имя"
            value={firstName}
            onChange={onFirstNameChange}
            error={errors.firstName || ''}
          />
          <InputField
            fieldType="text"
            fieldName="lastName"
            label="Фамилия"
            placeholder="Введите фамилию"
            value={lastName}
            onChange={onLastNameChange}
            error={errors.lastName || ''}
          />
        </div>
        <InputField
          fieldType="text"
          fieldName="login"
          label="Логин"
          placeholder="Введите почту"
          value={login}
          onChange={onLoginChange}
          error={errors.login || ''}
        />
        <InputField
          fieldType="password"
          fieldName="password"
          label="Пароль"
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
            Зарегистрироваться
          </button>
          <button
            className="cursor-pointer text-sm text-gray-600 hover:text-gray-900"
            type="button"
            onClick={onSwitchToLogin}
          >
            Есть аккаунт? Зайдите
          </button>
        </div>
      </form>
    </div>
  </div>
));
