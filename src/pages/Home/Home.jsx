import MainLayout from "../../layouts/MainLayout";
import photo from "../../assets/images/the-man.jpg";
import DiscordButton from "../../components/Buttons/SocialNetworks/DiscorBuutton";
import GithubButton from "../../components/Buttons/SocialNetworks/GithubButton";
import InstagramButton from "../../components/Buttons/SocialNetworks/InstagramButton";
import LinkedinButton from "../../components/Buttons/SocialNetworks/LinkedinButton";
import GmailButton from "../../components/Buttons/SocialNetworks/GmailButton";
import OutlookButton from "../../components/Buttons/SocialNetworks/OutlookButton";

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-3 items-center justify-center">
        <div
          className="bg-contain bg-center w-40 h-40 rounded-full my-4"
          style={{ backgroundImage: `url(${photo})` }}
        />
        <div className="text-2xl font-bold">Olá, Sou o Erick!</div>
        <div className="px-5 text-justify max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="text-xl font-bold">Minhas redes sociais</div>
        <div className="flex flex-row gap-2">
          <DiscordButton />
          <InstagramButton />
          <GmailButton />
          <OutlookButton />
          <LinkedinButton />
          <GithubButton />
        </div>
      </div>
    </MainLayout>
  );
}
