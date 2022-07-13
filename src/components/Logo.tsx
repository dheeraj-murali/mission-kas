import Image from "next/image";
import LogoDark from "../../public/Images/logo-dark.svg";
import LogoLight from "../../public/Images/logo-light.svg";

type LogoProps = {
  width?: number;
  height?: number;
  type: "light" | "dark";
};

export const Logo = (props: LogoProps) => {
  const { height, width, type } = props;

  if (type === "dark")
    return (
      <Image
        src={LogoDark}
        alt="Mission KasLogo"
        width={width}
        height={height}
        priority
      />
    );

  return (
    <Image
      src={LogoLight}
      alt="Mission KasLogo"
      width={width}
      height={height}
      priority
    />
  );
};
