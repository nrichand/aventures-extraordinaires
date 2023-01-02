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
        name="Roktok le petit troll"
        description="Roktok était un petit Troll vif et curieux qui vivait dans la forêt avec sa famille. Un jour, alors qu'il explorait les alentours, il s'était perdu et ne savait plus comment retrouver sa maison..."
        link="/Roktok-1"
        img={{ src: '/assets/images/project-troll.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Troll</Tags>
            <Tags color={ColorTags.EMERALD}>Dragon</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
