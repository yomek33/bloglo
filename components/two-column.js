export function TwoColumn({ children }) {
  return <div className="lg:flex  justify-around items-strech">{children}</div>;
}

export function TwoColumnMain({ children }) {
  return <div className="lg:mr-2 lg:w-3/5  hidden sm:block">{children}</div>;
}

export function TwoColumnSidebar({ children }) {
  return <div className="lg:ml-2 lg:w-2/5">{children}</div>;
}
