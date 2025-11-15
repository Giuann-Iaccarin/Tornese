import React, { useState } from 'react';
import { Book, Search, ChevronRight, Download, Code, Smartphone, Wallet, Settings, Shield, Zap, ExternalLink, CheckCircle } from 'lucide-react';

const Documentation = () => {
    const [activeSection, setActiveSection] = useState('getting-started');
    const [searchQuery, setSearchQuery] = useState('');

    const sections = [
        {
            id: 'getting-started',
            title: 'Inizia Subito',
            icon: Zap,
            subsections: [
                { id: 'intro', title: 'Introduzione a Tornese' },
                { id: 'create-account', title: 'Crea il Tuo Account' },
                { id: 'first-steps', title: 'Primi Passi' },
                { id: 'find-stations', title: 'Trova le Colonnine' }
            ]
        },
        {
            id: 'mobile-app',
            title: 'App Mobile',
            icon: Smartphone,
            subsections: [
                { id: 'install', title: 'Installazione' },
                { id: 'navigation', title: 'Navigazione' },
                { id: 'qr-scan', title: 'Scansione QR Code' },
                { id: 'notifications', title: 'Notifiche' }
            ]
        },
        {
            id: 'wallet',
            title: 'Wallet & Token',
            icon: Wallet,
            subsections: [
                { id: 'wallet-setup', title: 'Setup Wallet' },
                { id: 'receive-tokens', title: 'Ricevere Token TRN' },
                { id: 'convert-tokens', title: 'Convertire Token' },
                { id: 'security', title: 'Sicurezza Wallet' }
            ]
        },
        {
            id: 'recycling',
            title: 'Riciclo & Colonnine',
            icon: Book,
            subsections: [
                { id: 'materials', title: 'Materiali Accettati' },
                { id: 'how-to-recycle', title: 'Come Riciclare' },
                { id: 'rewards', title: 'Sistema di Ricompense' },
                { id: 'troubleshooting', title: 'Risoluzione Problemi' }
            ]
        },
        {
            id: 'account',
            title: 'Gestione Account',
            icon: Settings,
            subsections: [
                { id: 'profile', title: 'Profilo Utente' },
                { id: 'settings', title: 'Impostazioni' },
                { id: 'privacy', title: 'Privacy & Dati' },
                { id: 'delete-account', title: 'Eliminare Account' }
            ]
        },
        {
            id: 'security',
            title: 'Sicurezza',
            icon: Shield,
            subsections: [
                { id: '2fa', title: 'Autenticazione 2FA' },
                { id: 'backup', title: 'Backup & Recovery' },
                { id: 'best-practices', title: 'Best Practices' },
                { id: 'report-issues', title: 'Segnalare Problemi' }
            ]
        }
    ];

    const documentation = {
        'intro': {
            title: 'Introduzione a Tornese',
            content: `
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Benvenuto in Tornese Foundation</h3>
        <p class="mb-4">Tornese è il primo ecosistema blockchain che premia il riciclo. Ogni volta che conferisci materiali riciclabili nelle nostre colonnine intelligenti, ricevi token TRN che puoi convertire in benefici reali.</p>
        
        <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Come Funziona in 3 Step</h4>
        <div class="space-y-4">
          <div class="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <h5 class="font-bold text-gray-900">Trova una Colonnina</h5>
              <p class="text-gray-700 text-sm">Usa l'app per localizzare la colonnina più vicina a te</p>
            </div>
          </div>
          <div class="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <h5 class="font-bold text-gray-900">Ricicla</h5>
              <p class="text-gray-700 text-sm">Inserisci plastica, lattine o altri materiali nella colonnina</p>
            </div>
          </div>
          <div class="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <h5 class="font-bold text-gray-900">Ricevi Token</h5>
              <p class="text-gray-700 text-sm">I token TRN arrivano immediatamente nel tuo wallet</p>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6 rounded-r-xl">
          <p class="text-sm text-gray-700"><strong>💡 Suggerimento:</strong> Più ricicli, più guadagni! Partecipa anche alle sfide settimanali per moltiplicare i tuoi token.</p>
        </div>
      `
        },
        'create-account': {
            title: 'Crea il Tuo Account',
            content: `
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Registrazione Account</h3>
        <p class="mb-4">Creare un account Tornese è gratuito e richiede solo 2 minuti.</p>
        
        <h4 class="text-xl font-bold text-gray-900 mt-6 mb-3">Requisiti</h4>
        <ul class="space-y-2 mb-6">
          <li class="flex items-start gap-2"><span class="text-blue-600">✓</span> Avere almeno 18 anni</li>
          <li class="flex items-start gap-2"><span class="text-blue-600">✓</span> Un indirizzo email valido</li>
          <li class="flex items-start gap-2"><span class="text-blue-600">✓</span> Uno smartphone con iOS 14+ o Android 8+</li>
        </ul>

        <h4 class="text-xl font-bold text-gray-900 mb-3">Procedura Passo-Passo</h4>
        <div class="space-y-4">
          <div class="border-l-4 border-blue-600 pl-4">
            <h5 class="font-bold text-gray-900 mb-2">Step 1: Scarica l'App</h5>
            <p class="text-gray-700 mb-2">Disponibile su:</p>
            <div class="flex gap-3">
              <button class="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold flex items-center gap-2">
                <span>📱</span> App Store
              </button>
              <button class="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold flex items-center gap-2">
                <span>🤖</span> Google Play
              </button>
            </div>
          </div>

          <div class="border-l-4 border-blue-600 pl-4">
            <h5 class="font-bold text-gray-900 mb-2">Step 2: Registrati</h5>
            <p class="text-gray-700">Inserisci email, crea password (min 8 caratteri), conferma email tramite link.</p>
          </div>

          <div class="border-l-4 border-blue-600 pl-4">
            <h5 class="font-bold text-gray-900 mb-2">Step 3: Configura il Wallet</h5>
            <p class="text-gray-700">L'app genera automaticamente un wallet. <strong>Importante:</strong> Salva la seed phrase (12 parole) in un posto sicuro!</p>
          </div>

          <div class="border-l-4 border-blue-600 pl-4">
            <h5 class="font-bold text-gray-900 mb-2">Step 4: Completa il Profilo</h5>
            <p class="text-gray-700">Nome, città (opzionale), foto profilo. Questo ti aiuta a partecipare alle community locali.</p>
          </div>
        </div>

        <div class="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded-r-xl">
          <p class="text-sm text-gray-700"><strong>⚠️ Attenzione:</strong> Non condividere MAI la tua seed phrase con nessuno, nemmeno con il team Tornese!</p>
        </div>
      `
        },
        'wallet-setup': {
            title: 'Setup Wallet',
            content: `
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Configurazione Wallet</h3>
        <p class="mb-6">Il wallet Tornese è dove vengono conservati i tuoi token TRN. È generato automaticamente alla registrazione, ma puoi anche importare un wallet esistente.</p>
        
        <h4 class="text-xl font-bold text-gray-900 mb-3">Opzione 1: Wallet Automatico (Consigliato)</h4>
        <p class="mb-4">Alla registrazione, l'app crea automaticamente un wallet ERC-20 compatibile. Riceverai:</p>
        <ul class="space-y-2 mb-6">
          <li class="flex items-start gap-2"><span class="text-blue-600">•</span> <strong>Indirizzo pubblico:</strong> Inizia con 0x... (puoi condividerlo)</li>
          <li class="flex items-start gap-2"><span class="text-blue-600">•</span> <strong>Chiave privata:</strong> Non condividere mai!</li>
          <li class="flex items-start gap-2"><span class="text-blue-600">•</span> <strong>Seed phrase:</strong> 12 parole per recovery</li>
        </ul>

        <h4 class="text-xl font-bold text-gray-900 mb-3">Opzione 2: Importa Wallet Esistente</h4>
        <p class="mb-4">Se hai già un wallet MetaMask, Trust Wallet o altro ERC-20:</p>
        <ol class="list-decimal pl-5 space-y-2 mb-6">
          <li>Vai su Impostazioni → Wallet</li>
          <li>Clicca "Importa Wallet Esistente"</li>
          <li>Inserisci la seed phrase (12 o 24 parole)</li>
          <li>Conferma</li>
        </ol>

        <h4 class="text-xl font-bold text-gray-900 mb-3">Backup della Seed Phrase</h4>
        <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h5 class="font-bold text-gray-900 mb-3">✅ Metodi Sicuri:</h5>
          <ul class="space-y-2 mb-4">
            <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Scrivi su carta e conserva in cassaforte</li>
            <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Usa un password manager crittografato (1Password, Bitwarden)</li>
            <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Crea backup fisici in luoghi diversi</li>
          </ul>
          
          <h5 class="font-bold text-gray-900 mb-3">❌ Da Evitare:</h5>
          <ul class="space-y-2">
            <li class="flex items-start gap-2"><span class="text-red-600">✗</span> Screenshot o foto digitali</li>
            <li class="flex items-start gap-2"><span class="text-red-600">✗</span> Email o messaggi</li>
            <li class="flex items-start gap-2"><span class="text-red-600">✗</span> Cloud non crittografato (Google Drive, Dropbox)</li>
          </ul>
        </div>
      `
        },
        'materials': {
            title: 'Materiali Accettati',
            content: `
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Materiali Riciclabili</h3>
        <p class="mb-6">Le colonnine Tornese accettano diversi tipi di materiali. Ogni materiale ha un valore in token TRN diverso.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white border-2 border-blue-200 rounded-xl p-6">
            <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              🍾 Plastica (PET)
            </h4>
            <p class="text-gray-700 mb-3">Bottiglie di acqua, bibite, succhi</p>
            <div class="bg-blue-50 p-3 rounded-lg">
              <p class="text-sm font-semibold text-blue-900">Ricompensa: 5-10 TRN per bottiglia</p>
            </div>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Vuote e schiacciate</li>
              <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Pulite (sciacquate)</li>
              <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Senza tappo (conferisci separatamente)</li>
            </ul>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              🥫 Lattine Alluminio
            </h4>
            <p class="text-gray-700 mb-3">Lattine di bevande (Coca-Cola, birra, ecc.)</p>
            <div class="bg-gray-50 p-3 rounded-lg">
              <p class="text-sm font-semibold text-gray-900">Ricompensa: 8-12 TRN per lattina</p>
            </div>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Vuote</li>
              <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Schiacciate per ridurre volume</li>
              <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Senza residui</li>
            </ul>
          </div>

          <div class="bg-white border-2 border-amber-200 rounded-xl p-6">
            <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              📄 Carta e Cartone
            </h4>
            <p class="text-gray-700 mb-3">Giornali, riviste, scatole di cartone</p>
            <div class="bg-amber-50 p-3 rounded-lg">
              <p class="text-sm font-semibold text-amber-900">Ricompensa: 3-7 TRN per kg</p>
            </div>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Pulita e asciutta</li>
              <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Senza nastro adesivo</li>
              <li class="flex items-start gap-2"><span class="text-red-600">✗</span> No carta oleata/plastificata</li>
            </ul>
          </div>

          <div class="bg-white border-2 border-green-200 rounded-xl p-6">
            <h4 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              🍷 Vetro
            </h4>
            <p class="text-gray-700 mb-3">Bottiglie di vino, birra, contenitori</p>
            <div class="bg-green-50 p-3 rounded-lg">
              <p class="text-sm font-semibold text-green-900">Ricompensa: 10-15 TRN per bottiglia</p>
            </div>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Vuote e pulite</li>
              <li class="flex items-start gap-2"><span class="text-green-600">✓</span> Senza tappi/coperchi</li>
              <li class="flex items-start gap-2"><span class="text-red-600">✗</span> No vetro rotto</li>
            </ul>
          </div>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6 rounded-r-xl">
          <p class="text-sm text-gray-700"><strong>💡 Tip:</strong> I materiali puliti e ben preparati ricevono bonus token! La qualità conta.</p>
        </div>
      `
        },
        '2fa': {
            title: 'Autenticazione a Due Fattori (2FA)',
            content: `
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Autenticazione a Due Fattori</h3>
        <p class="mb-6">2FA aggiunge un ulteriore livello di sicurezza al tuo account. Anche se qualcuno ottiene la tua password, non potrà accedere senza il codice 2FA.</p>

        <h4 class="text-xl font-bold text-gray-900 mb-3">Come Attivare 2FA</h4>
        <ol class="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <strong>Installa un'app Authenticator</strong>
            <p class="text-gray-700 mt-1">Consigliamo: Google Authenticator, Authy, o Microsoft Authenticator</p>
          </li>
          <li>
            <strong>Vai su Impostazioni → Sicurezza</strong>
            <p class="text-gray-700 mt-1">Nell'app Tornese, sezione Sicurezza</p>
          </li>
          <li>
            <strong>Clicca "Attiva 2FA"</strong>
            <p class="text-gray-700 mt-1">Vedrai un QR code</p>
          </li>
          <li>
            <strong>Scansiona il QR code</strong>
            <p class="text-gray-700 mt-1">Con la tua app Authenticator</p>
          </li>
          <li>
            <strong>Inserisci il codice</strong>
            <p class="text-gray-700 mt-1">Il codice a 6 cifre generato dall'app</p>
          </li>
          <li>
            <strong>Salva i codici di backup</strong>
            <p class="text-gray-700 mt-1">Riceverai 10 codici di emergenza. Salvali in un posto sicuro!</p>
          </li>
        </ol>

        <div class="bg-blue-50 p-6 rounded-xl mb-6">
          <h5 class="font-bold text-gray-900 mb-3">📱 Login con 2FA Attivo</h5>
          <p class="text-gray-700 mb-2">Una volta attivato, ad ogni login dovrai:</p>
          <ol class="list-decimal pl-5 space-y-1 text-gray-700">
            <li>Inserire email e password (come sempre)</li>
            <li>Aprire l'app Authenticator</li>
            <li>Inserire il codice a 6 cifre generato</li>
          </ol>
          <p class="text-sm text-gray-600 mt-3">Il codice cambia ogni 30 secondi per massima sicurezza.</p>
        </div>

        <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
          <p class="text-sm text-gray-700"><strong>⚠️ Importante:</strong> Se perdi l'accesso all'app Authenticator e non hai i codici di backup, dovrai contattare il supporto per recuperare l'account (processo richiede 7 giorni per sicurezza).</p>
        </div>
      `
        }
    };

    // eslint-disable-next-line no-unused-vars
    const currentSection = sections.find(s => s.id === activeSection);
    const currentDoc = documentation[activeSection] || documentation['intro'];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Book className="w-12 h-12" />
                        <h1 className="text-4xl md:text-5xl font-black">
                            Documentazione
                        </h1>
                    </div>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Guide complete, tutorial e riferimenti per utilizzare al meglio Tornese Foundation
                    </p>

                    {/* Search */}
                    <div className="mt-8 max-w-2xl">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Cerca nella documentazione..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl text-gray-900 outline-none shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-2">
                            {sections.map((section) => (
                                <div key={section.id}>
                                    <button
                                        onClick={() => setActiveSection(section.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeSection === section.id
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        <section.icon className="w-5 h-5" />
                                        {section.title}
                                    </button>

                                    {activeSection === section.id && (
                                        <div className="ml-4 mt-2 space-y-1">
                                            {section.subsections.map((sub) => (
                                                <button
                                                    key={sub.id}
                                                    onClick={() => setActiveSection(sub.id)}
                                                    className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    {sub.title}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Quick Links */}
                            <div className="pt-6 mt-6 border-t border-gray-200">
                                <h3 className="text-sm font-bold text-gray-500 uppercase mb-3">Link Utili</h3>
                                <div className="space-y-2">
                                    <a href="/api-developer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
                                        <Code className="w-4 h-4" />
                                        API Developer
                                    </a>
                                    <a href="/faq" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
                                        <ExternalLink className="w-4 h-4" />
                                        FAQ
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
                                        <Download className="w-4 h-4" />
                                        Scarica PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3">
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                            <div
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: currentDoc.content }}
                            />

                            {/* Feedback */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h4 className="text-lg font-bold text-gray-900 mb-4">Questa guida è stata utile?</h4>
                                <div className="flex gap-3">
                                    <button className="px-6 py-3 bg-green-100 text-green-700 rounded-xl font-semibold hover:bg-green-200 transition-colors flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        Sì, utile
                                    </button>
                                    <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                                        No, migliora
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="mt-8 flex justify-between items-center">
                            <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                                <ChevronRight className="w-5 h-5 rotate-180" />
                                Precedente
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                Successivo
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Documentation;