import "@/styles/styles.css";
import Counter from "../UI/CounterFooter/Couter";

export default function Container({ name, children }) {
  return (
    <>
      <div className="container-name">
        <h1 className="container-title">{name}</h1>
        <span className="absolute top-0 right-0 translate-y-5 font-bold hover:underline text-2xl cursor-pointer">Mostrar todo</span>
      </div>
      <div className="container-card">{children}</div>
      <div className="w-full flex justify-center mt-5 p-5">
        <Counter />
      </div>
    </>
  );
}
