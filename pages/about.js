import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from "components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";

import Image from "next/image";
import eyecatch from "images/about.jpeg";
import Personal from "@/components/personalInfo";
import Block from "@/components/block";

export default function About() {
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
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
          class="rounded-lg"
        />
      </figure>
      <div className="flex  justify-around items-strech">
        <div className="mr-2 sm:w-3/5  hidden sm:block">
          <Block className="min-h-300 w-full max-w-4xl my-5 flex items-center justify-center flex-col">
            準備中....
          </Block>
        </div>
        <div className="ml-2 sm:w-2/5">
          <Personal></Personal>
        </div>
      </div>
    </Container>
  );
}
