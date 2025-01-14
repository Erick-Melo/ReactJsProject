import linkedin from "../../../assets/social/linkedin.svg";
export default function LinkedinButton() {
  return (
    <a
      href="https://www.linkedin.com/in/erickjosecmelo/"
      target="_blank"
      rel="noreferrer">
      <img
        className="w-10 h-10 duration-200 hover:scale-110"
        src={linkedin}
        alt="Linkedin"
      />
    </a>
  );
}
