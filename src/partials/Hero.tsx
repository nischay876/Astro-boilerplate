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
          Hi there, I'm <GradientText>Nischay Sharma</GradientText> 👋
        </>
      }
      description={
        <>
I am a skilled Full-Stack Web Developer with extensive experience in Linux administration and DevOps practices. I have a strong background in building and maintaining web applications using a variety of technologies, including HTML/CSS, JavaScript, React, Node.js, and SQL databases. Additionally, I possess a deep understanding of Linux systems, including shell scripting, server setup, and maintenance. My expertise in DevOps practices allows me to streamline the software development process, ensuring fast and efficient deployment of web applications. Overall, I am a reliable and adaptable developer who is passionate about creating high-quality, user-friendly web applications.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
