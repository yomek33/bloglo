export default function Block({ bordercolor, children }) {
  return (
    <div
      className={`mt-1 w-full justify-between px-2 py-3 border-2 ${bordercolor} my-3 rounded-lg `}
    >
      {children}
    </div>
  );
}
