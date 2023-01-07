import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Nouvelles <GradientText>histoires</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Les aventures de Poya"
        description="Poya était une jeune pirate comme il n'en existait pas deux. Depuis son plus jeune âge, elle rêvait de parcourir les océans à la recherche de trésors cachés et de combattre les pirates ennemis..."
        link="/Poya-1"
        img={{ src: '/assets/images/project-poya.png', alt: 'Project pirate' }}
        category={
          <>
            <Tags color={ColorTags.PINK}>Pirate</Tags>
            <Tags color={ColorTags.YELLOW}>Fantome</Tags>
          </>
        }
      />


      <Project
        name="Roktok le petit troll"
        description="Roktok était un petit Troll vif et curieux qui vivait dans la forêt avec sa famille. Un jour, alors qu'il explorait les alentours, il s'était perdu et ne savait plus comment retrouver sa maison..."
        link="/Roktok-1"
        img={{ src: '/assets/images/project-troll.png', alt: 'Project Troll' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Troll</Tags>
            <Tags color={ColorTags.EMERALD}>Dragon</Tags>
          </>
        }
      />

      <Project
        name="Pingi mène l'enquête"
        description="Pingi était un chien policier très intelligent et déterminé. Depuis qu'il avait rejoint la brigade canine, il avait résolu de nombreuses enquêtes..."
        link="/Pingi-1"
        img={{ src: '/assets/images/project-pingi.png', alt: 'Project Pingi' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>Enquête</Tags>
            <Tags color={ColorTags.RED}>Chien policier</Tags>
          </>
        }
      />      
    </div>
  </Section>
);

export { ProjectList };
