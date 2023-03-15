import ConvertDate from "components/convert-date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Block from "./block";
import Image from "next/image";
import Title from "./title";
import PostBody from "./post-body";
import ConvertBody from "./convert-body";
import Pagination from "./pagination";
import Link from "next/link";
export default function Article({
  title,
  categories,
  eyecatch,
  content,
  prevPost,
  nextPost,
  publish = "",
}) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  return (
    <div className="flex flex-col  justify-around items-strech">
      <Block bordercolor="border-navy">
        <Title title={title}>
          <div className="lg:flex justify-between">
            <div>
              {categories.map(({ name, slug }) => (
                <Link
                  href={`/post/category/${slug}`}
                  className="text-mint pb-3 inline-block mr-4"
                  key={slug}
                >
                  #{name}
                </Link>
              ))}
            </div>
            <div class=" right-0 ">
              <div class=" gap-2 pb-3 text-gray-500 text-xs w-full">
                {publish && (
                  <div className="flex  items-center gap-2 text-gray-500 text-sm w-full">
                    <FontAwesomeIcon
                      icon={faClock}
                      size="lg"
                      className="text-gray-400"
                    />
                    <ConvertDate dateISO={publish} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Title>
        <div className="px-10 flex-col justify-center">
          <figure>
            <Image
              key={eyecatch.url}
              src={eyecatch.url}
              alt=""
              style={{
                width: "70%",
                height: "auto",
              }}
              width={eyecatch.width}
              height={eyecatch.height}
              sizes="(min-width: 1152px) 1152px, 100vw"
              priority
              placeholder="blur"
              blurDataURL={eyecatch.blurDataURL}
              loader={microCMSLoader}
              className="justify-center mb-10 mx-auto w-full"
            />
          </figure>
          <PostBody>
            <ConvertBody contentHTML={content} />
          </PostBody>
        </div>

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/post/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/post/${nextPost.slug}`}
        />
      </Block>
    </div>
  );
}
