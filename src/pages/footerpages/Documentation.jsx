import React from 'react';
import { ArrowLeft, BookOpen, Code, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Documentation = () => {
    const navigate = useNavigate();

    const docSections = [
        {
            title: 'Introduzione',
            icon: BookOpen,
            content: 'Scopri cos\'è Tornese e come funziona il nostro ecosistema blockchain per la sostenibilità urbana.'
        },
        {
            title: 'Getting Started',
            icon: Zap,
            content: 'Guida passo-passo per iniziare a utilizzare la piattaforma Tornese e i token TORNESE.'
        },
        {
            title: 'API Reference',
            icon: Code,
            content: 'Documentazione tecnica completa delle API disponibili per gli sviluppatori.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Torna alla Home
                </button>

                <h1 className="text-4xl font-black mb-2">Documentazione</h1>
                <p className="text-gray-400 mb-12">Tutto quello che devi sapere per iniziare con Tornese</p>

                {/* Documentation Sections */}
                <div className="grid md:grid-cols-1 gap-6 mb-12">
                    {docSections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <div
                                key={index}
                                className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700"
                            >
                                <div className="flex items-start gap-4">
                                    <Icon className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                                        <p className="text-gray-400">{section.content}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Main Content */}
                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Introduzione a Tornese</h2>
                        <p>
                            Tornese è un ecosistema blockchain decentralizzato progettato per incentivare e premiare i comportamenti sostenibili nella gestione dei rifiuti urbani. Utilizzando la tecnologia blockchain, creiamo un sistema trasparente e immutabile che connette cittadini, aziende e istituzioni.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Come Iniziare</h2>
                        <ol className="list-decimal list-inside space-y-2 ml-4">
                            <li>Accedi alla piattaforma Tornese</li>
                            <li>Completa la verifica dell'identità</li>
                            <li>Ricevi il tuo wallet digitale</li>
                            <li>Inizia a guadagnare token TORNESE</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Token TORNESE</h2>
                        <p>
                            Il token TORNESE è la valuta nativa dell'ecosistema. Può essere guadagnato partecipando ad attività di riciclaggio, staking o governance della comunità.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Supporto</h2>
                        <p>
                            Per domande o supporto tecnico, contatta il nostro team:
                        </p>
                        <div className="mt-4 space-y-2">
                            <p>Email: <a href="mailto:support@tornesefoundation.org" className="text-blue-400 hover:text-blue-300">support@tornesefoundation.org</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Documentation;
