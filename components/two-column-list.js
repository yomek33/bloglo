export function TwoColumnList({ children }) {
  return <div className="lg:flex  justify-around items-strech">{children}</div>;
}

export function TwoColumnListMain({ children }) {
  return <div className="mr-2 lg:w-4/5">{children}</div>;
}

export function TwoColumnListSidebar({ children }) {
  return <div className="ml-2 lg:w-1/5">{children}</div>;
}
