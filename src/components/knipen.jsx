import useZoomSlow from "../hooks/useZoomSlow";

export default function Knipen() {
  const [ref, visible] = useZoomSlow(0.5);

  return (
    <section id="knipen" className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Kolom 1 */}
        <div
          ref={ref}
          className={`${visible
            ? "animate-zoom-in"
            : ""} relative flex flex-col justify-center items-center space-y-6 text-center h-full z-10`}
        >
          <p className="text-3xl text-gray-700">We knippen zowel droog als nat.</p>
          <h1
            ref={ref}
            className="sm:translate-x-1/4 z-10">
            knippen </h1>
          <p className="text-lg text-gray-700 px-10">
            Wij kiezen om droog te knippen, de natuurlijke val van het haar respecterend, vooral voor de krullenbollen heel interassant.
          </p>
          <a key="contact" href="#contact" className="btn"          >
            Afspraak boeken
          </a>
        </div>

        {/* Kolom 2 */}
        <div className="flex justify-center md:justify-end overflow-hidden">
          <img
            ref={ref}
            src="/img1.jpg"
            alt="img1"
            className={`${visible
              ? "animate-zoom-in"
              : ""} max-w-full h-auto rounded-lg shadow-lg`}
          />
        </div>
      </div>
    </section >
  );
}