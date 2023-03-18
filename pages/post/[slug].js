import { getAllCategories, getPostBySlug, getAllSlugs } from "lib/api";
import { extractText } from "lib/extract-text";
import { prevNextPost } from "lib/prev-next-post";
import Meta from "components/meta";
import Container from "components/container";

import Pagination from "components/pagination";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";
import Article from "@/components/article";
import Block from "../../components/block";
import Comments from "../../components/giscus";
import Categories from "@/components/category";

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
  allcategories,
}) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <article>
        <Article
          title={title}
          content={content}
          publish={publish}
          eyecatch={eyecatch}
          nextPost={nextPost}
          prevPost={prevPost}
          categories={categories}
        />
      </article>
      <Block bordercolor="border-blue">
        <Comments />
      </Block>
      <Categories categories={allcategories}></Categories>
    </Container>
  );
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs();

  return {
    paths: allSlugs.map(({ slug }) => `/post/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const allcategories = await getAllCategories();
  const post = await getPostBySlug(slug);
  const description = extractText(post.content);

  const eyecatch = post.eyecatch ?? eyecatchLocal;

  const { base64 } = await getPlaiceholder(eyecatch.url);
  eyecatch.blurDataURL = base64;

  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
      allcategories: allcategories,
    },
  };
}
