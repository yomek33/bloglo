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
import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      repo="yomek33/bloglo"
      repoId="R_kgDOJIqpOA"
      ategory="Announcements"
      categoryId="DIC_kwDOJIqpOM4CU5j6"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="ja"
      crossorigin="anonymous"
    />
  );
}
