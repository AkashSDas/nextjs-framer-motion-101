import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import MultiSection from "../components/MultiSection";

function HomePage() {
  const router = useRouter();

  return (
    <motion.main
    // initial={{ x: "-110vw" }}
    // animate={{ x: "0vw" }}
    // transition={{ delay: 0.2 }}
    // layoutId="main"
    >
      <motion.h1
      // initial="hidden"
      // animate="visible"
      // variants={{
      //   hidden: {
      //     scale: 50,
      //     y: 150,
      //     opacity: 0,
      //   },
      //   visible: {
      //     scale: 1,
      //     y: 0,
      //     opacity: 1,
      //     transition: { delay: 0, duration: 1, type: "tween" },
      //   },
      // }}
      >
        NextFramer
      </motion.h1>

      <Button onClick={() => router.push("/settings")} text="Home" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic
        facilis molestias. Alias vitae ipsa fuga eos id. Fugiat, recusandae enim
        eaque aut totam consectetur eos tempore amet dolorum officiis.
      </p>

      <MultiSection />
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

const Example1 = () => (
  <>
    {" "}
    <motion.h1
      initial={{
        scale: 30,
        y: 100,
        opacity: 0.5,
      }}
      animate={{
        scale: 1,
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 4,
        scale: { type: "tween" },
        y: { type: "tween" },
        opacity: { type: "tween" },
        default: { duration: 600 },
      }}
    >
      Home Page
    </motion.h1>
    <motion.div
      className="card"
      animate={{ scale: 2 }}
      transition={{ duration: 0.5 }}
    />
    <motion.div
      className="card"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    />
  </>
);

export default HomePage;
