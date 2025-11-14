import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Torna alla Home
                </button>

                <h1 className="text-4xl font-black mb-2">Termini di Servizio</h1>
                <p className="text-gray-400 mb-8">Ultimo aggiornamento: Gennaio 2025</p>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Accettazione dei Termini</h2>
                        <p>
                            Accedendo e utilizzando il sito web di Tornese Foundation, accetti di essere vincolato da questi Termini di Servizio. Se non accetti alcuno di questi termini, ti preghiamo di non utilizzare il nostro sito.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Uso della Piattaforma</h2>
                        <p>
                            L'utente accetta di utilizzare il sito e i servizi di Tornese Foundation solo per scopi legali e in conformità con tutte le leggi e i regolamenti applicabili. L'utente si impegna a non:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                            <li>Violare alcuna legge o regolamento</li>
                            <li>Infrangere i diritti di proprietà intellettuale</li>
                            <li>Trasmettere materiale offensivo, diffamatorio o illegale</li>
                            <li>Tentare di hackerare o disabilitare il sito</li>
                            <li>Raccogliere dati personali senza consenso</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Proprietà Intellettuale</h2>
                        <p>
                            Tutti i contenuti, inclusi testi, grafiche, loghi, immagini e software, sono di proprietà di Tornese Foundation o dei suoi fornitori di contenuti e sono protetti dalle leggi internazionali sul copyright.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimer di Responsabilità</h2>
                        <p>
                            Il sito è fornito "così come è" senza alcuna garanzia. Tornese Foundation non garantisce l'accuratezza, la completezza o l'utilità dei contenuti. L'uso del sito è a tuo rischio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Limitazione di Responsabilità</h2>
                        <p>
                            In nessun caso Tornese Foundation sarà responsabile per danni indiretti, incidentali, speciali, consequenziali o punitivi derivanti dall'uso o dall'impossibilità di utilizzare il sito o i servizi.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Link Esterni</h2>
                        <p>
                            Il nostro sito può contenere link a siti di terze parti. Non siamo responsabili del contenuto, dell'accuratezza o delle pratiche di tali siti.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Modifiche ai Termini</h2>
                        <p>
                            Tornese Foundation si riserva il diritto di modificare questi Termini di Servizio in qualsiasi momento. Le modifiche diventeranno effettive al momento della pubblicazione.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Legge Applicabile</h2>
                        <p>
                            Questi Termini di Servizio sono disciplinati dalle leggi della Repubblica Italiana.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Contatti</h2>
                        <p>
                            Per domande su questi Termini di Servizio, contattaci a:
                        </p>
                        <div className="mt-4 space-y-2">
                            <p>Email: <a href="mailto:business.tornese@protonmail.com" className="text-blue-400 hover:text-blue-300">business.tornese@protonmail.com</a></p>
                            <p>Indirizzo: Via Toledo, 256 - 80132 Napoli, Italia</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
