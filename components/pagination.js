import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination({
  prevText = "",
  prevUrl = "",
  nextText = "",
  nextUrl = "",
}) {
  return (
    <ul className="flex flex-col sm:flex-row items-center justify-between gap-4 my-4">
      {prevText && prevUrl && (
        <li className="text-center sm:text-left mb-2 sm:mb-0 mr-2 sm:mr-0">
          <Link href={prevUrl} className="flex items-center gap-2">
            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-400" />
            <span className="text-gray-400">{prevText}</span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className="text-center sm:text-right ml-2 sm:ml-0">
          <Link href={nextUrl} className="flex items-center gap-2">
            <span className="text-gray-400">{nextText}</span>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
          </Link>
        </li>
      )}
    </ul>
  );
}
