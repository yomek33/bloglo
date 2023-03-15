import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Meta from "components/meta";
import Container from "components/container";
import Posts from "components/posts";
import { getPlaiceholder } from "plaiceholder";
import Hero from "@/components/hero";
// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";
import {
  TwoColumnList,
  TwoColumnListMain,
  TwoColumnListSidebar,
} from "@/components/two-column-list";
import Categories from "@/components/category";
export default function Category({ name, posts, categories }) {
  return (
    <Container>
      <TwoColumnList>
        <TwoColumnListMain>
          <Hero title="Category" subtitle={`#${name}`}>
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

export async function getStaticPaths() {
  const allCats = await getAllCategories();
  return {
    paths: allCats.map(({ slug }) => `/post/category/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug;

  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);

  const posts = await getAllPostsByCategory(cat.id);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      name: cat.name,
      posts: posts,
      categories: allCats,
    },
  };
}
