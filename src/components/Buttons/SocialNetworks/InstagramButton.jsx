import instagram from "../../../assets/social/instagram.svg";
export default function InstagramButton() {
  return (
    <a
      href="http://www.instagram.com/erick_joseah"
      target="_blank"
      rel="noreferrer">
      <img
        className="w-10 h-10 duration-200 hover:scale-110" 
        src={instagram}
        alt="Instagram"
      />
    </a>
  );
}
