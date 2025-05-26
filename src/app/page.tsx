"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const Locomotivescroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new Locomotivescroll();
    })();
  }, []);

  return <div>Home</div>;
}
