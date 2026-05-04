import React, { useState, useCallback } from 'react';
import type {IUseAuthFormParams, TFormErrors} from "../utils";

export const useAuthForm  = ({ submitLogin, submitRegistration }: IUseAuthFormParams) => {
  const [form, setForm] = useState<'login' | 'register'>('login');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState<TFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Стабильные обработчики
  const handleLoginChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    setErrors(prev => ({ ...prev, login: undefined }));
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrors(prev => ({ ...prev, password: undefined }));
  }, []);

  const handleFirstNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    setErrors(prev => ({ ...prev, firstName: undefined }));
  }, []);

  const handleLastNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    setErrors(prev => ({ ...prev, lastName: undefined }));
  }, []);

  // Валидация
  const validateForm = useCallback((): boolean => {
    const newErrors: TFormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!login.trim()) {
      newErrors.login = 'Введите email';
    } else if (!emailRegex.test(login.trim())) {
      newErrors.login = 'Некорректный email';
    }

    if (!password) {
      newErrors.password = 'Введите пароль';
    } else if (password.length < 8) {
      newErrors.password = 'Пароль должен быть не менее 8 символов';
    } else if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
      newErrors.password = 'Пароль должен содержать хотя бы одну заглавную букву и цифру';
    }

    if (form === 'register') {
      if (!firstName) newErrors.firstName = 'Не введено имя';
      if (!lastName) newErrors.lastName = 'Не введена фамилия';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [login, password, firstName, lastName, form]);

  // Отправка
  const handleSubmit = useCallback(async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;
    setIsSubmitting(true);
    try {
      if (form === 'login') {
        const success = await submitLogin(login, password);
        if (!success) setErrors({ login: 'Неверный логин или пароль' });
      } else {
        const success = await submitRegistration(firstName, lastName, login, password);
        if (!success) setErrors({ login: 'Неверные данные' });
      }
    } catch {
      setErrors({ general: 'Ошибка соединения с сервером' });
    } finally {
      setIsSubmitting(false);
    }
  }, [form, login, password, firstName, lastName, validateForm, submitLogin, submitRegistration, isSubmitting]);

  // Переключение форм со сбросом
  const switchToRegister = useCallback(() => {
    setForm('register');
    setErrors({});
    setFirstName('');
    setLastName('');
    setLogin('');
    setPassword('');
  }, []);

  const switchToLogin = useCallback(() => {
    setForm('login');
    setErrors({});
    setLogin('');
    setPassword('');
  }, []);

  return {
    form,
    login,
    password,
    firstName,
    lastName,
    errors,
    isSubmitting,
    handleLoginChange,
    handlePasswordChange,
    handleFirstNameChange,
    handleLastNameChange,
    handleSubmit,
    switchToRegister,
    switchToLogin,
  };
}
