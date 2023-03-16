import Block from "./block";

export default function Hero({ title, subtitle, children }) {
  return (
    <div className="flex flex-col  justify-around items-strech">
      <Block bordercolor="border-navy">
        <div className="pt-5 flex flex-col h-auto justify-around items-stretch">
          <div className="flex items-baseline px-4 leading-relaxed">
            <p className="text-4xl font-bold mb-0 whitespace-nowrap">{title}</p>
            {subtitle.includes("#") ? (
              <p className="mb-0 text-mint mx-8">{subtitle}</p>
            ) : (
              <p className="mb-0 mx-8">{subtitle}</p>
            )}
          </div>

          <div className="w-full">{children}</div>
        </div>
      </Block>
    </div>
  );
}
