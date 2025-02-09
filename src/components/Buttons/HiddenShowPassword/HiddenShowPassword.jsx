import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function HiddenShowPassword({
  typePwVisualization,
  setTypePwVisualization,
}) {
  if (typePwVisualization === "password") {
    return <AiOutlineEye onClick={() => setTypePwVisualization("text")} />;
  } else if (typePwVisualization === "text") {
    return (
      <AiOutlineEyeInvisible
        onClick={() => setTypePwVisualization("password")}
      />
    );
  }
}
