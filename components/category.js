import Block from "./block";
import Link from "next/link";
export default function Categories({ categories }) {
  return (
    <Block bordercolor="border-purple">
      <div className="flex flex-col pl-3">
        <div className="text-xl py-3">Category</div>
        <div className="">
          {categories.map(({ name, slug }) => (
            <Link
              href={`/post/category/${slug}`}
              className="text-navy pb-3 inline-block mr-4"
              key={slug}
            >
              #{name}
            </Link>
          ))}
        </div>
      </div>
    </Block>
  );
}
