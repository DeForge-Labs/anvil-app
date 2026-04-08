import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    shadow,
    bgColor,
    padding,
    rounded,
    shadowColor ? `shadow-[${shadowColor}]` : `shadow-[#6fff52]`,
    className
  );

  const content = (
    <div className={containerClasses}>
      <div className={cn(`flex items-center justify-center`)} style={{ height: size, width: size }}>
        <Image src={src} alt={alt} width={size} height={size} priority />
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

export default Logo;
