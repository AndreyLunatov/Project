export const LoginPage = () => {
  return (
    <section className={'bg-[url("../../../public/package-lock.avif")] min-h-full bg-center text-white'}>
      <form action="" className={'flex flex-col p-6'}>
        <label htmlFor="login"> Login
          <input type="text" name="login" id="login" placeholder="Enter username" className={'border-accent border'}/>
        </label>
        <label htmlFor=""> Password
          <input type="text" name="password" id="login" placeholder="Enter password" className={'border-accent border'}/>
        </label>
      </form>
    </section>
  );
}
