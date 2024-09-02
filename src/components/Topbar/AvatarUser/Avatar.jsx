"use client";
import { Avatar } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function App() {
  const [popUp, setPopUp] = useState(false);

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

  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  async function handleLogout() {
    try {
      await signOut({ callbackUrl: "/" });
      console.log("Logout successful");
    } catch (error) {
      console.log(error.message);
    }
  }

  const animations = {
    initial: { opacity: 0, scale: 0.5, transform: "translateY(40px)" },
    animate: { opacity: 1, scale: 1, transform: "translateY(10px)" },
    exit: { opacity: 0, scale: 0.5, transform: "translateY(40px)" },
  };

  return (
    <>
      <Avatar
        className="cursor-pointer"
        onClick={handlePopUp}
        showFallback
        isBordered
        size="lg"
        color="success"
        src={session?.user?.image}
        name={cutName(session?.user?.name)}
      />

      <AnimatePresence>
        {popUp ? (
          <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            duration={0.5}
            className="absolute top-28 right-10 p-5 w-64 h-40 bg-black z-30 bg-opacity-70 backdrop-blur-lg rounded-3xl"
          >
            {session && (
              <button className="btn-primary mt-16" onClick={handleLogout}>
                Logout
              </button>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
