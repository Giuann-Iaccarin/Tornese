import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Documentation = () => {
    const navigate = useNavigate();

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
                <p className="text-gray-400 mb-8">Tutto quello che devi sapere per iniziare con Tornese</p>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Introduzione a Tornese</h2>
                        <p>
                            Tornese è un ecosistema blockchain decentralizzato progettato per incentivare e premiare i comportamenti sostenibili nella gestione dei rifiuti urbani. Utilizzando la tecnologia blockchain, creiamo un sistema trasparente e immutabile che connette cittadini, aziende e istituzioni.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Come Iniziare</h2>
                        <p>Per iniziare con Tornese, segui questi passaggi:</p>
                        <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                            <li>Accedi alla piattaforma Tornese dal sito ufficiale</li>
                            <li>Completa la verifica dell'identità seguendo le istruzioni</li>
                            <li>Ricevi il tuo wallet digitale personale</li>
                            <li>Inizia a guadagnare token TORNESE riciclando</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Token TORNESE</h2>
                        <p>
                            Il token TORNESE è la valuta nativa dell'ecosistema. Può essere guadagnato partecipando ad attività di riciclaggio, staking o governance della comunità. Ogni token rappresenta valore verificabile sulla blockchain e può essere scambiato o trasferito in qualsiasi momento.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Punti di Raccolta</h2>
                        <p>
                            Puoi trovare i punti di raccolta autorizzati Tornese utilizzando la nostra mappa interattiva sulla piattaforma. Ogni punto di raccolta è dotato di scanner QR che registra immediatamente il tuo contributo alla blockchain.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Portafoglio Digitale</h2>
                        <p>
                            Il tuo portafoglio digitale è il cuore della tua esperienza Tornese. Qui puoi: visualizzare i tuoi token TORNESE, monitorare le ricompense guadagnate, mettere in staking i tuoi token, e partecipare alle votazioni di governance della comunità.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Sicurezza</h2>
                        <p>
                            La sicurezza è una priorità assoluta per Tornese. Tutti i tuoi dati personali sono crittografati end-to-end e i tuoi token sono protetti da chiavi crittografiche private. Non condividere mai la tua seed phrase o le tue chiavi private con nessuno.
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
