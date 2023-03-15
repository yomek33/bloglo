export default function Title({ title, children }) {
  return (
    <div className="pt-5 flex relative flex-col h-autoitems-stretch">
      <div className="lg:flex  items-baseline  px-4 leading-relaxed">
        <p className="text-4xl font-bold mb-0 mr-8 ">{title}</p>
        <div className="mb-0">{children}</div>
      </div>
    </div>
  );
}
