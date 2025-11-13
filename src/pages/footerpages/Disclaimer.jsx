import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Disclaimer = () => {
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

                <h1 className="text-4xl font-black mb-2">Disclaimer</h1>
                <p className="text-gray-400 mb-8">Ultimo aggiornamento: Gennaio 2025</p>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Generale</h2>
                        <p>
                            Le informazioni fornite su questo sito web sono fornite "così come sono" senza alcun tipo di garanzia, esplicita o implicita. Tornese Foundation non rilascia alcuna dichiarazione in merito all'accuratezza, completezza o adeguatezza delle informazioni.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Informazioni Finanziarie</h2>
                        <p>
                            Le informazioni relative ai token, agli investimenti o a qualsiasi opportunità finanziaria fornite su questo sito non costituiscono consulenza finanziaria. Prima di prendere qualsiasi decisione di investimento, consulta un consulente finanziario qualificato.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Blockchain e Criptovalute</h2>
                        <p>
                            L'utilizzo di blockchain e criptovalute comporta rischi significativi. Non garantiamo la stabilità, la sicurezza o la redditività di nessun progetto basato su blockchain. Gli utenti utilizzano la tecnologia blockchain a proprio rischio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Nessuna Garanzia</h2>
                        <p>
                            Il sito web e tutti i contenuti sono forniti senza garanzie di alcun tipo, incluse le garanzie di commerciabilità, idoneità per un particolare scopo o non violazione.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Limitazione di Responsabilità</h2>
                        <p>
                            In nessun caso Tornese Foundation, i suoi direttori, impiegati o agenti saranno responsabili per eventuali danni diretti, indiretti, incidentali, speciali, consequenziali o punitivi derivanti dall'uso o dal mancato uso di questo sito.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Link Esterni</h2>
                        <p>
                            Questo sito può contenere link a siti web di terze parti. Tornese Foundation non è responsabile per il contenuto, l'accuratezza o le pratiche di tali siti.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Modifiche</h2>
                        <p>
                            Tornese Foundation si riserva il diritto di modificare, aggiornare o interrompere questo sito e i relativi servizi in qualsiasi momento senza preavviso.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Contatti</h2>
                        <p>
                            Per domande su questo disclaimer, contattaci a:
                        </p>
                        <div className="mt-4 space-y-2">
                            <p>Email: <a href="mailto:info@tornesefoundation.org" className="text-blue-400 hover:text-blue-300">info@tornesefoundation.org</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
