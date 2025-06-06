// components/Text.jsx

const fontSizes = {
  large: "text-[1.25rem] leading-[150%]", // 20px
  medium: "text-[1.125rem] leading-[150%]", // 18px
  regular: "text-[1rem] leading-[150%]", // 16px
  small: "text-[0.875rem] leading-[150%]", // 14px
  tiny: "text-[0.75rem] leading-[150%]", // 12px
  micro: "text-[0.5rem] leading-[100%]", // 12px
};

// const fontWeights = {
//   extrabold: "font-extrabold",
//   bold: "font-bold",
//   semibold: "font-semibold",
//   medium: "font-medium",
//   normal: "font-normal",
//   light: "font-light",
// };

// 👇 Map for font families
const fontFamilies = {
  protest: "font-Libre", // Protest Riot
  inter: "font-inter", // Inter
};

export default function Text({
  family = "inter", // default to Poppins
  size = "regular", // 'large' | 'medium' | 'regular' | 'small' | 'tiny'
  weight = "normal", // 'extrabold' | 'bold' | 'semibold' | 'medium' | 'normal' | 'light'
  align = "left", // 'left' | 'center' | 'right'
  className = "text-[#000700]", // Extra classes
  children,
  ...rest
}) {
  const sizeClass = fontSizes[size] || fontSizes.regular;
  const weightClass = `font-${weight}`;
  const alignClass = `text-${align}`;
  const fontFamily = fontFamilies[family];

  const classes = [sizeClass, weightClass, fontFamily, alignClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
}
