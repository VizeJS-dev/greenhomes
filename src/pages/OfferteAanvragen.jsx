import {useState} from "react";
import offerte from "../assets/OfferteAfbeeldingBlob.png";

export const OfferteAanvragen = () => {
    // State voor het formulier
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Functie om wijzigingen in het formulier bij te houden
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Functie die wordt aangeroepen bij het indienen van het formulier
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section id="offerte-aanvragen"
                 name="Offerte aanvragen"
                 className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 bg-greenhomes-white md:p-0"
        >
            <div className="mx-auto max-w-7xl rounded-lg p-6 md:p-12">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    {/* Linker kolom - Tekst en afbeelding */}
                    <div className="p-6 space-y-6 md:p-12">
                        <div className="max-w-lg">
                            <h1 className="mb-4 text-4xl font-bold text-greenhomes-orange font-dm">
                                Klaar voor een duurzame toekomst?
                            </h1>
                            <h2 className="mb-4 text-2xl font-dm">
                                Vraag een offerte aan!
                            </h2>
                            <p className="text-gray-600 font-dm">
                                Vraag een offerte aan en zet de eerste stap naar jouw duurzame droomhuis.
                                Ontdek hoe eenvoudig het is om jouw ideale woning samen te stellen!
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute bottom-0 left-0 h-32 w-full"/>
                            <img
                                src={offerte}
                                alt="Decorative plant"
                                className="relative z-10 mx-auto h-full w-full max-w-md"
                            />
                        </div>
                    </div>

                    {/* Rechter kolom - Formulier */}
                    <div className="p-6 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Naam veld */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Volledige naam
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E6B] focus:border-transparent outline-none"
                                />
                            </div>

                            {/* E-mail veld */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E6B] focus:border-transparent outline-none"
                                />
                            </div>

                            {/* Telefoon veld */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Telefoon
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E6B] focus:border-transparent outline-none"
                                />
                            </div>

                            {/* Bericht veld */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Bericht
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E6B] focus:border-transparent outline-none resize-none"
                                />
                            </div>

                            {/* Versturen knop */}
                            <button
                                type="submit"
                                className="w-full rounded-lg px-6 py-3 font-medium text-white transition-colors bg-greenhomes-green hover:bg-greenhomes-orange"
                            >
                                Offerte aanvraag versturen
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};