import { getAllPosts, getAllCategories } from "lib/api";
import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import Posts from "components/posts";
import { getPlaiceholder } from "plaiceholder";
import Block from "@/components/block";
import { eyecatchLocal } from "lib/constants";
import Personal from "@/components/personalInfo";
import {
  TwoColumnList,
  TwoColumnListMain,
  TwoColumnListSidebar,
} from "@/components/two-column-list";

import Categories from "@/components/category";
export default function Blog({ posts, categories }) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <TwoColumnList>
        <TwoColumnListMain>
          <Hero title="Post" subtitle="Recent Posts">
            <Posts posts={posts} />
          </Hero>
        </TwoColumnListMain>
        <TwoColumnListSidebar>
          <Categories categories={categories}></Categories>
        </TwoColumnListSidebar>
      </TwoColumnList>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);
  const categories = await getAllCategories();
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }
  console.log(posts);

  return {
    props: {
      posts: posts,
      categories: categories,
    },
  };
}
