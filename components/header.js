import Container from "components/container";

import Nav from "components/nav";

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Nav />
        </div>
      </Container>
    </header>
  );
}
