import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({
  size = 50,
  href = null,
  alt = "Logo",
  className = "",
  padding = "p-4",
  shadow = "shadow-lg",
  rounded = "rounded-3xl",
  bgColor = "bg-black/80",
  shadowColor = "#6fff52",
  src = "/logo/logo-white.svg",
}) => {
  const containerClasses = clsx(
    "mx-auto w-fit",
    `h-20 w-20 flex items-center justify-center`,
    shadow,
    bgColor,
    padding,
    rounded,
    shadowColor && `shadow-[${shadowColor}]`,
    className
  );

  const content = (
    <div className={containerClasses}>
      <Image src={src} alt={alt} width={size} height={size} priority />
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

export default Logo;
