"use client";

import { useEffect, useRef } from "react";
import Hero from './pages/hero'

export default function Home() {
  const scrollRef = useRef(null)
  useEffect(() => {
    (async () => {
      const Locomotivescroll = (await import("locomotive-scroll")).default;
      new Locomotivescroll({
        el:scrollRef.current,
        smooth:true
      });
    })();
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Hero/>
    </div>
  )
}
