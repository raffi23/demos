import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export * from "gsap";
export * from "gsap/ScrollTrigger";
export * from "gsap/ScrollToPlugin";
export * from "@gsap/react";
