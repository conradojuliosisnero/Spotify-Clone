import { Spinner } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex gap-4">
        <Spinner size="lg" color="success" />
      </div>
    </div>
  );
}
