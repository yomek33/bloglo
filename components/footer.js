import Container from "components/container";

import Social from "components/social";
import styles from "styles/footer.module.css";
import Block from "./block";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full">
      <Container>
        <div className="flex justify-center items-center">
          <Block bordercolor="border-yellow" class="w-1/2">
            <div className="flex justify-center container items-center px-4 mx-auto">
              <p>
                <span>© Moeka Mishima </span>
                <a href="https://twitter.com/Pk2Ab">
                  <FontAwesomeIcon icon={faTwitter} />

                  <span className="sr-only">Twitter</span>
                </a>
              </p>
            </div>
          </Block>
        </div>
      </Container>
    </footer>
  );
}
