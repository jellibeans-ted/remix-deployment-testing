import BlackLogo from "~/assets/images/logo-black.png";
import WhiteLogo from "~/assets/images/logo-white.png";
import cn from "classnames";

interface LogoProps {
  height?: number | string;
  width?: number | string;
  className?: string;
  color?: "black" | "white";
}

const Logo = ({ height = 27, width = 176, color = "black", className }: LogoProps) => {
  return (
    <img
      src={color === "black" ? BlackLogo : WhiteLogo}
      alt="Jelli.Studio"
      className={cn("w-auto h-auto", className)}
      style={{
        height,
        width,
      }}
    />
  );
};

export default Logo;
