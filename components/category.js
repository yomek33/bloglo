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
              className="text-navy inline-block mr-4 bg-gradient-to-r from-mint to-mint dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
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
