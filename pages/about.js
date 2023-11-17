import Meta from "components/meta";
import Container from "components/container";

import Image from "next/image";
import eyecatch from "images/about.jpeg";
import Personal from "@/components/personalInfo";
import Block from "@/components/block";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column";

export default function About() {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  return (
    <Container>
      <Meta
        pageTitle="Yomek33 Home"
        pageDesc="Home yomek33"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
          loader={microCMSLoader}
          className="rounded-lg mb-3"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <Block className="min-h-300 w-full max-w-4xl my-5 flex items-center justify-center flex-col">
            準備中....
            <p>Zennで投稿するかも！</p>
            <a
              className="border-b border-b-pink-400"
              href="https://zenn.dev/yomek33"
            >
              yomek33の記事一覧 | Zenn
            </a>
          </Block>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Personal />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
