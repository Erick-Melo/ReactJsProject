import { useState } from "react";
import ButtonLarge from "../../components/Buttons/ButtonLarge/ButtonLarge";
import ThemeToggleButton from "../../components/Buttons/ThemeToggleButton/ThemeToggleButton";

export default function formRecoveryPassword({ setTab }) {
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [errColor, setErrColor] = useState("bg-red-400");
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const resposeBody = {};
    const formData = new FormData(e.target);
    formData.forEach((value, property) => (resposeBody[property] = value));
    setErrColor("bg-[#183d5a]");
    setErrMessage(
      `Enviando link para o email ${resposeBody.email} - Aguarde...`
    );
    setErr(true);
    setTimeout(() => {
      setErrColor("bg-red-800");
      setErrMessage(
        `Nenhum usuário encontrado para o e-mail ${resposeBody.email}!`
      );
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 3000);
    }, 4000);
  };
  return (
    <form
      className="flex flex-col justify-center bg-gray-50 text-gray-600 dark:bg-gray-600 dark:text-gray-50 rounded-t-[50px] sm:rounded-l-[50px] sm:rounded-tr-[0px] w-full p-10"
      onSubmit={(e) => handleResetPassword(e)}>
        <div className="absolute top-2 right-2"><ThemeToggleButton /></div>
      <div
        className={`${
          !err ? "hidden" : ""
        } p-2  ${errColor} absolute flex items-center top-3 right-3 rounded-xl whitespace-nowrap`}>
        {errMessage}
      </div>
      <div className="font-semibold text-[35px] "></div>
      <div className="mb-10 text-[25px] ">Recuperar senha</div>
      <input
        className="bg-transparent border-b-2 border-gray-400 px-2 mb-5 focus-visible:outline-none py-1"
        type="text"
        name="email"
        placeholder="E-mail cadastrado"
      />
      <div className="text-sm my-4">
        Enviaremos um link de recuperação de senha para o email, caso exista.
      </div>
      <ButtonLarge text="Enviar" type="submit" />
      <a
        className="text-center underline mt-3 cursor-pointer text-xs"
        onClick={() => setTab("login")}>
        Voltar para login
      </a>
      <div className="text-center text-xs mt-10">
        Não possui uma conta?{" "}
        <a
          className="underline cursor-pointer"
          onClick={() => setTab("register")}>
          Fazer cadastro
        </a>
      </div>
    </form>
  );
}
