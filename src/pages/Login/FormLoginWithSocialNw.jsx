import x from "../../assets/logos/new-twitter.svg";
import apple from "../../assets/logos/apple.svg";
import google from "../../assets/logos/google.svg";
import facebook from "../../assets/logos/facebook.svg";
import { useNavigate } from "react-router-dom";
export default function FormLoginWithSocialNw() {
  const navigate = useNavigate();
  function handleLogin(socialnw) {
    let user = "";
    switch (socialnw) {
      case "Facebook":
        user = "Mark Zuckerberg";
        break;
      case "Apple":
        user = "Tim Cook";
        break;
      case "Google":
        user = "Sundar Pichai";
        break;
      case "Twitter":
        user = "Elon Musk";
        break;
    }
    localStorage.setItem("user", user);
    navigate("/");
  }
  return (
    <>
      <div className="flex flex-row gap-1 items-center justify-center mt-5 text-xs text-gray-600 dark:text-gray-50 whitespace-nowrap">
        <div className="bg-gray-400 h-[1px] w-full" />
        Fazer login com
        <div className="bg-gray-400 h-[1px] w-full" />
      </div>
      <div className="flex flex-row justify-around mt-5">
        <div
          className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-[5px] shadow-sm cursor-pointer"
          onClick={() => handleLogin("Facebook")}>
          <img src={facebook} className="w-[25px] h-[25px]" />
        </div>
        <div
          className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-[5px] shadow-sm cursor-pointer"
          onClick={() => handleLogin("Apple")}>
          <img src={apple} className="w-[25px] h-[25px]" />
        </div>
        <div
          className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-[5px] shadow-sm cursor-pointer"
          onClick={() => handleLogin("Google")}>
          <img src={google} className="w-[25px] h-[25px]" />
        </div>
        <div
          className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-[5px] shadow-sm cursor-pointer"
          onClick={() => handleLogin("Twitter")}>
          <img src={x} className="w-[25px] h-[25px]" />
        </div>
      </div>
    </>
  );
}
