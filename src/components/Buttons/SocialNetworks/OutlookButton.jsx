import outlook from "../../../assets/social/outlook.svg";
export default function OutlookButton() {
  return (
    <a
      href="mailto:erick.coelho2013@hotmail.com"
      target="_blank"
      rel="noreferrer">
      <img
        className="w-10 h-10 duration-200 hover:scale-110"
        src={outlook}
        alt="Outlook"
      />
    </a>
  );
}
