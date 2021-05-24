import { motion } from "framer-motion";
import "../styles/styles.scss";

function MyApp({ Component, pageProps, router }) {
  console.log(router.route);
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          x: "-110vw",
        },
        pageAnimate: {
          x: "0vw",
        },
      }}
      // transition={{ type: "tween" }}
    >
      <Component {...pageProps} />;
    </motion.div>
  );
}

export default MyApp;
