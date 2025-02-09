import PublicLayout from "../../layouts/PublicLayout";
import logo from "../../assets/logos/logo_transparentbg.png";
import loginImg from "../../assets/images/login-img.svg";
import { useState } from "react";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import FormRecoveryPassword from "./formRecoveryPassword";
import ModalInfo from "../../components/Modals/ModalInfo";
import { textInfo } from "../../constants/textInfo";
import ButtonHelp from "../../components/Buttons/ButtonHelp";

export default function Login() {
  const [tab, setTab] = useState("login");
  const [openModalInfo, setOpenModalInfo] = useState(false);

  return (
    <PublicLayout>
      <section className="grid grid-cols-1 sm:grid-cols-2 w-full justify-center min-h-screen bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
        <div className="flex flex-col gap-6 w-full py-1">
          <img src={logo} className="w-1/3 mx-auto" />
          <div className="w-2/3 mx-auto text-center text-2xl font-bold">
            Faça Login e desfrute de funcionalidades exclusivas.
          </div>
          <img src={loginImg} className="bg-cover w-5/12 mx-auto" />
          <ButtonHelp onclick={() => setOpenModalInfo(true)} />
        </div>
        {tab === "login" ? (
          <FormLogin setTab={setTab} />
        ) : tab === "recoveryPassword" ? (
          <FormRecoveryPassword setTab={setTab} />
        ) : tab === "register" ? (
          <FormRegister setTab={setTab} />
        ) : null}
      </section>
      <ModalInfo
        open={openModalInfo}
        setOpen={setOpenModalInfo}
        text={textInfo}
      />
    </PublicLayout>
  );
}
