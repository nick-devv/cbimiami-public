import Link from "next/link";
import { PropsWithChildren } from "react";

type Variant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends PropsWithChildren {
  href?: string;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
  showIcon?: boolean;
  iconSrc?: string;
}

function classNames(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-white hover:bg-primary-dark",
  ghost: "bg-transparent text-primary hover:text-primary-dark border border-primary",
};

export function Button({
  href,
  children,
  variant = "secondary",
  className,
  target,
  rel,
  showIcon = true,
  iconSrc = "/arrowR.svg",
}: ButtonProps) {
  const classes = classNames(
    "inline-flex items-center gap-2 rounded-sm font-semibold px-5 py-3 text-lg leading-none transition-all duration-150",
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href} target={target} rel={rel}>
        {children}
        {showIcon && <img src={iconSrc} alt="" className="h-3 w-3" />}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
      {showIcon && <img src={iconSrc} alt="" className="h-3 w-3" />}
    </button>
  );
}

export default Button;

