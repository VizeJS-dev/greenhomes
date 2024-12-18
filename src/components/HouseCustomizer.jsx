import {useState} from 'react';
import {Button} from "./Button.jsx";

export const HouseCustomizer = () => {
    const [selectedModules, setSelectedModules] = useState([]);
    const [totalCost, setTotalCost] = useState(0); // Startkosten

    // Definities van basis modules
    const basisModules = [
        {id: 'extraSlaapkamer', label: 'Extra Slaapkamer', cost: 10000},
        {id: 'thuiskantoor', label: 'Thuiskantoor', cost: 8000},
        {id: 'uitgebreideKeuken', label: 'Uitgebreide Keuken', cost: 15000},
        {id: 'wellnessruimte', label: 'Wellnessruimte', cost: 20000},
        {id: 'daktuin', label: 'Daktuin', cost: 12000},
    ];

    // Definities van duurzame modules
    const duurzameModules = [
        {id: 'zonnepanelen', label: 'Zonnepanelen Module', cost: 8000},
        {id: 'groeneMuur', label: 'Groene Muur', cost: 5000},
        {id: 'regenwater', label: 'Regenwateropvang Systeem', cost: 6000},
        {id: 'warmtepomp', label: 'Warmtepomp Systeem', cost: 10000},
        {id: 'zonneboiler', label: 'Zonneboiler Systeem', cost: 4000},
    ];

    // Handler voor het verwerken van wijzigingen in de geselecteerde modules
    const handleModuleChange = (moduleId, moduleCost) => {
        setSelectedModules(prev => {
            const isModuleSelected = prev.includes(moduleId);
            const updatedModules = isModuleSelected
                ? prev.filter(id => id !== moduleId) // Verwijder module als deze al geselecteerd is
                : [...prev, moduleId]; // Voeg module toe als deze niet geselecteerd is

            const updatedTotalCost = isModuleSelected
                ? totalCost - moduleCost // Verminder de kosten als module verwijderd wordt
                : totalCost + moduleCost; // Voeg kosten toe als module toegevoegd wordt
            setTotalCost(updatedTotalCost);

            return updatedModules;
        });
    };

    // Render modules als checkbox elementen
    const renderModules = (modules) => {
        return modules.map((module) => (
            <label
                key={module.id}
                className="flex cursor-pointer items-center rounded-lg border p-3 space-x-3 hover:bg-gray-50"
            >
                <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedModules.includes(module.id)}
                    onChange={() => handleModuleChange(module.id, module.cost)}
                />
                <span className="text-gray-700">{module.label}</span>
            </label>
        ));
    };

    return (
        <section
            className="mx-auto max-w-6xl rounded-lg bg-white p-6 shadow-lg w-[90%] md:rounded-no md:w-full md:rounded-r-none">
            <div className="space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold">
                        Maak jouw duurzame droomhuis werkelijkheid!
                    </h2>
                    <p className="text-gray-600">
                        Kies de modules die bij jou passen en ontvang een persoonlijke offerte op maat.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Basis Modules</h3>
                        <div className="space-y-3">
                            {renderModules(basisModules)}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Duurzame Modules</h3>
                        <div className="space-y-3">
                            {renderModules(duurzameModules)}
                        </div>
                    </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h4 className="font-semibold">Geschatte Kosten:</h4>
                            <p className="text-sm text-gray-500">
                                De geschatte kosten zijn slechts een indicatie. Voor een nauwkeurige berekening kunt u
                                een offerte aanvragen.
                            </p>
                        </div>
                        <div className="text-2xl font-bold">€{totalCost.toLocaleString()}</div>
                    </div>
                    <Button href="#offerte-aanvragen"
                            customStyles="w-full bg-greenhomes-green hover:bg-greenhomes-orange text-white font-medium py-3 px-6 rounded-lg transition-colors"
                            text="Vraag mijn offerte aan"></Button>
                </div>
            </div>
        </section>
    );
};