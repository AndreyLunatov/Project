import {InputField} from "../../components/ui";
import {loginApi} from "../../api/authApi.ts";
import {LOGIN_API} from "../../utils";
import {useState} from "react";

export default function LoginPage() {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState('');
  return (
    <section className={'size-full flex items-center justify-center bg-gray-900 overflow-hidden'}>
      <div className={'bg-gray-100 rounded-3xl shadow-2xl max-w-4xl w-full h-150 flex overflow-hidden relative'}>
        <div className={'w-full md:w-1/2 p-12 flex flex-col justify-center'}>
          <h1 className={'text-3xl mb-8'}>Вход</h1>
          <form className={'flex flex-col gap-6 mb-6'} onSubmit={(e) => {
            e.preventDefault();
            loginApi({login: 'login', password: 'password'}).then((res) => {
              console.log(`Отправлено на ${LOGIN_API} с данными: ${JSON.stringify({login, password})}, получено: ${res}`);
            })
          }}>
            <InputField fieldType={'text'} fieldName={'login'} label={'Логин или почта'} placeholder={'Введите логин'} value={login} onChange={(e) => setLogin(e.target.value)}/>
            <InputField fieldType={'password'} fieldName={'password'} label={'Пароль'} placeholder={'Введите пароль'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className={'flex flex-col gap-6'}>
              <button className={'px-4 py-2 bg-accent w-full h-12 rounded-xl cursor-pointer'} type={'submit'}>Войти
              </button>
              <button className={'cursor-pointer text-sm text-gray-600 hover:text-gray-900'} type={'button'}>Нет
                аккаунта? Зарегистрируйтесь
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:flex w-1/2 relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 0 Q 100 300 0 600 L 400 600 L 400 0 Z" fill="#3B82F6" opacity="0.8"></path>
            <path d="M 50 0 Q 150 300 50 600 L 400 600 L 400 0 Z" fill="#60A5FA" opacity="0.6"></path>
            <path d="M 100 0 Q 200 300 100 600 L 400 600 L 400 0 Z" fill="#93C5FD" opacity="0.4"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
