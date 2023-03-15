import Image from "next/image";
import icon from "images/icon.jpeg";
import Block from "./block";
import Social from "./social";
export default function Personal() {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  return (
    <Block bordercolor="border-mint">
      <div className="w-full max-w-4xl my-5 flex items-center justify-center flex-col">
        <div className="flex-row ">
          <div className="relative mx-10 aspect-square  w-20 lg:w-56">
            <Image
              src={icon}
              fill
              alt="icon"
              className="rounded-full border border-slate-50"
              sizes="(max-width: 1024px) 18vw,
                    22vw"
              loader={microCMSLoader}
            />
          </div>
          <div className="mx-2 text-center">
            <div className="my-3 space-y-2">
              <h1>Yomek33</h1>
              <p>Undergraduate student in engineering</p>
              <p>currently based in Tokyo/Japan</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Social />
          </div>
        </div>
      </div>
    </Block>
  );
}
