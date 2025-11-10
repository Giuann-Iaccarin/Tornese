import React, { useState } from 'react';
import { Newspaper, Award, ExternalLink, ChevronLeft, ChevronRight, Trophy, Star } from 'lucide-react';
import { mediaArticles, awards } from '../../../data/media';

const MediaSection = () => {
    const icons = { Award, Trophy, Star };

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % mediaArticles.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + mediaArticles.length) % mediaArticles.length);
    };

    return (
        <section id="media" className="py-20 px-4 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
                        <Newspaper className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                            Media & Riconoscimenti
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Parlano di Noi
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        La stampa nazionale e internazionale racconta il nostro impatto sulla sostenibilità urbana e l'innovazione blockchain.
                    </p>
                </div>

                {/* Awards Section */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Premi e Riconoscimenti
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {awards.map((award, index) => {
                            const Icon = icons[award.icon];

                            return (
                                <div
                                    key={index}
                                    className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden group hover:shadow-xl transition-all"
                                >
                                    {/* Background Gradient */}
                                    <div
                                        className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${award.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}
                                    />

                                    {/* Icon */}
                                    <div
                                        className={`w-16 h-16 bg-linear-to-br ${award.color} rounded-xl flex items-center justify-center mb-4 relative z-10`}
                                    >
                                        {Icon && <Icon className="w-8 h-8 text-white" />}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full mb-3">
                                            {award.year}
                                        </span>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            {award.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {award.category}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Articles Carousel */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Rassegna Stampa
                    </h3>

                    <div className="relative">
                        {/* Carousel Container */}
                        <div className="overflow-hidden rounded-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                            >
                                {mediaArticles.map((article, index) => (
                                    <div
                                        key={index}
                                        className="w-full shrink-0 px-2"
                                    >
                                        <div className="bg-linear-to-br from-gray-50 to-emerald-50/30 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-slate-700 shadow-lg">
                                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                                {/* Logo/Icon */}
                                                <div className="shrink-0">
                                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-5xl md:text-6xl shadow-lg border border-gray-200 dark:border-slate-700">
                                                        {article.logo}
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 text-center md:text-left">
                                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                                        <span className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">
                                                            {article.outlet}
                                                        </span>
                                                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                                                            {article.date}
                                                        </span>
                                                    </div>

                                                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                                        {article.title}
                                                    </h4>

                                                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                                                        {article.excerpt}
                                                    </p>

                                                    <a
                                                        href={article.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-emerald-500/50"
                                                    >
                                                        Leggi l'articolo
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors z-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors z-10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {mediaArticles.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === activeSlide
                                        ? 'bg-emerald-500 w-8'
                                        : 'bg-gray-300 dark:bg-slate-600 hover:bg-emerald-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Press Kit CTA */}
                <div className="text-center bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 md:p-12 shadow-xl">
                    <Newspaper className="w-16 h-16 text-white mx-auto mb-6" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Sei un giornalista?
                    </h3>
                    <p className="text-emerald-50 text-lg mb-6 max-w-2xl mx-auto">
                        Scarica il nostro press kit completo con loghi, immagini ad alta risoluzione, comunicati stampa e materiale informativo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-white/30 transition-all transform hover:scale-105">
                            Scarica Press Kit
                        </button>
                        <a
                            href="mailto:press@tornesefoundation.org"
                            className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold border-2 border-white hover:bg-emerald-700 transition-all"
                        >
                            Contatta Ufficio Stampa
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MediaSection;