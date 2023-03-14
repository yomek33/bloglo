import Container from "components/container";

import Social from "components/social";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Social />
        </div>
      </Container>
    </footer>
  );
}
