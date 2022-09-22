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
      <div className="flex items-baseline justify-between">
        <div>
          All <GradientText>Projects</GradientText>
        </div>
      </div>
    }
  >
    <div className="flex flex-col gap-6">        
    <div className="text-sm"><a href="">Projects 1 →</a></div>
      <Project
        name="iimg.ml"
        description="Free images sharing service with Zero-Width Spaces share links, Custom domain, Never expire and alot of Customisations..."
        link="https://docs.iimg.ml"
        img={{
          src: 'https://i.imgur.com/FFV6F3C.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Image Sharing</Tags>
            <Tags color={ColorTags.RED}>Node.js</Tags>
            <Tags color={ColorTags.GRAY}>S3</Tags>
            <Tags color={ColorTags.LIME}>Zero Width Shortener</Tags>
            <Tags color={ColorTags.SKY}>PostgreSQL</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <div className="text-sm"><a href="">Projects 2 →</a></div>
      <Project
        name="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Blog</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <div className="text-sm"><a href="">Projects 3 →</a></div>
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
