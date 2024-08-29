import { Avatar } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function App() {
  const { data: session } = useSession();

  //cut name
  function cutName(name) {
    if (name) {
      const words = name.split(" ");
      return words.slice(0, 2).join(" ");
    } else {
      return "";
    }
  }

  return (
    <Avatar
      showFallback
      size="lg"
      name={cutName(session?.user?.name)}
      // src="https://images.unsplash.com/broken"
    />
  );
}
