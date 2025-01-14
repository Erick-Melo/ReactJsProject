import discord from "../../../assets/social/discord.svg";
export default function DiscordButton() {
  return (
    <a
      href="https://discord.com/users/Erick#0442"
      target="_blank"
      rel="noreferrer">
      <img
        className="w-10 h-10 duration-200 hover:scale-110" 
        src={discord}
        alt="Discord"
      />
    </a>
  );
}
