import dames from '../data/dames.json';
import heren from '../data/heren.json';
import kleuren from '../data/kleuren.json';

const PriceList = ({ title, data }) => (
  <div className="flex flex-col m-7 ">
    <h2 className="text-xl font-semibold bg-drk-gray text-cgreen border-b-2 mb-2">
      {title}
    </h2>
    <table className="table-auto w-full border-collapse">
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="">
            <td className="text-left py-2 px-1"> {item.descriptions}</td>
            <td className="text-right py-2 px-1 "> €{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function Prijslist() {
  return (
    <section id="prijslist" className="relative px-4 bg-gray-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <PriceList title="Kleuren" data={kleuren} />
        <PriceList title="Dames" data={dames} />
        <PriceList title="Heren" data={heren} />
      </div>
    </section>
  );
}
