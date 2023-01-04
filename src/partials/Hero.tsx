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
          Salut, C'est <GradientText>Fantaisia</GradientText> 👋
        </>
      }
      description={
        <>
          Votre site d'histoires interactives pour enfants qui vous emmènera à la rencontre de trolls, de dragons et de chats volants!
          <br />
          Suivez vos personnages préférés et choisissez leur destinée à chaque étape de l'histoire.
        </>
      }
      avatar={
        <img
          className="w-80 h-120" 
          src="/assets/images/aventuresExtra-cover-vert.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
