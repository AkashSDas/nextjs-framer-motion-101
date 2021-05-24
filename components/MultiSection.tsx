import { AnimatePresence, motion } from "framer-motion";
import { MouseEventHandler, useState } from "react";

// If we use the Section component instead of directly using the motion.p
// component in MutliSection then we won't see the exit animation and
// the reason I think is because Section is not motion component but we
// can convert custom component into motion components to get animations
// benefits. I haven't tried this method but this might solve the issue
// of exit animation while using custom components
// Official doc for converting custom component to motion component
// https://www.framer.com/api/motion/component/#custom-components

function MultiSection() {
  const [sectionId, setSectionId] = useState(0);

  const displaySection = () => {
    if (sectionId == 0)
      return (
        <Section
          sectionId={sectionId}
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At consequuntur dignissimos earum debitis hic magni, unde esse aliquid. Qui maiores eos ducimus fugit repellendus veritatis iste nulla molestias reiciendis nisi."
        />
      );
    else if (sectionId == 1)
      return (
        <Section
          sectionId={sectionId}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti autem sed in voluptas molestiae incidunt, animi facere eius harum? Nostrum dolore qui nisi laborum quas voluptatibus sed impedit neque esse placeat consequuntur vel ab non velit optio, expedita, id sequi laudantium odio, porro libero tempora voluptas? Eum consectetur veritatis atque, quis explicabo earum necessitatibus! Accusamus dolorem sequi ipsum repellat architecto consequuntur consequatur sunt maxime aliquid numquam, consectetur nobis! Eius nobis ut nemo neque ab blanditiis, illum quam quis tenetur consequuntur magni delectus eaque provident dolorem assumenda non sunt aspernatur quos dignissimos repudiandae nesciunt quod tempore! Ipsam, dignissimos officiis. Possimus."
        />
      );
    else if (sectionId == 2)
      return (
        <Section
          sectionId={sectionId}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, libero placeat? In sit explicabo non laborum deserunt? Distinctio recusandae nesciunt dignissimos eveniet vel possimus cumque fugiat obcaecati, suscipit repellat reprehenderit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error porro quia deleniti quos repellendus magnam reprehenderit, dignissimos assumenda nemo consequatur placeat architecto? Fuga incidunt dolor adipisci ullam veritatis voluptatem provident!"
        />
      );
  };

  return (
    <div className="multisection">
      <div>
        <Button onClick={() => setSectionId(0)} text="Section 1" />
        <Button onClick={() => setSectionId(1)} text="Section 2" />
        <Button onClick={() => setSectionId(2)} text="Section 3" />
      </div>
      <div>
        {/* <AnimatePresence exitBeforeEnter>{displaySection()}</AnimatePresence> */}
        <AnimatePresence exitBeforeEnter>
          {sectionId == 0 ? (
            <motion.p
              initial="initial"
              animate="in"
              exit="out"
              variants={sectionVariant}
              // style={{ overflowX: "hidden", width: "75ch" }}
              transition={{ duration: 0.5 }}
              key={sectionId}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
              consequuntur dignissimos earum debitis hic magni, unde esse
              aliquid. Qui maiores eos ducimus fugit repellendus veritatis iste
              nulla molestias reiciendis nisi.
            </motion.p>
          ) : null}

          {sectionId == 1 ? (
            <motion.p
              initial="initial"
              animate="in"
              exit="out"
              variants={sectionVariant}
              // style={{ overflowX: "hidden", width: "75ch" }}
              transition={{ duration: 0.5 }}
              key={sectionId}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              deleniti autem sed in voluptas molestiae incidunt, animi facere
              eius harum? Nostrum dolore qui nisi laborum quas voluptatibus sed
              impedit neque esse placeat consequuntur vel ab non velit optio,
              expedita, id sequi laudantium odio, porro libero tempora voluptas?
              Eum consectetur veritatis atque, quis explicabo earum
              necessitatibus! Accusamus dolorem sequi ipsum repellat architecto
              consequuntur consequatur sunt maxime aliquid numquam, consectetur
              nobis! Eius nobis ut nemo neque ab blanditiis, illum quam quis
              tenetur consequuntur magni delectus eaque provident dolorem
              assumenda non sunt aspernatur quos dignissimos repudiandae
              nesciunt quod tempore! Ipsam, dignissimos officiis. Possimus.
            </motion.p>
          ) : null}

          {sectionId == 2 ? (
            <motion.p
              initial="initial"
              animate="in"
              exit="out"
              variants={sectionVariant}
              // style={{ overflowX: "hidden", width: "75ch" }}
              transition={{ duration: 0.5 }}
              key={sectionId}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              libero placeat? In sit explicabo non laborum deserunt? Distinctio
              recusandae nesciunt dignissimos eveniet vel possimus cumque fugiat
              obcaecati, suscipit repellat reprehenderit! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Error porro quia deleniti quos
              repellendus magnam reprehenderit, dignissimos assumenda nemo
              consequatur placeat architecto? Fuga incidunt dolor adipisci ullam
              veritatis voluptatem provident!
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

const sectionVariant = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: "0",
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const Section = ({ sectionId, text }: { sectionId: number; text: string }) => {
  return (
    <motion.p
      initial="initial"
      animate="in"
      exit="out"
      variants={sectionVariant}
      // style={{ overflowX: "hidden", width: "75ch" }}
      transition={{ duration: 0.5 }}
      key={sectionId}
    >
      {text}
    </motion.p>
  );
};

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

export default MultiSection;
