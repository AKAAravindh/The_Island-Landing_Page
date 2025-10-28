import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function SecondHeroComponent({ firstParentContainer }) {
  const contentRef = useRef([]);
  const blackBackgroundCoverRef = useRef(null);

  useGSAP(() => {
    if (!firstParentContainer) return;

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: firstParentContainer.current,
        start: "50% 50%",
        end: "150% 50%",
        pin: true,
        scrub: true,
      },
    });

    tl2.to(blackBackgroundCoverRef.current, {
      opacity: 1,
      duration: 2,
    });

    tl2.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        delay: 1,
        stagger: 0.4,
      }
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          ref={blackBackgroundCoverRef}
          className="absolute inset-0 bg-black/40"
        ></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1
          ref={(el) => (contentRef.current[0] = el)}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
        >
          Discover <span className="text-yellow-300">Insland</span>
        </h1>
        <p
          ref={(el) => (contentRef.current[1] = el)}
          className="text-lg md:text-2xl text-white mb-8 max-w-3xl drop-shadow-md"
        >
          Where turquoise waters meet golden sands, and every sunset feels like
          magic.
        </p>
        <div
          ref={(el) => (contentRef.current[2] = el)}
          className="flex flex-col md:flex-row gap-4"
        >
          <button className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition transform hover:scale-105 cursor-pointer">
            🌊 Explore Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition transform hover:scale-105 cursor-pointer">
            📖 Learn More
          </button>
        </div>
      </div>
      ref={(el) => (contentRef.current[3] = el)}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce  text-white text-2xl text-center">
        Welcome to <i>THE ISLAND</i>
      </div>
    </section>
  );
}
