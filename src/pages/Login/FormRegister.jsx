import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLoginWithSocialNw from "./FormLoginWithSocialNw";
import ButtonLarge from "../../components/Buttons/ButtonLarge";
import InputLogin from "../../components/Inputs/InputLogin";
import ThemeToggleButton from "../../components/Buttons/ThemeToggleButton";

export default function FormRegister({ setTab }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [remember, setRemember] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const responseBody = {};
    formData.forEach((value, property) => (responseBody[property] = value));
    if (responseBody.name !== "") {
      localStorage.setItem("user", responseBody.name);
      navigate("/");
    }
  };
  useEffect(() => {
    const savedUsername = localStorage.getItem("user");
    if (savedUsername) {
      setUsername(savedUsername);
      setRemember(true);
    }
  }, []);

  return (
    <form
      className="flex flex-col justify-center bg-gray-50 text-gray-600 dark:bg-gray-600 dark:text-gray-50 rounded-t-[50px] sm:rounded-l-[50px] sm:rounded-tr-[0px] w-full p-10"
      onSubmit={(e) => handleRegister(e)}>
      <div className="absolute top-2 right-2">
        <ThemeToggleButton />
      </div>
      <div className="font-semibold text-[35px] ">Bem vindo,</div>
      <div className="mb-10 text-[25px] ">Vamos criar sua conta</div>
      <div className="flex flex-col sm:flex-row gap-2">
        <InputLogin type="text" name="name" placeholder="Nome completo" />
        <InputLogin type="text" name="state" placeholder="Estado" />
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <InputLogin type="text" name="email" placeholder="E-mail" />
        <InputLogin type="text" name="phone" placeholder="Telefone" />
      </div>
      <InputLogin
        type="password"
        name="password"
        placeholder="Crie sua senha"
      />
      <InputLogin
        type="password"
        name="password2"
        placeholder="Repetir senha"
      />
      <div className="flex flex-row justify-between items-center py-6">
        <div className="flex flex-row items-center gap-1">
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
        <a
          className="text-end mt-1 cursor-pointer text-xs"
          onClick={() => setTab("login")}>
          Voltar para login
        </a>
      </div>
      <ButtonLarge text="Criar conta" type="submit" />
      <FormLoginWithSocialNw />
    </form>
  );
}
