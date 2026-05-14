"use client";

interface Props {
  children?: React.ReactNode;
  speed?: number;
  className?: string;
  as?: "div" | "span" | "section";
  cssProgress?: boolean;
}

export default function ParallaxElement({
  children,
  speed = 0,
  className,
  as: Tag = "div",
  cssProgress,
}: Props) {
  return (
    <Tag
      data-scroll=""
      data-scroll-speed={speed}
      {...(cssProgress ? { "data-scroll-css-progress": "" } : {})}
      className={className}
    >
      {children}
    </Tag>
  );
}
