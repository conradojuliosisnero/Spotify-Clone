import { User } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function App() {
  const { data: session } = useSession();
  return (
    <User
      name={session?.user?.name}
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
    />
  );
}
