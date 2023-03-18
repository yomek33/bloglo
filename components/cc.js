import parse from "html-react-parser";
import hljs from "highlight.js";
import "highlight.js/styles/base16/ros-pine-moon.css";

export default function ConvertBody({ contentHTML }) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node.name === "pre" && node.children[0].name === "code") {
        let codestring = node.children[0].children[0].data;
        let lang = "";
        codestring = codestring
          .replace(/\{cmslang\s*=\s*"([^"]+)"\}/g, (_, match) => {
            lang = match.replace(/{|}/g, "").replace(/lang="|"| /g, "");
            return "";
          })
          .trim();
        const result = hljs.getLanguage(lang)
          ? hljs.highlight(lang, codestring)
          : hljs.highlightAuto(codestring);
        const dom = parse(result.value);
        return (
          <pre>
            <code>{dom}</code>
          </pre>
        );
      }
    },
  });
  return (
    <>
      <div className="prose max-w-none">{contentReact}</div>
    </>
  );
}
