import React from "react";
import Marquee from "react-fast-marquee";

function reactFastMarquee() {
  const brands = [
    {
      src: "https://static.vecteezy.com/system/resources/previews/022/636/386/original/starbucks-logo-starbucks-icon-transparent-free-png.png",
      alt: "starbucks",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/022/100/816/original/microsoft-logo-transparent-free-png.png",
      alt: "microsoft",
    },
    {
      src: "https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-png-transparent-svg-vector-bie-supply-3.png",
      alt: "ibm",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/021/671/890/original/bmw-logo-transparent-free-png.png",
      alt: "bmw",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/019/766/233/non_2x/adidas-logo-adidas-icon-transparent-free-png.png",
      alt: "adidas",
    },
    {
      src: "https://www.pngmart.com/files/23/Adobe-Logo-PNG-Photos.png",
      alt: "Adobe",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/022/100/836/original/puma-logo-transparent-free-png.png",
      alt: "puma",
    },
    {
      src: "https://logowik.com/content/uploads/images/red-bull-black-print8639.logowik.com.webp",
      alt: "RedBullBlack",
    },
  ];
  return (
    <Marquee pauseOnHover={true} speed={100} delay={3} direction="right">
      {brands.map((i) => (
        <img src={i.src} alt={i.alt} width={200} height={200} />
      ))}
    </Marquee>
  );
}

export default reactFastMarquee;
