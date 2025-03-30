// components/NavLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavLink({
  href,
  children,
  color = "blue",
}: {
  href: string;
  children: ReactNode;
  color?: "blue" | "pink";
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseColor = color === "pink" ? "text-pink-600" : "text-blue-400";
  const hoverColor = color === "pink" ? "hover:text-pink-300" : "hover:text-cyan-200";
  const activeColor = color === "pink" ? "text-pink-300" : "text-cyan-200";

  return (
    <Link
      href={href}
      className={`px-4 py-2 transition-colors duration-200 ${
        isActive ? `${activeColor} ` : `${baseColor} ${hoverColor}`
      }`}
    >
      {children}
    </Link>
  );
}
