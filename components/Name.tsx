import React from "react";
import styles from "@/styles/bubble.module.css";

const CustomeName = () => {
  return (
    <div className="grid h-screen place-content-center ">
      <BubbleText />
    </div>
  );
};
const BubbleText = () => {
  return (
    <h2 className="text-black lg:text-[28px] text-[16px] font-serif font-medium">
      {"Frontend Engineer & Mobile App Dev".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default CustomeName;
