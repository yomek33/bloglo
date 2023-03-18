import parse from "html-react-parser";
import Image from "next/image";
import hljs from "highlight.js";
import "highlight.js/styles/base16/ros-pine-moon.css";
import sml from "highlight.js/lib/languages/sml";
import javascript from "highlight.js/lib/languages/javascript";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
hljs.registerLanguage("sml", sml);
hljs.registerLanguage("javascript", javascript);
export default function ConvertBody({ contentHTML }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            sizes="(min-width: 768px) 768px, 100vw"
            className="rounded-lg"
            loader={microCMSLoader}
          />
        );
      } else if (node.name === "pre" && node.children[0].name === "code") {
        let codestring = node.children[0].children[0].data;
        let lang = "";
        codestring = codestring
          .replace(/\{lang\s*=\s*"([^"]+)"\}/g, (_, match) => {
            lang = match.replace(/{|}/g, "").replace(/lang="|"| /g, "");
            return "";
          })
          .trim();
        const result = lang
          ? hljs.highlight(lang, codestring)
          : hljs.highlightAuto(codestring);
        const result2 = hljs.highlightAuto(codestring);
        const dom = parse(result.value);
        const dom2 = parse(result2.value);
        return (
          <>
            <pre className="hljs">
              <code className={lang}>{dom}</code>
            </pre>
            <pre className="hljs">
              <code>{dom2}</code>
            </pre>
          </>
        );
      }
    },
  });
  return (
    <>
      <div className="prose max-w-none prose-a:decoration-pink-100 prose-h1:underline prose-h2:underline">
        {contentReact}
      </div>
    </>
  );
}
