import "@/styles/styles.css";

export default function Container({ name, children }) {
  return (
    <>
      <div className="container-name">
        <h1 className="container-title">{name}</h1>
      </div>
      <div className="container-card">{children}</div>
    </>
  );
}
