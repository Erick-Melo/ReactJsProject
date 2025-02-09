import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { LuPencilLine } from "react-icons/lu";
import ButtonSmall from "../../components/Buttons/ButtonSmall";
import HiddenShowPassword from "../../components/Buttons/HiddenShowPassword";
import InputInternal from "../../components/Inputs/InputInternal";
import GenericSmallAlert from "../../components/Alerts/GenericSmallAlert";
import { compressAndSaveImage } from "../../utils/compressAndSaveImage";
import { loadImageBase64 } from "../../utils/loadImageBase64";

export default function UserProfile() {
  const [typePwVisualization, setTypePwVisualization] = useState("password");
  const [typePwVisualization2, setTypePwVisualization2] = useState("password");
  const [openAlert, setOpenAlert] = useState(false);
  const [description, setDescription] = useState("");
  const [typeAlert, setTypeAlert] = useState("success");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const responseBody = [];
    formData.forEach((value, property) => (responseBody[property] = value));
    if (responseBody.new_password !== responseBody.new_password2) {
      setOpenAlert(true);
      setTypeAlert("warning");
      setDescription("As senhas não conferem!");
      setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    } else {
      setOpenAlert(true);
      setTypeAlert("success");
      setDescription("A senha foi alterada com sucesso!");
      e.target.reset();
      setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    }
  };
  const handleUpdateImgProfile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      await compressAndSaveImage(file, "profile")
        .then(() => {
          setOpenAlert(true);
          setTypeAlert("success");
          setDescription("Imagem salva com sucesso!");
          setTimeout(() => {
            setOpenAlert(false);
          }, 3000);
        })
        .catch((error) => {
          setOpenAlert(true);
          setTypeAlert("Ocorreu um erro, tente usar outra imagem!");
          setDescription(error);
          setTimeout(() => {
            setOpenAlert(false);
          }, 3000);
        });
    }
  };
  return (
    <MainLayout page="Perfil do usuário">
      <GenericSmallAlert
        open={openAlert}
        text={description}
        type={typeAlert}
        duration={3000}
      />
      <div className="flex flex-col">
        <div className="flex flex-col bg-white dark:bg-[#ffffff15] p-10 mx-4 md:mx-0 rounded-lg md:col-span-3 my-10">
          <div className="font-bold text-2xl text-center">Configurações</div>
          <Disclosure
            as="div"
            className="border-b-2 border-gray-300"
            defaultOpen={false}>
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between py-4 px-2">
                  <div className="text-lg">Alterar imagem de perfil</div>
                  <AiOutlinePlus className={open && "hidden"} />
                  <AiOutlineMinus className={!open && "hidden"} />
                </DisclosureButton>
                <DisclosurePanel>
                  <form
                    onChange={(e) => handleUpdateImgProfile(e)}
                    className="flex flex-col gap-3 mt-2">
                    <div className="relative rounded-[50%] mx-auto border-2 border-[#5e97a8] w-[100px] h-[100px] bg-gray-400 flex justify-center ">
                      {localStorage.getItem("profile-img") == "" ||
                      localStorage.getItem("user") == null ? (
                        <div className=" flex justify-center items-center w-full h-full text-[50px] font-semibold text-white">
                          {localStorage.getItem("user").toUpperCase()}
                        </div>
                      ) : (
                        <img
                          className="rounded-full object-cover"
                          src={localStorage.getItem("profile")}
                        />
                      )}
                    </div>
                    <div className="flex text-center w-fit realtive -mt-10 z-10 mx-auto pl-[70px]">
                      <label
                        htmlFor="image"
                        className="cursor-pointer bg-[#5e97a8] text-[#042121] w-fit rounded-full p-2">
                        <LuPencilLine className="h-4 w-4" />
                        <input
                          className="hidden"
                          name="image"
                          type="file"
                          id="image"
                        />
                      </label>
                    </div>
                  </form>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
          <Disclosure
            as="div"
            className="border-b-2 border-gray-300"
            defaultOpen={false}>
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between py-4 px-2">
                  <div className="text-lg">Alterar senha</div>
                  <AiOutlinePlus className={open && "hidden"} />
                  <AiOutlineMinus className={!open && "hidden"} />
                </DisclosureButton>
                <DisclosurePanel>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 mt-2">
                    <div className="flex flex-row gap-2 items-center mx-auto pr-6">
                      <InputInternal
                        name="old_password"
                        type="password"
                        placeholder={"Antiga senha"}
                        autoComplete="old_password"
                      />
                    </div>
                    <div className="flex flex-row gap-2 items-center mx-auto">
                      <InputInternal
                        name="new_password"
                        type={typePwVisualization}
                        placeholder={"Nova senha"}
                        autoComplete="new-password"
                      />
                      <HiddenShowPassword
                        typePwVisualization={typePwVisualization}
                        setTypePwVisualization={setTypePwVisualization}
                      />
                    </div>
                    <div className="flex flex-row gap-2 items-center mx-auto">
                      <InputInternal
                        name="new_password2"
                        type={typePwVisualization2}
                        placeholder={"Repita a nova senha"}
                        autoComplete="new-password"
                      />
                      <HiddenShowPassword
                        typePwVisualization={typePwVisualization2}
                        setTypePwVisualization={setTypePwVisualization2}
                      />
                    </div>
                    <div className="flex justify-center w-full my-4">
                      <ButtonSmall text="Salvar" type="submit" />
                    </div>
                  </form>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </MainLayout>
  );
}
