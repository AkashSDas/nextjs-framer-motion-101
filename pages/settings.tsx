import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

function SettingsPage() {
  const router = useRouter();

  return (
    <motion.main>
      <Button onClick={() => router.push("/")} text="Home" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        aspernatur praesentium ipsam iure exercitationem voluptate doloremque
        tempore assumenda odit? Aspernatur eius similique harum minus cum error
        porro, voluptatibus iste pariatur? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Sed voluptas odit saepe corrupti dolorem
        minus voluptatem est aliquid, earum dolor porro doloribus facilis cumque
        excepturi aperiam quos a recusandae. Repudiandae.
      </p>
    </motion.main>
  );
}

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}
const Button = ({ onClick, text }: ButtonProps) => (
  <motion.button
    className="btn"
    onClick={onClick}
    whileTap={{
      scale: 0.95,
      boxShadow: "rgb(0 0 0 / 0.5%) 0px 2px 8px 0px",
    }}
  >
    {text}
  </motion.button>
);

export default SettingsPage;
