export default function Title({ title, children }) {
  return (
    <div className="pt-5 flex flex-col h-auto justify-around items-stretch">
      <div className="header  justify-between items-center">
        <div className="flex items-baseline px-4 leading-relaxed">
          <p className="text-4xl font-bold mb-0 whitespace-nowrap">{title}</p>
        </div>
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
}
