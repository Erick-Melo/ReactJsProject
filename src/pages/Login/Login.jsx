import { useNavigate } from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout";

export default function Login() {
  const navigate = useNavigate();
  return (
    <PublicLayout>
      <div className="w-full flex flex-row justify-center gap-3">
        <div
          className="bg-blue-200 text-black px-6 py-2 text-2xl cursor-pointer"
          onClick={() => {
            localStorage.setItem("user", "Usuário");
            navigate("/");
          }}>
          Login
        </div>
        <div
          className="bg-blue-200 text-black px-6 py-2 text-2xl cursor-pointer"
          onClick={() => {
            navigate("/");
          }}>
          Entrar sem logar
        </div>
      </div>
    </PublicLayout>
  );
}
