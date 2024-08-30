import { useSession } from "next-auth/react";

export default function Section({ children, name }) {
    const { data: session } = useSession();
    // funtion cut name
    function cutName(name) {
      if (name) {
        const words = name.split(" ");
        return words.slice(0, 1).join(" ");
      } else {
        return null;
      }
    }
  return (
    <div className="p-5 mt-5 mb-5 w-full rounded shadow">
      <div className="flex justify-between font-semibold text-4xl">
        <p className="my-7">{name} para ti {cutName(session?.user?.name)}</p>
      </div>
      {children}
    </div>
  );
}
