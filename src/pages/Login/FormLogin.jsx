import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLoginWithSocialNw from "./FormLoginWithSocialNw";
import ButtonLarge from "../../components/Buttons/ButtonLarge";
import ThemeToggleButton from "../../components/Buttons/ThemeToggleButton";

export default function FormLogin({ setTab }) {
  const [username, setUsername] = useState("user");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const responseBody = {};
    formData.forEach((value, property) => (responseBody[property] = value));
    localStorage.setItem("user", responseBody.login);
    navigate("/");
  };

  return (
    <form
      className="flex flex-col justify-center bg-gray-50 text-gray-600 dark:bg-gray-600 dark:text-gray-50 rounded-t-[50px] sm:rounded-l-[50px] sm:rounded-tr-[0px] w-full p-10"
      onSubmit={(e) => handleLogin(e)}>
        <div className="absolute top-2 right-2"><ThemeToggleButton /></div>
      <div className="font-semibold text-[35px] ">Olá,</div>
      <div className="mb-10 text-[25px] ">Faça seu login.</div>
      <input
        className="bg-transparent border-b-2 border-gray-400 px-2 mb-5 focus-visible:outline-none py-1"
        type="text"
        defaultValue={username}
        name="login"
        placeholder="Nome de usuário"
      />
      <input
        className="bg-transparent px-2 border-b-2 border-gray-400 focus-visible:outline-none py-1"
        type="password"
        name="password"
        placeholder="Senha"
      />
      <div className="flex flex-row items-center gap-1 my-4">
        <input
          type="checkbox"
          name="remember"
          id="remember"
          className="w-4 h-4"
        />
        <label htmlFor="remember" className="text-sm">
          Lembrar de mim
        </label>
      </div>
      <ButtonLarge text="Entrar" type="submit" />
      <a
        className="text-center underline mt-3 cursor-pointer text-xs"
        onClick={() => setTab("recoveryPassword")}>
        Esqueci minha senha
      </a>
      <div className="text-center text-xs mt-10">
        Não possui uma conta?{" "}
        <a
          className="underline cursor-pointer"
          onClick={() => setTab("register")}>
          Fazer cadastro
        </a>
      </div>
      <FormLoginWithSocialNw />
    </form>
  );
}
