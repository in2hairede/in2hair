import { FaPhoneVolume, FaWhatsapp, } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
    return (
        <footer
            className="border-t-2 relative bg-drk-gray text-white p-8 
                bg-[url('/footer.jpg')] bg-no-repeat bg-left-bottom bg-cover"
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xl">
                {/* Contact */}
                <div>
                    <h2 className="text-green-600 font-semibold mb-4">Contact</h2>
                    <a href="mailto:info@in2hairede.nl" className="flex underline hover:text-cgreen">
                        <IoMail size={24} className="text-green-600" /> info@in2hairede.nl
                    </a>
                    <ul>
                        <li className="flex items-center gap-2">
                            <FaPhoneVolume size={24} className="text-green-600" />+31 318 301 863
                        </li>
                        <li>Molenstraat 132</li>
                        <li>6711 AX Ede</li>
                        <li>KvK: 64135527</li>
                    </ul>
                </div>

                {/* Openingstijden */}
                <div>
                    <h2 className="text-green-600 font-semibold mb-4">Openingstijden</h2>
                    <p>Op afspraak</p>
                </div>

                {/* WhatsApp */}
                <div className="">
                    <h2 className="text-green-600 font-semibold mb-4">WhatsApp</h2>
                    Maak een afspraak via WhatsApp<br />
                    <a href="https://wa.me/31643948454" target="_blank" rel="noopener noreferrer"
                        className="flex underline hover:text-cgreen">
                        <FaWhatsapp size={24} className="text-green-600" /> +31 6 4394 8454
                    </a>
                </div>

                {/* Google Maps */}
                <div>
                    <h2 className="text-green-600 font-semibold mb-4">Locatie</h2>
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps?q=Molenstraat+132+Ede&output=embed"
                        width="100%"
                        height="250"
                        className="rounded-md border-0"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
};
