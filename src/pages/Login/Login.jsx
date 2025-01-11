import { useNavigate } from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout";
import logo from "../../assets/logos/logo_transparentbg.png";
import loginImg from "../../assets/images/login-img.svg";
import { useState } from "react";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import FormRecoveryPassword from "./formRecoveryPassword";

export default function Login() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("login");
  const [err, setErr] = useState(false);

  return (
    <PublicLayout>
      <section className="grid grid-cols-1 sm:grid-cols-2 w-full justify-center min-h-screen bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
        <div className="flex flex-col gap-6 w-full py-1">
          <img src={logo} className="w-1/3 mx-auto" />
          <div className="w-2/3 mx-auto text-center text-2xl font-bold">
            Faça Login e desfrute de funcionalidades exclusivas.
          </div>
          <img src={loginImg} className="bg-cover w-5/12 mx-auto" />
        </div>
        {tab === "login" ? (
          <FormLogin setErr={setErr} setTab={setTab} />
        ) : tab === "recoveryPassword" ? (
          <FormRecoveryPassword setErr={setErr} setTab={setTab} />
        ) : tab === "register" ? (
          <FormRegister setErr={setErr} setTab={setTab} />
        ) : null}
      </section>
    </PublicLayout>
  );
}
