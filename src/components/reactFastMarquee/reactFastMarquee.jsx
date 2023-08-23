import React from "react";
import Marquee from "react-fast-marquee";
import brands from "./reactFastMarqueeItems";
function reactFastMarquee() {
  return (
    <Marquee pauseOnHover={true} speed={100} delay={3} direction="right">
      {brands.map((i, index) => (
        <img src={i.src} alt={i.alt} width={200} height={200} key={index} />
      ))}
    </Marquee>
  );
}

export default reactFastMarquee;
