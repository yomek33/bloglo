import styles from "styles/container.module.css";

export default function Container({ children, large = false }) {
  const containerClass = large ? "max-w-1280" : "default";

  return (
    <div className={`w-full mx-auto ${styles[containerClass]}`}>{children}</div>
  );
}
