"use client";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Holder = ({ children, className = "" }: LayoutProps) => {
  return (
    <div
      className={`w-full h-full inline-block z-0  bg-light text-dark p-32  ${className}`}
    >
      {children}
    </div>
  );
};

export default Holder;