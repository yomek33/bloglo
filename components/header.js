import Container from "components/container";

import Nav from "components/nav";
import styles from "styles/header.module.css";
export default function Header() {
  return (
    <header>
      <Container>
        <Nav />
      </Container>
    </header>
  );
}
