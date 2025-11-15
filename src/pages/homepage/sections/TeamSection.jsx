import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';
import { team } from '../../../data/team';

const TeamSection = () => {
    return (
        <section id="team" className="py-20 px-4 bg-linear-to-br from-gray-50 to-blue-50/30 reveal reveal-delay-1">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6 border border-blue-200">
                        <Award className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">
                            Il Nostro Team
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Le Menti Dietro Tornese
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Un team di innovatori, tecnologi e visionari uniti dalla missione di rendere la sostenibilità accessibile e vantaggiosa per tutti.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 reveal reveal-delay-${(index % 3) + 1}`}
                        >

                            {/* Content (No Image Version) */}
                            <div className="p-6 text-center flex flex-col h-full justify-between">
                                {/* Name */}
                                <h3 className="text-xl font-black text-gray-900 mb-1">
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p className="text-blue-600 font-bold text-sm mb-4">
                                    {member.role}
                                </p>

                                {/* Bio */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {member.bio}
                                </p>

                                {/* Social Links */}
                                <div className="flex justify-center space-x-3 mb-6">
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}

                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap justify-center gap-2">
                                    {member.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-500 to-cyan-500 opacity-10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-300" />
                        </div>
                    ))}
                </div>

                {/* CTA - Partners & Investors */}
                <div className="mt-16 text-center reveal reveal-delay-2">
                    <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                            Diventa Partner o Investitore
                        </h3>
                        <p className="text-blue-50 text-lg mb-6 max-w-2xl mx-auto">
                            Siamo aperti a collaborazioni strategiche con aziende, fondazioni e investitori
                            che condividono la nostra missione di accelerare la transizione verso un futuro
                            più sostenibile tramite tecnologie innovative.
                        </p>
                        <a
                            href="mailto:business.tornese@protonmail.com"
                            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all transform hover:scale-105"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Contattaci per Collaborare
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TeamSection;