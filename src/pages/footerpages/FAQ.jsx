import React, { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
    const navigate = useNavigate();
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqItems = [
        {
            category: 'Generale',
            questions: [
                {
                    q: 'Cos\'è Tornese?',
                    a: 'Tornese è un ecosistema blockchain decentralizzato che premia i comportamenti sostenibili nella gestione dei rifiuti urbani. Utilizza la tecnologia blockchain per creare un sistema trasparente e immutabile che connette cittadini, aziende e istituzioni.'
                },
                {
                    q: 'Come posso iniziare con Tornese?',
                    a: 'Puoi iniziare registrandoti sulla piattaforma, completando la verifica dell\'identità e ricevendo il tuo wallet digitale. Successivamente, potrai iniziare a guadagnare token TORNESE partecipando alle attività di riciclaggio.'
                },
                {
                    q: 'È gratuito?',
                    a: 'Sì, registrarsi e utilizzare la piattaforma Tornese è completamente gratuito. Tuttavia, potrebbero esserci costi associati a transazioni blockchain sulla rete principale.'
                }
            ]
        },
        {
            category: 'Token e Portafoglio',
            questions: [
                {
                    q: 'Cos\'è il token TORNESE?',
                    a: 'Il token TORNESE è la valuta nativa dell\'ecosistema Tornese. Può essere guadagnato partecipando ad attività di riciclaggio, staking o governance della comunità.'
                },
                {
                    q: 'Come posso guadagnare token TORNESE?',
                    a: 'Puoi guadagnare token TORNESE attraverso diverse attività: riciclaggio di rifiuti, staking dei tuoi token, partecipazione a governance e referral di nuovi utenti.'
                },
                {
                    q: 'Posso vendere i miei token TORNESE?',
                    a: 'Sì, una volta guadagnati i token TORNESE, puoi scambiarli su exchange di criptovalute supportati o trasferirli ad altri portafogli.'
                },
                {
                    q: 'Come proteggo il mio portafoglio?',
                    a: 'Mantieni sempre la tua seed phrase privata e sicura, utilizza password forti, abilita l\'autenticazione a due fattori e non condividere mai le tue chiavi private.'
                }
            ]
        },
        {
            category: 'Riciclaggio e Ricompense',
            questions: [
                {
                    q: 'Come funziona il sistema di riciclaggio?',
                    a: 'Puoi portare i tuoi rifiuti riciclabili presso i punti di raccolta autorizzati Tornese, scansionare il codice QR e ricevere automaticamente le ricompense nel tuo wallet.'
                },
                {
                    q: 'Quali tipi di rifiuti posso riciclare?',
                    a: 'Attualmente accettiamo: plastica, vetro, metallo, carta e cartone. Per un elenco completo, consulta la pagina dei materiali accettati.'
                },
                {
                    q: 'Quanto posso guadagnare riciclando?',
                    a: 'Le ricompense variano in base al tipo e alla quantità di rifiuti riciclati. Maggiore è la quantità, maggiore sarà la ricompensa.'
                }
            ]
        },
        {
            category: 'Sicurezza e Privacy',
            questions: [
                {
                    q: 'I miei dati personali sono al sicuro?',
                    a: 'Sì, utilizziamo crittografia end-to-end e conformiamo a tutti i regolamenti GDPR per proteggere i tuoi dati personali.'
                },
                {
                    q: 'Cosa fate con i miei dati?',
                    a: 'Utilizziamo i tuoi dati solo per fornire i servizi di Tornese e migliorare la piattaforma. Non li vendiamo a terze parti. Consulta la nostra Privacy Policy per dettagli completi.'
                }
            ]
        },
        {
            category: 'Supporto Tecnico',
            questions: [
                {
                    q: 'Dove posso segnalare un bug?',
                    a: 'Puoi segnalare bug inviando un email a support@tornesefoundation.org o contattandoci tramite il nostro Discord community server.'
                },
                {
                    q: 'La piattaforma è disponibile su mobile?',
                    a: 'Sì, Tornese è disponibile come applicazione web mobile-responsive. Stiamo anche sviluppando app native per iOS e Android.'
                }
            ]
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

                <h1 className="text-4xl font-black mb-2">Domande Frequenti</h1>
                <p className="text-gray-400 mb-8">Trova le risposte alle domande più comuni su Tornese</p>

                {/* FAQ Items */}
                <div className="space-y-8 text-gray-300 leading-relaxed">
                    {faqItems.map((category, categoryIndex) => (
                        <section key={categoryIndex}>
                            <h2 className="text-2xl font-bold text-white mb-4">{category.category}</h2>
                            <div className="space-y-3">
                                {category.questions.map((item, itemIndex) => {
                                    const globalIndex = `${categoryIndex}-${itemIndex}`;
                                    const isExpanded = expandedIndex === globalIndex;

                                    return (
                                        <div
                                            key={itemIndex}
                                            className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden"
                                        >
                                            <button
                                                onClick={() => setExpandedIndex(isExpanded ? null : globalIndex)}
                                                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors text-left"
                                            >
                                                <span className="font-semibold text-white pr-4">{item.q}</span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>

                                            {isExpanded && (
                                                <div className="px-6 py-4 bg-slate-700/30 border-t border-slate-700">
                                                    <p>{item.a}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 pt-8 border-t border-slate-800 text-center">
                    <p className="text-gray-400 mb-4">Non hai trovato la risposta che cercavi?</p>
                    <a
                        href="mailto:support@tornesefoundation.org"
                        className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Contatta il Supporto
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
