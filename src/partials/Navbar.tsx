import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={""}
          name="Nischay's Blog"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/">Home</NavMenuItem>
        <NavMenuItem href="/posts">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/nischay876">GitHub</NavMenuItem>
        <NavMenuItem href="https://dsc.gg/oggys">Discord</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
