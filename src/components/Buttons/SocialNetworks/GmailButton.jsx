import gmail from "../../../assets/social/gmail.svg";
export default function GmailButton() {
  return (
    <a
      href="mailto:erick.coelho2013@gmail.com"
      target="_blank"
      rel="noreferrer">
      <img
        className="w-10 h-10 duration-200 hover:scale-110"
        src={gmail}
        alt="G-mail"
      />
    </a>
  );
}
