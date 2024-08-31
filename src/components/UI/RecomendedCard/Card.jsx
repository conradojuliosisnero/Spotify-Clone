export default function RecommendedCard({ children, category }) {
  return (
    <div
      style={{ backgroundColor: category.backgroundColor }}
      className="w-72 flex h-60 rounded-xl relative overflow-hidden shadow-lg"
    >
      {children}
    </div>
  );
}
