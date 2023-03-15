import Container from "components/container";

import Block from "./block";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="bottom-0 mt-auto w-full">
      <Container>
        <div className="flex justify-center items-center">
          <Block bordercolor="border-yellow" className="w-1/2">
            <div className="flex justify-center container items-center px-4 mx-auto">
              <div>
                <span>© Moeka Mishima </span>
                <a href="https://twitter.com/Pk2Ab">
                  <FontAwesomeIcon icon={faTwitter} />

                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </Block>
        </div>
      </Container>
    </footer>
  );
}
