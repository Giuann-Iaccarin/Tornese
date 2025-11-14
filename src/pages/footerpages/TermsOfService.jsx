import React from 'react';
import { FileText, Scale, AlertTriangle, UserCheck, Coins, Shield, Ban } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-white py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                        <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Termini e Condizioni di Servizio
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Regole e condizioni per l'utilizzo della piattaforma Tornese Foundation
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Ultimo aggiornamento: 13 Novembre 2025
                    </p>
                </div>

                {/* Introduzione */}
                <section className="mb-12">
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                        <p className="text-gray-700 leading-relaxed">
                            I presenti Termini e Condizioni di Servizio ("Termini") regolano l'accesso e l'utilizzo dei servizi offerti
                            da <strong>Tornese Foundation S.r.l.</strong> ("Tornese", "noi", "nostro/a"), inclusi il sito web,
                            l'applicazione mobile, le colonnine intelligenti per il riciclo e il token Tornese (TRN).
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Utilizzando i nostri servizi, accetti integralmente questi Termini. Se non accetti, ti preghiamo di non utilizzare i nostri servizi.
                        </p>
                    </div>
                </section>

                {/* 1. Definizioni */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Scale className="w-8 h-8 text-blue-600" />
                        <h2 className="text-2xl font-black text-gray-900 m-0">
                            1. Definizioni
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700">
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p className="leading-relaxed">
                                <strong>"Servizi":</strong> L'insieme delle funzionalità offerte da Tornese Foundation, inclusi sito web,
                                app mobile, colonnine intelligenti per il riciclo, wallet digitale e token TRN.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p className="leading-relaxed">
                                <strong>"Utente":</strong> Qualsiasi persona fisica o giuridica che utilizza i Servizi.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p className="leading-relaxed">
                                <strong>"Token TRN":</strong> Criptovaluta emessa da Tornese Foundation su blockchain Ethereum-compatible,
                                utilizzabile come incentivo per il riciclo.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p className="leading-relaxed">
                                <strong>"Colonnine":</strong> Dispositivi IoT intelligenti per la raccolta differenziata di materiali riciclabili,
                                connessi alla piattaforma Tornese.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p className="leading-relaxed">
                                <strong>"Account":</strong> Profilo personale creato dall'Utente per accedere ai Servizi.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Accettazione dei Termini */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <UserCheck className="w-8 h-8 text-blue-600" />
                        <h2 className="text-2xl font-black text-gray-900 m-0">
                            2. Accettazione dei Termini
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700">
                        <p className="leading-relaxed">
                            Utilizzando i Servizi, dichiari di:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">✓</span>
                                <span>Avere almeno 18 anni o l'età legale richiesta nel tuo paese</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">✓</span>
                                <span>Avere capacità legale di stipulare contratti vincolanti</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">✓</span>
                                <span>Accettare tutti i presenti Termini e la Privacy Policy</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">✓</span>
                                <span>Utilizzare i Servizi in conformità con le leggi applicabili</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 3. Creazione Account */}
                <section className="mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        3. Creazione e Gestione dell'Account
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">3.1 Registrazione</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Per utilizzare determinati Servizi, è necessario creare un Account fornendo informazioni accurate,
                                complete e aggiornate. Sei responsabile della sicurezza delle tue credenziali di accesso.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">3.2 Responsabilità dell'Account</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Sei responsabile di:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Mantenere riservate le credenziali di accesso</li>
                                <li>• Tutte le attività svolte tramite il tuo Account</li>
                                <li>• Notificarci immediatamente in caso di accesso non autorizzato</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">3.3 Wallet e Chiavi Private</h3>
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                                    <div>
                                        <p className="text-gray-700 leading-relaxed font-semibold mb-2">
                                            IMPORTANTE: Custodia delle Chiavi Private
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Tornese Foundation non memorizza né può recuperare le tue chiavi private. Sei l'unico responsabile
                                            della custodia del tuo wallet e delle chiavi private. La perdita delle chiavi private comporta
                                            la perdita irreversibile dei token TRN.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Token TRN */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Coins className="w-8 h-8 text-blue-600" />
                        <h2 className="text-2xl font-black text-gray-900 m-0">
                            4. Token Tornese (TRN)
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">4.1 Natura del Token</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Il token TRN è un utility token utilizzato all'interno dell'ecosistema Tornese per incentivare
                                comportamenti sostenibili. TRN può essere convertito in buoni carburante, biglietti per mezzi pubblici
                                o sconti presso partner convenzionati.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">4.2 Acquisizione Token</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                I token TRN possono essere ottenuti:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Conferendo materiali riciclabili nelle Colonnine Tornese</li>
                                <li>• Partecipando a programmi di loyalty e partnership</li>
                                <li>• Acquistandoli tramite exchange autorizzati (dopo il listing)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">4.3 Utilizzo Token</h3>
                            <p className="text-gray-700 leading-relaxed">
                                I token TRN possono essere utilizzati per accedere a benefici e servizi partner. Tornese Foundation
                                si riserva il diritto di modificare, aggiungere o rimuovere partner e servizi disponibili.
                            </p>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">4.4 Disclaimer Finanziario</h3>
                            <p className="text-gray-700 leading-relaxed">
                                <strong>I token TRN non costituiscono:</strong>
                            </p>
                            <ul className="space-y-2 text-gray-700 mt-2">
                                <li>• Strumenti finanziari o valori mobiliari</li>
                                <li>• Investimenti con aspettativa di profitto</li>
                                <li>• Partecipazioni azionarie in Tornese Foundation</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Il valore dei token può fluttuare. Tornese Foundation non garantisce alcun rendimento finanziario.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Utilizzo delle Colonnine */}
                <section className="mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        5. Utilizzo delle Colonnine Intelligenti
                    </h2>

                    <div className="space-y-4 text-gray-700">
                        <p className="leading-relaxed">
                            L'Utente si impegna a:
                        </p>
                        <ul className="space-y-2">
                            <li>• Conferire solo materiali riciclabili previsti (plastica, lattine, carta, vetro)</li>
                            <li>• Non inserire rifiuti pericolosi, organici o non conformi</li>
                            <li>• Utilizzare le Colonnine in modo corretto e non danneggiare i dispositivi</li>
                            <li>• Rispettare le norme igieniche e di sicurezza</li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            Tornese Foundation si riserva il diritto di sospendere o terminare l'accesso alle Colonnine in caso di uso improprio.
                        </p>
                    </div>
                </section>

                {/* 6. Comportamenti Vietati */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Ban className="w-8 h-8 text-red-600" />
                        <h2 className="text-2xl font-black text-gray-900 m-0">
                            6. Comportamenti Vietati
                        </h2>
                    </div>

                    <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            È vietato:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Violare leggi, regolamenti o diritti di terzi</li>
                            <li>• Utilizzare i Servizi per scopi fraudolenti o illeciti</li>
                            <li>• Manipolare o alterare il sistema di ricompense</li>
                            <li>• Creare account multipli per ottenere vantaggi indebiti</li>
                            <li>• Tentare di hackerare, danneggiare o compromettere i Servizi</li>
                            <li>• Rivendere o trasferire token in violazione delle normative</li>
                            <li>• Utilizzare bot, script o strumenti automatizzati non autorizzati</li>
                            <li>• Diffamare, molestare o danneggiare altri Utenti o Tornese Foundation</li>
                        </ul>
                    </div>
                </section>

                {/* 7. Proprietà Intellettuale */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-8 h-8 text-blue-600" />
                        <h2 className="text-2xl font-black text-gray-900 m-0">
                            7. Proprietà Intellettuale
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700">
                        <p className="leading-relaxed">
                            Tutti i contenuti presenti sui Servizi (testi, grafiche, loghi, immagini, codice software, design)
                            sono di proprietà esclusiva di Tornese Foundation o dei suoi licenziatari e sono protetti dalle leggi
                            sul copyright, marchi e altre normative sulla proprietà intellettuale.
                        </p>
                        <p className="leading-relaxed">
                            È vietato copiare, modificare, distribuire, vendere o sfruttare commercialmente qualsiasi contenuto
                            senza autorizzazione scritta.
                        </p>
                    </div>
                </section>

                {/* 8. Limitazione di Responsabilità */}
                <section className="mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        8. Limitazione di Responsabilità
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">8.1 Servizi "As Is"</h3>
                            <p className="text-gray-700 leading-relaxed">
                                I Servizi sono forniti "così come sono" e "come disponibili". Tornese Foundation non garantisce
                                che i Servizi siano ininterrotti, sicuri o privi di errori.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">8.2 Esclusione di Garanzie</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Tornese Foundation non è responsabile per:
                            </p>
                            <ul className="space-y-2 text-gray-700 mt-2">
                                <li>• Perdite finanziarie derivanti dall'utilizzo dei token TRN</li>
                                <li>• Malfunzionamenti tecnici delle Colonnine o della piattaforma</li>
                                <li>• Perdita di chiavi private o accesso non autorizzato al wallet</li>
                                <li>• Modifiche normative che influenzano l'utilizzo dei token</li>
                                <li>• Azioni di terze parti (exchange, partner, blockchain)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">8.3 Limiti di Responsabilità</h3>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                <p className="text-gray-700 leading-relaxed">
                                    Nella misura massima consentita dalla legge, la responsabilità totale di Tornese Foundation
                                    nei tuoi confronti per qualsiasi danno derivante dall'utilizzo dei Servizi è limitata all'importo
                                    pagato (se presente) negli ultimi 12 mesi.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Modifiche ai Termini */}
                <section className="mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        9. Modifiche ai Termini di Servizio
                    </h2>

                    <div className="text-gray-700 space-y-4">
                        <p className="leading-relaxed">
                            Tornese Foundation si riserva il diritto di modificare questi Termini in qualsiasi momento.
                            Le modifiche sostanziali saranno comunicate via email o tramite notifica sui Servizi almeno 30 giorni
                            prima dell'entrata in vigore.
                        </p>
                        <p className="leading-relaxed">
                            Continuando a utilizzare i Servizi dopo le modifiche, accetti automaticamente i nuovi Termini.
                            Se non accetti, devi cessare l'utilizzo dei Servizi.
                        </p>
                    </div>
                </section>

                {/* 10. Risoluzione */}
                <section className="mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        10. Sospensione e Risoluzione
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">10.1 Da Parte dell'Utente</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Puoi cessare l'utilizzo dei Servizi in qualsiasi momento eliminando il tuo Account dalle impostazioni.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">10.2 Da Parte di Tornese Foundation</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Possiamo sospendere o terminare il tuo accesso ai Servizi in caso di:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Violazione dei presenti Termini</li>
                                <li>• Attività fraudolente o illegali</li>
                                <li>• Rischi per la sicurezza della piattaforma</li>
                                <li>• Richiesta da parte delle autorità competenti</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 11. Legge Applicabile */}
                <section className="mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        11. Legge Applicabile e Giurisdizione
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                            I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia, sarà competente
                            in via esclusiva il Foro di Napoli, Italia.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            In conformità con la normativa europea, i consumatori dell'UE possono accedere alla piattaforma
                            di risoluzione delle controversie online:{' '}
                            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                                https://ec.europa.eu/consumers/odr
                            </a>
                        </p>
                    </div>
                </section>

                {/* 12. Contatti */}
                <section>
                    <div className="bg-linear-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-3xl">
                        <h2 className="text-2xl font-black mb-4">
                            Contatti
                        </h2>
                        <p className="text-blue-50 mb-6">
                            Per domande, chiarimenti o richieste relative ai presenti Termini:
                        </p>
                        <div className="space-y-2 text-blue-50">
                            <p><strong>Ragione Sociale:</strong> Tornese Foundation S.r.l.</p>
                            <p><strong>Sede Legale:</strong> Via Toledo, 256 - 80132 Napoli (NA), Italia</p>
                            <p><strong>P.IVA:</strong> IT12345678901</p>
                            <p><strong>Email:</strong> <a href="mailto:legal@tornesefoundation.org" className="text-white hover:underline font-semibold">legal@tornesefoundation.org</a></p>
                            <p><strong>PEC:</strong> tornese@pec.tornesefoundation.org</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default TermsOfService;