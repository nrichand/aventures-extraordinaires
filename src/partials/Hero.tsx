import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Salut, C'est <GradientText>Nathaniel</GradientText> 👋
        </>
      }
      description={
        <>
          Bienvenue dans votre premier site d'histoires intéractives {' '}
          <a className="text-cyan-400 hover:underline" href="/">
            AVENTURES EXTRAORDINAIRES !
          </a>{' '}
          Découvrez et participer à l'aventure de Roktok le troll, Pingi le chien policier, Elinda la fée malicieuse...
        </>
      }
      avatar={
        <img
          className="w-120 h-80" 
          src="/assets/images/aventuresExtra-cover.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
