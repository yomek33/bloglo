import Link from "next/link";
import Image from "next/image";

export default function Posts({ posts }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  return (
    <div className="grow">
      <div className="flex flex-col items-center bg-white">
        {posts.map(({ title, categories, slug, summary, eyecatch }) => (
          <article
            className="group flex justify-center items-center text-sm font-medium leading-5 text-gray-900"
            key={slug}
          >
            <div className="container px-1 py-5 pm-5 sm:py-10 mx-auto">
              <Link href={`/post/${slug}`}>
                <div className="mx-auto flex flex-wrap">
                  <Image
                    src={eyecatch.url}
                    alt=""
                    loader={microCMSLoader}
                    width={500}
                    height={400}
                    placeholder="blur"
                    blurDataURL={eyecatch.blurDataURL}
                    className="rounded-lg lg:w-1/3 w-full h-full lg:h-auto object-cover object-center"
                  />
                  <div className="lg:w-2/3 w-full lg:pl-10  mt-3 lg:mt-0">
                    <div>
                      {categories.map(({ name, slug }) => (
                        <Link
                          href={`/post/category/${slug}`}
                          className="text-mint  inline-block "
                          key={slug}
                        >
                          #{name}
                        </Link>
                      ))}
                    </div>
                    <span className=" text-xl font-bold bg-gradient-to-r from-pink-200 to-pnik-300 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                      {title}
                    </span>
                    <p className="m-3 line-clamp-4">{summary}...</p>
                  </div>
                </div>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
