"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    name: "Marcin K.",
    text: "Najlepszy barbershop w Krośnie! Profesjonalna obsługa, świetna atmosfera i zawsze jestem zadowolony z efektu. Polecam każdemu, kto ceni sobie jakość.",
    rating: 5,
  },
  {
    id: 2,
    name: "Tomasz W.",
    text: "Regularnie korzystam z usług Entropia Barbershop od ponad roku. Zawsze wychodzę zadowolony i z doskonałą fryzurą. Barberzy znają się na rzeczy i doradzają najlepsze rozwiązania.",
    rating: 5,
  },
  {
    id: 3,
    name: "Kamil S.",
    text: "Świetne miejsce dla mężczyzn ceniących profesjonalizm. Strzyżenie i trymowanie brody na najwyższym poziomie. Dodatkowo miła atmosfera i dobra kawa w trakcie wizyty.",
    rating: 5,
  },
  {
    id: 4,
    name: "Piotr L.",
    text: "Polecam szczególnie golenie brzytwą - prawdziwy rytuał dla mężczyzny. Profesjonalnie i z dbałością o każdy szczegół. Na pewno wrócę!",
    rating: 5,
  },
  {
    id: 5,
    name: "Michał D.",
    text: "Odkąd trafiłem do Entropia Barbershop, nie wyobrażam sobie pójść gdzie indziej. Świetna obsługa, profesjonalne podejście i zawsze doskonały efekt.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Co mówią nasi <span className="text-accent">Klienci</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Poznaj opinie naszych klientów, którzy zaufali naszemu doświadczeniu i profesjonalizmowi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-gray-800 rounded-lg p-8 md:p-12 shadow-xl">
            <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-8">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4 24H8V16H16V24C16 32.8 8.8 36 8.8 36L6.4 32.8C10.4 30.4 14.4 28 14.4 24ZM30.4 24H24V16H32V24C32 32.8 24.8 36 24.8 36L22.4 32.8C26.4 30.4 30.4 28 30.4 24Z"
                  fill="#d4af37"
                />
              </svg>
            </div>

            <div className="mb-6 pt-6">
              <p className="text-xl italic text-gray-300">
                "{testimonials[activeIndex].text}"
              </p>
            </div>

            <div className="flex items-center">
              <div className="mr-4 bg-accent text-primary h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                <div className="flex text-accent">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
              aria-label="Poprzednia opinia"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
              aria-label="Następna opinia"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full ${
                  index === activeIndex ? "bg-accent" : "bg-gray-600"
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}