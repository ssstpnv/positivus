import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import SectionTitle from "./shared/SectionTitle.tsx";
import ArrowIcon from "./shared/ArrowIcon.tsx";
import StarIcon from "./shared/StarIcon.tsx";
import mockTestimonials from "../mockData/mockTestimonials.ts";

function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedItemOffset, setSelectedItemOffset] = useState<number>(0);

  const testimonialItemRef = useRef<HTMLDivElement>(null);
  const testimonialsScrollIntervalRef = useRef<ReturnType<typeof setInterval>>();
  const testimonialsPauseTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const lastItemIndex = useMemo(() => mockTestimonials.length - 1, [mockTestimonials.length]);

  const testimonialsAutoScroll = useCallback(() => {
    testimonialsScrollIntervalRef.current = setInterval(() => {
      setSelectedIndex((prev) => prev === lastItemIndex ? 0 : prev + 1 );
    }, 5000);
  }, []);

  useEffect(() => {
    testimonialsAutoScroll();

    return () => {
      clearInterval(testimonialsScrollIntervalRef.current);
    }
  }, []);

  useEffect(() => {
    const defaultTestimonialItemWidth = 600;
    const testimonialItemWidth = testimonialItemRef.current?.getBoundingClientRect().width || defaultTestimonialItemWidth;
    setSelectedItemOffset(selectedIndex * (testimonialItemWidth + 48));
  }, [selectedIndex]);

  const handlePrevTestimonialClick = useCallback(() => {
    setSelectedIndex((prev) => prev - 1);
  }, []);

  const handleNextTestimonialClick = useCallback(() => {
    setSelectedIndex((prev) => prev + 1);
  }, []);

  const handleSelectTestimonial = useCallback((index: number) => {
    setSelectedIndex(index);

    // pause testimonials auto scroll for 30 seconds and relaunch
    clearInterval(testimonialsScrollIntervalRef.current);
    clearTimeout(testimonialsPauseTimeoutRef.current);
    testimonialsPauseTimeoutRef.current = setTimeout(testimonialsAutoScroll, 30000);
  }, []);

  return (
    <div className="mt-[100px]">
      <SectionTitle title="Testimonials">
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials
          <br className="mobile:hidden desktop:inline"/>
          to Learn More about Our Digital Marketing Services
        </p>
      </SectionTitle>
      <div className="rounded-[45px] mt-[80px] bg-p-black py-20 overflow-hidden">
        <div className="flex justify-center relative w-full tablet:w-[600px] h-[335px] mx-auto">
          <div className="flex absolute w-full transition-all duration-300" style={{ left: -selectedItemOffset }}>
            {mockTestimonials.map(({ id, text, author, position }) => (
              <div className="min-w-full mr-12 px-5 tablet:px-0" ref={testimonialItemRef} key={id}>
                <div className="rounded-[45px] border border-p-green p-10">
                  <p className="text-white">{text}</p>
                </div>
                <div className="ml-10 mt-5">
                  <p className="text-p-green">{author}</p>
                  <p className="text-white">{position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handlePrevTestimonialClick}
            disabled={selectedIndex === 0}
            className="enabled:hover:bg-gray-700 disabled:opacity-25"
          >
            <ArrowIcon direction="left" color="#FFFFFF" />
          </button>
          <ul className="inline-flex gap-3 mx-44">
            {mockTestimonials.map(({ id }, index) => (
              <li key={id}>
                <button onClick={() => handleSelectTestimonial(index)}>
                  <StarIcon color={selectedIndex === index ? "#B9FF66" : "#FFFFFF"} />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextTestimonialClick}
            disabled={selectedIndex === lastItemIndex}
            className="enabled:hover:bg-gray-700 disabled:opacity-25"
          >
            <ArrowIcon direction="right" color="#FFFFFF" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;