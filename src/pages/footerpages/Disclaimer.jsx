import React from 'react';
import { AlertTriangle, Info, TrendingDown, Shield, FileWarning, ExternalLink } from 'lucide-react';

const Disclaimer = () => {
    return (
        <div className="min-h-screen bg-white py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-6">
                        <AlertTriangle className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Disclaimer
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Avvertenze legali e limitazioni di responsabilità per l'utilizzo della piattaforma Tornese Foundation
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Ultimo aggiornamento: 13 Novembre 2025
                    </p>
                </div>

                {/* Alert Generale */}
                <section className="mb-12">
                    <div className="bg-linear-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-black text-gray-900 mb-2">
                                    Avvertenza Importante
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Le informazioni contenute in questo sito web sono fornite esclusivamente a scopo informativo.
                                    Tornese Foundation S.r.l. non fornisce consulenza finanziaria, fiscale o legale. Si consiglia di consultare
                                    professionisti qualificati prima di prendere decisioni basate sulle informazioni qui presenti.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 1. Disclaimer Finanziario */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingDown className="w-8 h-8 text-red-600" />
                        <h2 className="text-2xl font-black text-gray-900 m-0">
                            1. Disclaimer Finanziario e Investimenti
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                ⚠️ NON È UN INVESTIMENTO FINANZIARIO
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Il token Tornese (TRN) è un <strong>utility token</strong> e NON costituisce:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Un investimento finanziario o strumento finanziario</li>
                                <li>• Un titolo o valore mobiliare</li>
                                <li>• Una partecipazione azionaria in Tornese Foundation</li>
                                <li>• Una promessa di rendimento o profitto</li>
                                <li>• Un deposito bancario o prodotto assicurativo</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">1.1 Rischi Associati</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                L'acquisizione e l'utilizzo di token TRN comporta rischi, tra cui:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>Volatilità del valore:</strong> Il valore del token può fluttuare significativamente</li>
                                <li>• <strong>Perdita totale:</strong> Possibilità di perdere l'intero valore dei token</li>
                                <li>• <strong>Rischi tecnologici:</strong> Bug, hack o vulnerabilità della blockchain</li>
                                <li>• <strong>Rischi normativi:</strong> Cambiamenti legislativi che potrebbero limitare l'utilizzo</li>
                                <li>• <strong>Mancanza di liquidità:</strong> Difficoltà nel convertire i token</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">1.2 Nessuna Garanzia di Profitto</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Tornese Foundation <strong>non garantisce</strong> alcun rendimento, profitto o apprezzamento del valore
                                dei token TRN. Le performance passate non sono indicative di risultati futuri. Non investire denaro che
                                non puoi permetterti di perdere.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Disclaimer Informazioni */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Info className="w-8 h-8 text-blue-600" />
                        <h2 className="text-2xl font-black text-gray-900 m-0">
                            2. Accuratezza delle Informazioni
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700">
                        <p className="leading-relaxed">
                            Tornese Foundation si impegna a fornire informazioni accurate e aggiornate. Tuttavia:
                        </p>
                        <ul className="space-y-2">
                            <li>• Le informazioni possono contenere errori, omissioni o imprecisioni</li>
                            <li>• I contenuti possono diventare obsoleti senza preavviso</li>
                            <li>• Non ci assumiamo responsabilità per decisioni basate su informazioni errate</li>
                            <li>• È responsabilità dell'utente verificare l'accuratezza delle informazioni</li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            Ci riserviamo il diritto di modificare, aggiornare o rimuovere contenuti in qualsiasi momento senza preavviso.
                        </p>
                    </div>
                </section>

                {/* 3. Disclaimer Blockchain */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-8 h-8 text-blue-600" />
                        <h2 className="text-2xl font-black text-gray-900 m-0">
                            3. Tecnologia Blockchain e Smart Contract
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">3.1 Natura Immutabile</h3>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                                <p className="text-gray-700 leading-relaxed">
                                    Le transazioni su blockchain sono <strong>irreversibili</strong>. Una volta confermata, una transazione
                                    non può essere annullata, modificata o rimborsata. Verifica sempre con attenzione i dettagli prima di
                                    confermare una transazione.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">3.2 Responsabilità Chiavi Private</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                L'utente è <strong>l'unico responsabile</strong> della custodia delle proprie chiavi private:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Tornese Foundation non memorizza le chiavi private</li>
                                <li>• Non possiamo recuperare chiavi private perse o dimenticate</li>
                                <li>• La perdita delle chiavi comporta la perdita permanente dei token</li>
                                <li>• Non siamo responsabili per accessi non autorizzati dovuti a negligenza</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">3.3 Smart Contract</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Gli smart contract sono stati auditati da società terze, ma non possiamo garantire l'assenza di bug,
                                vulnerabilità o exploit. L'utilizzo degli smart contract avviene a proprio rischio.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Disclaimer Link Esterni */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <ExternalLink className="w-8 h-8 text-purple-600" />
                        <h2 className="text-2xl font-black text-gray-900 m-0">
                            4. Link e Contenuti di Terze Parti
                        </h2>
                    </div>

                    <div className="text-gray-700 space-y-4">
                        <p className="leading-relaxed">
                            Il nostro sito può contenere link a siti web di terze parti. Questi link sono forniti solo per comodità
                            e non implicano approvazione o responsabilità per i contenuti esterni.
                        </p>
                        <p className="leading-relaxed">
                            Tornese Foundation non è responsabile per:
                        </p>
                        <ul className="space-y-2">
                            <li>• Contenuti, privacy policy o pratiche di siti esterni</li>
                            <li>• Transazioni o interazioni con terze parti</li>
                            <li>• Perdite derivanti dall'utilizzo di servizi di terze parti</li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            Si consiglia di leggere i termini e le condizioni di qualsiasi sito web visitato tramite link esterni.
                        </p>
                    </div>
                </section>

                {/* 5. Disclaimer Normativo */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <FileWarning className="w-8 h-8 text-orange-600" />
                        <h2 className="text-2xl font-black text-gray-900 m-0">
                            5. Conformità Normativa
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">5.1 Giurisdizioni Ristrette</h3>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                                <p className="text-gray-700 leading-relaxed">
                                    I servizi di Tornese Foundation potrebbero non essere disponibili in tutte le giurisdizioni.
                                    È responsabilità dell'utente verificare se l'utilizzo dei nostri servizi è legale nella propria
                                    giurisdizione. L'accesso ai servizi da paesi in cui è vietato è proibito.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">5.2 Antiriciclaggio e KYC</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Tornese Foundation si riserva il diritto di richiedere procedure KYC (Know Your Customer) e AML
                                (Anti-Money Laundering) per determinati servizi o transazioni, in conformità con le normative vigenti.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">5.3 Consulenza Fiscale</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Non forniamo consulenza fiscale. Le criptovalute possono avere implicazioni fiscali diverse in base
                                alla giurisdizione. Consultare un commercialista o consulente fiscale qualificato.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Disclaimer Servizio */}
                <section className="mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        6. Disponibilità del Servizio
                    </h2>

                    <div className="text-gray-700 space-y-4">
                        <p className="leading-relaxed">
                            I servizi sono forniti "as is" senza garanzie di alcun tipo. Tornese Foundation non garantisce:
                        </p>
                        <ul className="space-y-2">
                            <li>• Funzionamento ininterrotto o privo di errori</li>
                            <li>• Disponibilità continua della piattaforma o delle colonnine</li>
                            <li>• Assenza di virus, malware o altri componenti dannosi</li>
                            <li>• Risultati specifici dall'utilizzo dei servizi</li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            Ci riserviamo il diritto di sospendere, modificare o terminare i servizi in qualsiasi momento per
                            manutenzione, aggiornamenti o altre ragioni, anche senza preavviso.
                        </p>
                    </div>
                </section>

                {/* 7. Limitazione di Responsabilità */}
                <section className="mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        7. Limitazione di Responsabilità
                    </h2>

                    <div className="bg-gray-50 border border-gray-300 p-6 rounded-2xl">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Nella misura massima consentita dalla legge applicabile, Tornese Foundation, i suoi amministratori,
                            dipendenti, partner e affiliati non saranno responsabili per:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Danni diretti, indiretti, incidentali, consequenziali o punitivi</li>
                            <li>• Perdite di profitti, ricavi, dati o opportunità commerciali</li>
                            <li>• Interruzioni di attività o perdita di reputazione</li>
                            <li>• Errori, omissioni o imprecisioni nelle informazioni</li>
                            <li>• Accesso non autorizzato o alterazione dei dati</li>
                            <li>• Dichiarazioni o condotta di terze parti</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                            Questa limitazione si applica anche se Tornese Foundation è stata avvisata della possibilità di tali danni.
                        </p>
                    </div>
                </section>

                {/* 8. Modifica del Disclaimer */}
                <section className="mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        8. Modifiche al Disclaimer
                    </h2>

                    <div className="text-gray-700">
                        <p className="leading-relaxed">
                            Ci riserviamo il diritto di modificare questo Disclaimer in qualsiasi momento. Le modifiche saranno
                            pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. L'utilizzo continuato
                            dei servizi dopo la pubblicazione delle modifiche costituisce accettazione delle stesse.
                        </p>
                    </div>
                </section>

                {/* Contatti */}
                <section>
                    <div className="bg-linear-to-r from-gray-900 to-gray-800 text-white p-8 rounded-3xl">
                        <h2 className="text-2xl font-black mb-4">
                            Domande?
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Per domande o chiarimenti riguardo questo Disclaimer:
                        </p>
                        <div className="space-y-2 text-gray-200">
                            <p><strong>Email:</strong> <a href="mailto:legal@tornesefoundation.org" className="text-blue-400 hover:underline">legal@tornesefoundation.org</a></p>
                            <p><strong>Sede:</strong> Via Toledo, 256 - 80132 Napoli (NA), Italia</p>
                            <p><strong>P.IVA:</strong> IT12345678901</p>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-700">
                            <p className="text-sm text-gray-400">
                                Leggendo e utilizzando i nostri servizi, confermi di aver letto, compreso e accettato questo Disclaimer,
                                insieme ai nostri Termini di Servizio e Privacy Policy.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Disclaimer;