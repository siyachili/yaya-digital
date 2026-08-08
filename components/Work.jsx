"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const project = {
  n: "01",
  title: "Brendon Bridge",
  image: "/images/brendon.jpeg",
  url: "https://brendonbridgestudios.com/",
  meta: "A contemporary digital home for artist Brendon Bridge, designed to place the artwork at the centre of the experience.",
  type: "Art / Artist Portfolio",
  services: "Strategy · UI/UX Design · Next.js Development · CMS",
  result:
    "A custom digital gallery that gives Brendon a refined online presence, flexible artwork management and a direct path from discovery to enquiry.",
};

export default function Work() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageCardRef = useRef(null);
  const imageRef = useRef(null);
  const infoCardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const imageCard = imageCardRef.current;
    const image = imageRef.current;
    const infoCard = infoCardRef.current;

    if (!section || !heading || !imageCard || !image || !infoCard) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * HEADING REVEAL
       */
      const headingElements = heading.querySelectorAll(
        "[data-heading-reveal]",
      );

      gsap.fromTo(
        headingElements,
        {
          y: 55,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        },
      );

      /*
       * PROJECT CARDS
       */
      gsap.fromTo(
        [imageCard, infoCard],
        {
          y: 80,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.14,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageCard,
            start: "top 88%",
            once: true,
          },
        },
      );

      /*
       * LEFT CARD CONTENT
       */
      const imageContent = imageCard.querySelectorAll(
        "[data-project-reveal]",
      );

      gsap.fromTo(
        imageContent,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageCard,
            start: "top 82%",
            once: true,
          },
        },
      );

      /*
       * RIGHT CARD CONTENT
       */
      const infoContent = infoCard.querySelectorAll(
        "[data-info-reveal]",
      );

      gsap.fromTo(
        infoContent,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          delay: 0.28,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoCard,
            start: "top 82%",
            once: true,
          },
        },
      );

      /*
       * IMAGE PARALLAX
       */
      gsap.fromTo(
        image,
        {
          yPercent: -5,
        },
        {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: imageCard,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );

      /*
       * HEADING PARALLAX
       */
      gsap.to(heading, {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, section);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  const handleImageMouseEnter = () => {
    const image = imageRef.current;

    if (!image) return;

    gsap.to(image, {
      scale: 1.07,
      duration: 1.2,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleImageMouseLeave = () => {
    const image = imageRef.current;

    if (!image) return;

    gsap.to(image, {
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="overflow-hidden bg-black px-5 py-24 text-white sm:px-7 md:px-10 md:py-32 lg:px-14 lg:py-40"
    >
      {/* SECTION HEADER */}
      <div
        ref={headingRef}
        className="mx-auto mb-14 flex max-w-[1180px] items-end justify-between gap-8 md:mb-20"
      >
        <div>
          <p
            data-heading-reveal
            className="mb-5 text-xs uppercase tracking-[.2em] text-white/40"
          >
            Selected work
          </p>

          <h2 className="max-w-4xl font-display text-5xl font-semibold tracking-[-.06em] text-white md:text-7xl lg:text-8xl">
            <span className="block overflow-hidden">
              <span data-heading-reveal className="block">
                Work with a
              </span>
            </span>

            <span className="block overflow-hidden">
              <span data-heading-reveal className="block">
                point of view.
              </span>
            </span>
          </h2>
        </div>

        <span
          data-heading-reveal
          className="hidden text-sm text-white/35 lg:block"
        >
          2025—2026
        </span>
      </div>

      {/* PROJECT */}
      <article className="mx-auto grid max-w-[1180px] gap-5 md:grid-cols-[1.15fr_.85fr]">
        {/* IMAGE CARD */}
        <a
          ref={imageCardRef}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title}`}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseLeave}
          className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 md:min-h-[500px] lg:min-h-[560px]"
        >
          <img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            className="absolute -inset-y-[7%] left-0 h-[114%] w-full object-cover object-center transition-[filter] duration-700 group-hover:brightness-75"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5 transition duration-700 group-hover:from-black/95 group-hover:via-black/35" />

          {/* SOFT HOVER TREATMENT */}
          <div className="absolute inset-0 z-[1] bg-white/0 transition duration-700 group-hover:bg-white/[0.04]" />

          {/* PROJECT NUMBER */}
          <span
            data-project-reveal
            className="absolute left-6 top-6 z-10 text-xs uppercase tracking-[.2em] text-white/80 transition duration-500 group-hover:translate-x-1 group-hover:text-white md:left-8 md:top-8"
          >
            Project {project.n}
          </span>

          {/* PROJECT DETAILS */}
          <div className="absolute bottom-6 left-6 right-6 z-10 md:bottom-8 md:left-8 md:right-8">
            <p
              data-project-reveal
              className="mb-3 text-xs uppercase tracking-[.18em] text-white/60 transition duration-500 group-hover:text-white/80"
            >
              {project.type}
            </p>

            <div className="overflow-hidden pb-1">
              <h3
                data-project-reveal
                className="font-display text-4xl font-semibold uppercase leading-none tracking-[-.07em] text-white transition-transform duration-700 ease-out group-hover:translate-x-2 md:text-5xl lg:text-6xl"
              >
                {project.title}
              </h3>
            </div>
          </div>
        </a>

        {/* CASE STUDY CARD */}
        <a
          ref={infoCardRef}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} website`}
          className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition duration-700 hover:border-white/25 hover:bg-white/[0.055] md:min-h-[500px] md:p-8 lg:min-h-[560px] lg:p-10"
        >
          {/* HOVER BACKGROUND */}
          <div className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-white/[0.08] to-transparent transition-transform duration-700 ease-out group-hover:translate-y-0" />

          {/* TOP LABEL */}
          <div data-info-reveal className="relative z-10">
            <span className="text-xs uppercase tracking-[.2em] text-white/40 transition duration-500 group-hover:text-white/70">
              Case study
            </span>
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            <p
              data-info-reveal
              className="mb-7 max-w-md text-lg leading-relaxed text-white/80 md:text-xl"
            >
              {project.meta}
            </p>

            <div className="space-y-3 border-t border-white/12 pt-6 text-sm leading-relaxed text-white/45 transition duration-500 group-hover:border-white/20 group-hover:text-white/60">
              <p data-info-reveal>{project.services}</p>

              <p data-info-reveal>{project.result}</p>
            </div>

            {/* LIVE WEBSITE */}
            <div
              data-info-reveal
              className="mt-8 flex items-center gap-3"
            >
              <p className="text-xs uppercase tracking-[.18em] text-white/55 transition duration-500 group-hover:text-white">
                Visit live website
              </p>

              <span className="relative block h-px w-8 overflow-hidden bg-white/20">
                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
              </span>
            </div>
          </div>

          {/* AMBIENT LIGHT */}
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-white/[0.03] blur-3xl transition duration-1000 group-hover:scale-150 group-hover:bg-white/[0.07]" />
        </a>
      </article>
    </section>
  );
}