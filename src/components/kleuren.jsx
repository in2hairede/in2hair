import useZoomSlow from "../hooks/useZoomSlow";

export default function Kleuren() {
  const [ref, visible] = useZoomSlow(0.5);

  return (
    <section id="kleuren" className="container mx-auto py-12 bg-gray-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:[direction:rtl]">

        {/* kolom 1 */}
        <div
          ref={ref}
          className={`${visible
            ? "animate-zoom-in"
            : ""} relative flex flex-col justify-center items-center space-y-6 text-center h-full z-10`}
        >
          <p className="text-3xl text-gray-700">Met Kevin Murphy</p>
          <h1 className="sm:-translate-x-1/4 z-10">kleuren</h1>
          <p className="text-lg text-gray-700 px-10">
            Lumineuze, natuurlijke kleuren met veel glans. Dit alles zonder ammoniak en PPD's
          </p>

          <a key="contact" href="#contact" className="btn"          >
            Afspraak boeken
          </a>
        </div>

        {/* kolom 2 */}
        <div className="zoom-in flex justify-center md:justify-start overflow-hidden">
          <img
            ref={ref}
            src="/img2.jpg"
            alt="img2"
            className={`${visible
              ? "animate-zoom-in "
              : ""} max-w-full h-auto rounded-lg shadow-lg`}
          />
        </div>
      </div>
    </section>
  );
}
