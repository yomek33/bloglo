import parse from "html-react-parser";
import Image from "next/image";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
export default function ConvertBody({ contentHTML }) {
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
          />
        );
      } else if (node.name === "code") {
        const result = hljs.highlightAuto(node.children[0].data);
        const dom = parse(result.value);
        return <code className="hljs">{dom}</code>;
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
