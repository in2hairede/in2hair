export default function Product() {
  return (
    <div>
      <section id="product" className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:[direction:rtl]  bg-gray-500">
          {/* kolom 1 */}
          <div className="relative flex flex-col justify-center items-center space-y-6 text-center h-full md:[direction:ltr]">
            <p className="text-3xl text-gray-700 capitalize z-10">haar verzorgen</p>
            <h1 className="ms:-translate-x-1/4">product</h1>
            <p className="text-lg text-gray-700 z-10">
              Lumineuze, natuurlijke kleuren met veel glans. Dit alles zonder ammoniak en PPD's.
            </p>
            <button className="btn">
              product
            </button>
          </div>

          {/* kolom 2 */}
          <div className="flex justify-center md:justify-start overflow-hidden">
            <img
              src="/product1.jpg"
              alt="img2"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="product2" className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Kolom 1 */}
          <div className="relative flex flex-col justify-center items-center space-y-6 text-center h-full">
            <p className="text-3xl text-gray-700 capitalize z-10">haar verzorgen</p>
            <h1 className="sm:translate-x-1/4">
              product
            </h1>
            <p className="text-lg text-gray-700 z-10">
              Wij kiezen om droog te knippen, de natuurlijke val van het haar respecterend, vooral voor de krullenbollen heel interassant.
            </p>
            <button className="btn">
              product
            </button>
          </div>

          {/* Kolom 2 */}
          <div className="flex justify-center md:justify-end overflow-hidden">
            <img
              src="/product2.jpg"
              alt="img1"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
