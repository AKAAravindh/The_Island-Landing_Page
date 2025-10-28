import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import coverImage from "/src/images/cover-image.jpg";
import SecondHeroComponent from "../../components/SecondHeroComponent";

gsap.registerPlugin(ScrollTrigger);

function TrainingPage01() {
  const firstParentContainer = useRef(null);
  const firstContentRef = useRef(null);
  const imageContentRef = useRef(null);
  const lastContentRef = useRef(null);
  const insideContentParentRef = useRef(null);

  const parentTimelineRef = useRef(null);

  useGSAP(() => {
    parentTimelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: firstParentContainer.current,
        start: "50% 50%",
        end: "150% 50%",
        pin: true,
        scrub: true,
      },
    });

    const tl = parentTimelineRef.current;

    tl.to(
      firstContentRef.current,
      {
        rotateX: "110deg",
        ease: "power1.inOut",
        transformOrigin: "top",
        duration: 5.5,
      },
      "same"
    ).to(
      firstContentRef.current,
      {
        duration: 1,
        opacity: 0,
      },
      "<2.8"
    );

    tl.to(
      imageContentRef.current,
      {
        width: "100%",
        height: "100%",
        marginTop: 0,
        duration: 7,
        ease: "power1.inOut",
      },
      "same"
    ).to(
      insideContentParentRef.current,
      {
        opacity: 1,
        ease: "power1.inOut",
      },
      "-=2.8"
    );

    tl.to(
      lastContentRef.current,
      {
        rotateX: "-110deg",
        transformOrigin: "bottom",
        ease: "power1.inOut",
        duration: 5.5,
      },
      "same"
    ).to(
      lastContentRef.current,
      {
        duration: 1,
        opacity: 0,
      },
      "<2.8"
    );
  }, [firstContentRef, imageContentRef, lastContentRef]);

  return (
    <div className="w-full min-h-screen bg-[#3f6e8b] text-white">
      <nav className="fixed top-0 left-0 z-50 w-full flex justify-center items-center p-7">
        <ul className="flex justify-between sm:justify-center sm:gap-6 w-full">
          {["Home", "About", "Services", "Contact", "FAQ"].map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer uppercase px-2 py-0.5 relative isolate group hover:transition-all hover:duration-300"
            >
              {item}
              <span className="absolute left-2 right-full bottom-0 bg-sky-200 group-hover:right-[40%] h-0.5 transition-all duration-500 ease-in-out"></span>
            </li>
          ))}
        </ul>
      </nav>
      <div
        ref={firstParentContainer}
        className="w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden perspective-near"
      >
        <div className="perspective-origin-top perspective-distant absolute top-0 mt-30 sm:mt-22">
          <div ref={firstContentRef} className="rotate-x-0">
            <p>THE ISLAND</p>
            <h1 className="font-normal text-[clamp(3rem,10vw,5.5rem)] md:text-[5.5rem] leading-none sm:leading-20 mt-3">
              EXPERIENCE THE <br /> BEST OF ISLAND
            </h1>
          </div>
        </div>

        <div className="absolute w-full h-screen -z-1 flex justify-center inset-0 items-center isolate">
          <div
            ref={imageContentRef}
            className="w-[40%] h-[40%] -mt-10 sm:mt-20 relative -z-10"
          >
            <img
              className="w-full h-full object-cover"
              src={coverImage}
              alt="Main Image"
            />
            <div
              ref={insideContentParentRef}
              className="absolute z-10 inset-0 flex flex-col justify-center items-center opacity-0"
            >
              <SecondHeroComponent
                firstParentContainer={firstParentContainer}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-16">
          <div
            ref={lastContentRef}
            className="flex flex-col justify-center w-full items-center rotate-x-0"
          >
            <h1 className="font-normal text-[clamp(3rem,10vw,5.5rem)] md:text-[5.5rem] leading-none">
              LIVING ON MADERIA
            </h1>
            <p className="px-8 md:w-[50%] text-sm leading-tight py-2 sm:py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ex
              deserunt! Molestiae libero incidunt enim. Ullam velit alias ea
              ratione obcaecati reiciendis adipisci voluptatum asperiores atque
              nisi ipsum quae aliquid sunt iste quisquam saepe, harum delectus!
              Quas molestias, sit voluptates voluptate, at natus quisquam
              voluptatibus facere aliquam minus eius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingPage01;
