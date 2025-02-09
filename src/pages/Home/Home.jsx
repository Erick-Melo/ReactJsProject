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
    <MainLayout page="Início">
      <div className="w-full flex flex-col gap-3 items-center justify-center">
        <div
          className="bg-contain bg-center w-40 h-40 rounded-full my-4"
          style={{ backgroundImage: `url(${photo})` }}
        />
        <div className="text-2xl font-bold">Olá, Sou o Erick!</div>
        <div className="px-5 text-justify max-w-2xl">
          Olá, sou o Erick Melo, um desenvolvedor front end com mais de dois
          anos de experiência, atualmente trabalhando como PJ numa start-up.
          <br />
          Me formei em ciências da computação em julho de 2024.
          <br /> Desenvolvi alguns sistemas e web sites sem instrução de um
          desenvolvedor de nível superior. Aprendi muito no processo, e tenho me
          interessado cada vez mais em me especializar e evoluir como
          desenvolvedor.
          <br /> Por tanto estou saindo da minha zona de conforto e correndo
          atrás de evolução na minha carreira. Tenho estudado bastante e me
          aprofundado em tecnologias que tinham apenas visto de relance na
          faculdade.
          <br />
          Esse sistema é um compilado de algumas coisas que aprendi e apliquei
          no meu trabalho; pretendo incrementar esse site com atualizações
          semanais para estar sempre incrementando meu portfólio de
          conhecimentos.
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
