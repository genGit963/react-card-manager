import * as React from "react";
import { ReactNode } from "react";
import "./custom.css";

type CardTypes = {
  animation_style: "from-left" | "from-right" | "from-bottom" | "from-top";
  children: ReactNode;
};

const CardManager: React.FC<CardTypes> = ({
  animation_style = "from-bottom",
  children,
}) => {
  return (
    <div
      className={`grid grid-cols-auto-fill-200 auto-rows-minmax-200-1fr auto-cols-minmax-200-1fr gap-x-4 gap-y-4 overflow-hidden animate-slide-${animation_style}`}
    >
      {children}
    </div>
  );
};

export default CardManager;
