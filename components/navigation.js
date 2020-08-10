import { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          TECH_Hayven
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-sm-auto">
            <NavItem>
              <Link href={{ pathname: "/portfolio" }}>
                <a className="nav-link">Projects</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href={{ pathname: "/blog/allPosts" }}>
                <a className="nav-link">Blog</a>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/whayven" target="_blank">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
