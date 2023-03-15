import Block from "./block";

export default function Hero({ title, children }) {
  return (
    <div className="pt-5 flex flex-col h-auto justify-around items-stretch">
      <div className="flex items-baseline px-4 leading-relaxed">
        <p className="text-4xl font-bold mb-0 whitespace-nowrap">{title}</p>
        <p className="mb-0 mx-8">{children}</p>
      </div>
    </div>
  );
}
