import React from 'react';
import { Shield, Mail, Lock, Eye, Database, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                        <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600">
                        Ultimo aggiornamento: 13 Novembre 2025
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">

                    {/* Introduzione */}
                    <section className="mb-12">
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                Tornese Foundation S.r.l. ("noi", "nostro/a") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali.
                                Questa Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni quando utilizzi il nostro
                                sito web e i nostri servizi.
                            </p>
                        </div>
                    </section>

                    {/* 1. Dati Raccolti */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Database className="w-8 h-8 text-blue-600" />
                            <h2 className="text-2xl font-black text-gray-900 m-0">
                                1. Dati che Raccogliamo
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">1.1 Dati Personali</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Potremmo raccogliere le seguenti informazioni personali:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Nome e cognome</li>
                                    <li>• Indirizzo email</li>
                                    <li>• Numero di telefono</li>
                                    <li>• Indirizzo fisico (per partnership aziendali)</li>
                                    <li>• Dati fiscali (P.IVA per aziende)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">1.2 Dati Blockchain</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Per l'utilizzo del token Tornese (TRN):
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Indirizzo wallet pubblico</li>
                                    <li>• Storico transazioni on-chain</li>
                                    <li>• Dati di utilizzo delle colonnine intelligenti</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">1.3 Dati Tecnici</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Raccogliamo automaticamente:
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Indirizzo IP</li>
                                    <li>• Browser e dispositivo utilizzato</li>
                                    <li>• Dati di navigazione e cookie</li>
                                    <li>• Geolocalizzazione (con consenso)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 2. Come Utilizziamo i Dati */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Eye className="w-8 h-8 text-blue-600" />
                            <h2 className="text-2xl font-black text-gray-900 m-0">
                                2. Come Utilizziamo i Tuoi Dati
                            </h2>
                        </div>

                        <div className="space-y-4 text-gray-700">
                            <p className="leading-relaxed">
                                Utilizziamo i dati raccolti per:
                            </p>
                            <ul className="space-y-2">
                                <li>• Fornire e migliorare i nostri servizi</li>
                                <li>• Gestire il tuo account e le transazioni in token TRN</li>
                                <li>• Comunicare aggiornamenti sul progetto</li>
                                <li>• Inviare newsletter (con consenso esplicito)</li>
                                <li>• Analizzare l'utilizzo del sito e ottimizzare l'esperienza utente</li>
                                <li>• Prevenire frodi e garantire la sicurezza</li>
                                <li>• Adempiere obblighi legali e normativi</li>
                            </ul>
                        </div>
                    </section>

                    {/* 3. Base Giuridica */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Lock className="w-8 h-8 text-blue-600" />
                            <h2 className="text-2xl font-black text-gray-900 m-0">
                                3. Base Giuridica del Trattamento
                            </h2>
                        </div>

                        <div className="space-y-4 text-gray-700">
                            <p className="leading-relaxed">
                                Trattiamo i tuoi dati personali sulla base di:
                            </p>
                            <ul className="space-y-2">
                                <li>• <strong>Consenso esplicito</strong>: per newsletter e comunicazioni marketing</li>
                                <li>• <strong>Esecuzione del contratto</strong>: per fornire i servizi richiesti</li>
                                <li>• <strong>Obbligo legale</strong>: per adempiere normative fiscali e blockchain</li>
                                <li>• <strong>Legittimo interesse</strong>: per migliorare i servizi e prevenire frodi</li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. Condivisione Dati */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">
                            4. Condivisione dei Dati
                        </h2>

                        <div className="space-y-4 text-gray-700">
                            <p className="leading-relaxed">
                                Non vendiamo mai i tuoi dati. Potremmo condividerli con:
                            </p>
                            <ul className="space-y-2">
                                <li>• <strong>Fornitori di servizi</strong>: hosting, email marketing (es. Mailchimp), analytics</li>
                                <li>• <strong>Partner blockchain</strong>: per validare transazioni on-chain</li>
                                <li>• <strong>Enti pubblici</strong>: comuni e istituzioni per collaborazioni ESG</li>
                                <li>• <strong>Autorità competenti</strong>: in caso di obblighi legali</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                Tutti i terzi sono tenuti contrattualmente a proteggere i tuoi dati secondo il GDPR.
                            </p>
                        </div>
                    </section>

                    {/* 5. Diritti dell'Utente */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">
                            5. I Tuoi Diritti
                        </h2>

                        <div className="bg-linear-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Secondo il GDPR (Regolamento UE 2016/679), hai diritto a:
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>Accesso</strong>: richiedere copia dei tuoi dati</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>Rettifica</strong>: correggere dati inesatti</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>Cancellazione</strong>: richiedere eliminazione dei dati ("diritto all'oblio")</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>Limitazione</strong>: limitare il trattamento</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>Portabilità</strong>: ricevere dati in formato strutturato</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>Opposizione</strong>: opporti a determinati trattamenti</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">✓</span>
                                    <span><strong>Revoca consenso</strong>: ritirare il consenso in qualsiasi momento</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 6. Sicurezza */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">
                            6. Sicurezza dei Dati
                        </h2>

                        <div className="space-y-4 text-gray-700">
                            <p className="leading-relaxed">
                                Implementiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati:
                            </p>
                            <ul className="space-y-2">
                                <li>• Crittografia SSL/TLS per tutte le comunicazioni</li>
                                <li>• Server sicuri con accesso limitato</li>
                                <li>• Backup regolari e disaster recovery</li>
                                <li>• Autenticazione a due fattori (2FA) per account sensibili</li>
                                <li>• Audit di sicurezza periodici</li>
                            </ul>
                        </div>
                    </section>

                    {/* 7. Conservazione */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">
                            7. Conservazione dei Dati
                        </h2>

                        <div className="text-gray-700 space-y-4">
                            <p className="leading-relaxed">
                                Conserviamo i tuoi dati personali solo per il tempo necessario a soddisfare le finalità per cui sono stati raccolti:
                            </p>
                            <ul className="space-y-2">
                                <li>• <strong>Dati di contatto</strong>: fino a revoca del consenso o 2 anni di inattività</li>
                                <li>• <strong>Dati transazionali blockchain</strong>: permanenti on-chain (natura immutabile)</li>
                                <li>• <strong>Dati contabili</strong>: 10 anni (obbligo fiscale)</li>
                                <li>• <strong>Cookie tecnici</strong>: fino a 12 mesi</li>
                            </ul>
                        </div>
                    </section>

                    {/* 8. Cookie */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">
                            8. Cookie e Tecnologie Simili
                        </h2>

                        <div className="text-gray-700 space-y-4">
                            <p className="leading-relaxed">
                                Utilizziamo cookie per migliorare l'esperienza di navigazione. Per maggiori dettagli, consulta la nostra{' '}
                                <a href="/cookie-policy" className="text-blue-600 hover:underline font-semibold">
                                    Cookie Policy
                                </a>.
                            </p>
                        </div>
                    </section>

                    {/* 9. Minori */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertCircle className="w-8 h-8 text-orange-500" />
                            <h2 className="text-2xl font-black text-gray-900 m-0">
                                9. Privacy dei Minori
                            </h2>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                            <p className="text-gray-700 leading-relaxed">
                                I nostri servizi non sono destinati a minori di 18 anni. Non raccogliamo consapevolmente dati di minori.
                                Se scopriamo di aver raccolto dati di un minore, procederemo immediatamente alla cancellazione.
                            </p>
                        </div>
                    </section>

                    {/* 10. Modifiche */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">
                            10. Modifiche alla Privacy Policy
                        </h2>

                        <div className="text-gray-700">
                            <p className="leading-relaxed">
                                Ci riserviamo il diritto di aggiornare questa Privacy Policy. Le modifiche saranno pubblicate su questa pagina
                                con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina.
                            </p>
                        </div>
                    </section>

                    {/* Contatti */}
                    <section className="mb-12">
                        <div className="bg-linear-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Mail className="w-8 h-8" />
                                <h2 className="text-2xl font-black m-0">
                                    Contattaci
                                </h2>
                            </div>
                            <p className="mb-4 text-blue-50">
                                Per esercitare i tuoi diritti o per domande sulla privacy:
                            </p>
                            <div className="space-y-2 text-blue-50">
                                <p><strong>Titolare del Trattamento:</strong> Tornese Foundation S.r.l.</p>
                                <p><strong>Email:</strong> <a href="mailto:privacy@tornesefoundation.org" className="text-white hover:underline font-semibold">privacy@tornesefoundation.org</a></p>
                                <p><strong>Indirizzo:</strong> Via Toledo, 256 - 80132 Napoli (NA), Italia</p>
                                <p><strong>P.IVA:</strong> IT12345678901</p>
                            </div>
                            <p className="mt-6 text-sm text-blue-50">
                                Hai anche il diritto di presentare reclamo all'Autorità Garante per la Protezione dei Dati Personali:{' '}
                                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-semibold">
                                    www.garanteprivacy.it
                                </a>
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;