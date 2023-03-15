const giscusscript = `<script src="https://giscus.app/client.js"
        data-repo=yomek33/bloglo"
        data-repo-id="R_kgDOJIqpOA"
        data-category="Announcements"
        data-category-id="DIC_kwDOJIqpOM4CU5j6"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="ja"
        crossorigin="anonymous"
        async>
</script>`;
import parse from "html-react-parser";

export default function Giscus() {
  const contentReact = parse(giscusscript);
  return (
    <>
      <div className="prose">{contentReact}</div>
    </>
  );
}
