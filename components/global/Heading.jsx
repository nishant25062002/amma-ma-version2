const headingStyles = {
  h1: {
    fontSize: "text-[2.5rem] md:text-[3.5rem]", // 40px / 56px
    lineHeight: "leading-[120%]",
  },
  h2: {
    fontSize: "text-[2.25rem] md:text-[3rem]", // 36px / 48px
    lineHeight: "leading-[120%]",
  },
  h3: {
    fontSize: "text-[2rem] md:text-[2.5rem]", // 32px / 40px
    lineHeight: "leading-[120%]",
  },
  h4: {
    fontSize: "text-[1.5rem] md:text-[2rem]", // 24px / 32px
    lineHeight: "leading-[130%]",
  },
  h5: {
    fontSize: "text-[1.25rem] md:text-[1.5rem]", // 20px / 24px
    lineHeight: "leading-[140%]",
  },
  h6: {
    fontSize: "text-[1.125rem] md:text-[1.25rem]", // 18px / 20px
    lineHeight: "leading-[140%]",
  },
};

// 👇 Map for font families
const fontFamilies = {
  protest: "font-Libre", // Protest Riot
  poppins: "font-inter", // Poppins
};

// font-thin
// font-weight: 100;
// font-extralight
// font-weight: 200;
// font-light
// font-weight: 300;
// font-normal
// font-weight: 400;
// font-medium
// font-weight: 500;
// font-semibold
// font-weight: 600;
// font-bold
// font-weight: 700;
// font-extrabold
// font-weight: 800;
// font-black
// font-weight: 900;

export default function Heading({
  as = "h2",
  level = "h2",
  family = "protest", // default to Protest Riot
  weight = "normal",
  align = "left",
  colorClass = "text-[#0C4539]",
  className = "",
  children,
}) {
  const Tag = as;
  const style = headingStyles[level] || headingStyles.h2;

  const fontWeight = `font-${weight}`;
  const fontFamily = fontFamilies[family] || fontFamilies.protest;

  const classes = [
    style.fontSize,
    style.lineHeight,
    fontWeight,
    fontFamily,
    `text-${align}`,
    colorClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
