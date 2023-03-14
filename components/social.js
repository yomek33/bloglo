import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Social({ iconSize = "initial" }) {
  return (
    <ul className="flex gap-6 text-lg" style={{ "--icon-size": iconSize }}>
      <li>
        <a href="https://twitter.com/Pk2Ab">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/yomek33">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  );
}
