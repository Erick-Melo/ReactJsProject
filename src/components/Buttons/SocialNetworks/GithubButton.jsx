import github from "../../../assets/social/github.svg";
export default function GithubButton() {
  return (
    <a
      href="https://www.github.com/Erick-Melo"
      target="_blank"
      rel="noreferrer">
      <img
        className="w-10 h-10 duration-200 hover:scale-110" 
        src={github}
        alt="Github"
      />
    </a>
  );
}
