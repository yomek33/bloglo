import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});
const getSummary = (contentString) => {
  const SUMMARY_LIMIT = 200;
  const text = contentString.replace(/<[^>]+>/g, " "); // HTMLタグをスペースに置換する
  const summary = text.slice(0, SUMMARY_LIMIT);
  return summary;
};
export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: "post",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("~~ getPostBySlug ~~");
    console.log(err);
  }
}

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: "post",
      queries: { fields: "title,slug", orders: "-publishDate", limit: limit },
    });
    return slugs.contents;
  } catch (err) {
    console.log("~~ getAllSlugs ~~");
    console.log(err);
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "post",
      queries: {
        fields: "title,categories,content,slug,eyecatch",
        orders: "-publishDate",
        limit: limit,
      },
    });
    const postswithsummary = posts.contents.map((post) => {
      const summary = getSummary(post.content);
      return {
        ...post,
        summary,
      };
    });
    return postswithsummary;
  } catch (err) {
    console.log("~~ getAllPosts ~~");
    console.log(err);
  }
}

export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: "categories",
      queries: {
        fields: "name,id,slug",
        limit: limit,
      },
    });
    return categories.contents;
  } catch (err) {
    console.log("~~ getAllCategories ~~");
    console.log(err);
  }
}

export async function getAllPostsByCategory(catID, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "post",
      queries: {
        filters: `categories[contains]${catID}`,
        orders: "-publishDate",
        limit: limit,
      },
    });
    const postswithsummary = posts.contents.map((post) => {
      const summary = getSummary(post.content);
      return {
        ...post,
        summary,
      };
    });
    return postswithsummary;
  } catch (err) {
    console.log("~~ getAllPostsByCategory ~~");
    console.log(err);
  }
}
