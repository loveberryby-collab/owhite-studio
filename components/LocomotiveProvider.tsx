"use client";

import { useEffect, useRef } from "react";

export default function LocomotiveProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let scroll: { destroy: () => void } | null = null;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
        },
      });
    })();

    return () => {
      scroll?.destroy();
    };
  }, []);

  return <>{children}</>;
}
