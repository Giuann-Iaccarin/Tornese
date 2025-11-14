import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white flex items-center justify-center px-4">
            <div className="text-center">
                {/* 404 Text */}
                <div className="mb-8">
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-600 mb-4">
                        404
                    </h1>
                    <p className="text-3xl md:text-4xl font-black text-white mb-4">
                        Pagina Non Trovata
                    </p>
                    <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
                        Oops! Sembra che la pagina che stai cercando non esista o sia stata spostata.
                    </p>
                </div>

                {/* Illustration */}
                <div className="mb-12">
                    <div className="inline-block">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-linear-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center border-2 border-blue-500/30">
                            <Home className="w-16 h-16 md:w-24 md:h-24 text-blue-400 opacity-50" />
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                        <Home className="w-5 h-5" />
                        Torna alla Home
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 border border-slate-600"
                    >
                        Torna Indietro
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Additional Info */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <p className="text-gray-400 text-sm mb-4">Hai bisogno di aiuto?</p>
                    <a
                        href="mailto:support@tornesefoundation.org"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Contatta il nostro team di supporto
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
