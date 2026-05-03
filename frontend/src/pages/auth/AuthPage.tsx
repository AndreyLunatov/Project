import {InputField} from "../../components/ui";
import {useState} from 'react';
import type {ILogin, TFormErrors} from "../../utils";

export default function AuthPage({submitLogin}: ILogin) {
  const [form, setForm] = useState<'login' | 'register'>('login');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState<TFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    // Валидация email
    if (!login.trim()) {
      newErrors.login = 'Введите email';
    } else if (login.trim().length < 3) {
      newErrors.login = 'Логин должен быть не менее 3 символов';
    } else if (!login.includes('@')) {
      newErrors.login = 'Логин не является почтой';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(login)) {
        newErrors.login = 'Некорректный email';
      }
    }

    // Валидация пароля
    if (!password) {
      newErrors.password = 'Введите пароль';
    } else if (password.length < 8) {
      newErrors.password = 'Пароль должен быть не менее 8 символов';
    } else if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
      newErrors.password = 'Пароль должен содержать хотя бы одну заглавную букву и цифру';
    }

    if (form === 'register') {
      if (!firstName) {
        newErrors.firstName = 'Не введено имя';
      }

      if (!lastName) {
        newErrors.lastName = 'Не введена фамилия';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;
    setIsSubmitting(true);
    try {
      const success = await submitLogin(login, password);
      if (!success) {
        setErrors({login: 'Неверный логин или пароль'});
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="size-full flex items-center justify-center bg-gray-900 overflow-hidden">
      {form === 'login' ? (
        <div className="bg-gray-100 rounded-3xl shadow-2xl max-w-4xl w-full h-150 flex overflow-hidden relative">
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <h1 className="text-3xl mb-8">Вход</h1>
            <form className="flex flex-col gap-6 mb-6" onSubmit={formSubmit}>
              {/* Поле логина / email */}
              <div>
                <InputField
                  fieldType="text"
                  fieldName="login"
                  label="Почта:"
                  placeholder="Введите e-mail"
                  value={login}
                  onChange={(e) => {
                    setLogin(e.target.value);
                    if (errors.login) setErrors((prev) => ({...prev, login: undefined}));
                  }}
                  error={errors.login || ''}
                />
              </div>

              {/* Поле пароля */}
              <div>
                <InputField
                  fieldType="password"
                  fieldName="password"
                  label="Пароль:"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors((prev) => ({...prev, password: undefined}));
                  }}
                  error={errors.password || ''}
                />
              </div>

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
                  onClick={() => {
                    setErrors({})
                    setForm('register')
                  }}
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0 0 Q 100 300 0 600 L 400 600 L 400 0 Z" fill="#3B82F6" opacity="0.8"/>
              <path d="M 50 0 Q 150 300 50 600 L 400 600 L 400 0 Z" fill="#60A5FA" opacity="0.6"/>
              <path d="M 100 0 Q 200 300 100 600 L 400 600 L 400 0 Z" fill="#93C5FD" opacity="0.4"/>
            </svg>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 rounded-3xl shadow-2xl max-w-4xl w-full h-150 flex overflow-hidden relative">
          {/* SVG-фон */}
          <div className="hidden md:flex w-1/2 relative overflow-hidden rotate-180">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 600"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 0 0 Q 100 300 0 600 L 400 600 L 400 0 Z" fill="#3B82F6" opacity="0.8"/>
              <path d="M 50 0 Q 150 300 50 600 L 400 600 L 400 0 Z" fill="#60A5FA" opacity="0.6"/>
              <path d="M 100 0 Q 200 300 100 600 L 400 600 L 400 0 Z" fill="#93C5FD" opacity="0.4"/>
            </svg>
          </div>
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <h1 className="text-3xl mb-8">Регистрация</h1>
            <form className="flex flex-col gap-6 mb-6" onSubmit={formSubmit}>
              {/* Поле имя / фамилия / email / пароля */}
              <div>
                <div className={'flex gap-6 mb-2'}>
                  <InputField
                    fieldType="text"
                    fieldName="firstName"
                    label={'Имя'}
                    placeholder={'Введите имя'}
                    value={firstName}
                    onChange={e => {
                      setFirstName(e.target.value)
                      if (errors.firstName) setErrors((prev) => ({...prev, firstName: undefined}));
                    }}
                    error={errors.firstName || ''}
                  />
                  <InputField
                    fieldType="text"
                    fieldName="lastName"
                    label={'Фамилия'}
                    placeholder={'Введите фамилию'}
                    value={lastName}
                    onChange={e => {
                      setLastName(e.target.value)
                      if (errors.lastName) setErrors((prev) => ({...prev, lastName: undefined}));
                    }}
                    error={errors.lastName || ''}
                  />
                </div>
                <InputField
                  fieldType="text"
                  fieldName="login"
                  label={'Логин'}
                  placeholder={'Введите почту'}
                  value={login}
                  onChange={e => {
                    setLogin(e.target.value)
                    if (errors.login) setErrors((prev) => ({...prev, login: undefined}));
                  }}
                  error={errors.login || ''}
                />
                <InputField
                  fieldType="password"
                  fieldName="password"
                  label={'Пароль'}
                  placeholder={'Введите пароль'}
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors((prev) => ({...prev, password: undefined}));
                  }}
                  error={errors.password || ''}
                />
              </div>

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
                  onClick={() => {
                    setErrors({})
                    setForm('login')
                  }}
                >
                  Есть аккаунт? Зайдите
                </button>
              </div>
            </form>
          </div>
        </div>

      )}
    </section>
  );
}
