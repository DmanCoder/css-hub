import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(InertiaPlugin, Draggable, ScrollToPlugin, ScrollTrigger);
gsap.registerPlugin(Draggable, ScrollToPlugin, ScrollTrigger);

gsap.config({
  nullTargetWarn: false,
});

export { gsap };
