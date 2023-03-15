export default function Container({ children, large = false }) {
  const containerClass = large ? "max-w-1280" : "default";

  return (
    <div
      className={`container mx-auto ${
        containerClass === "large" ? "max-w-7xl" : "max-w-screen-lg"
      }`}
    >
      {children}
    </div>
  );
}
