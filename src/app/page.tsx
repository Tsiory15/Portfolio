"use client";

import { useEffect } from "react";
import Hero from '../app/pages/hero'
import Menu from '../app/components/menu'

export default function Home() {
  useEffect(() => {
    (async () => {
      const Locomotivescroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new Locomotivescroll();
    })();
  }, []);

  return <>
    <Hero/>
  </>;
}
