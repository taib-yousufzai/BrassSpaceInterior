"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const CLIENTS = [
    { name: "KR MANGLAM", color: "#d32f2f", initials: "KR", logo: "/images/clients/k_r_mangalam.png" },
    { name: "BURGER KING", color: "#f57c00", initials: "BK", logo: "/images/clients/burger_king.png" },
    { name: "CAMBRIDGE", color: "#1976d2", initials: "CB", logo: "/images/clients/cambridge.png" },
    { name: "MCDONALD'S", color: "#ffc107", initials: "MC", logo: "/images/clients/mcdonalds.png" },
    { name: "MAXFORT SCHOOL", color: "#388e3c", initials: "MF", logo: "/images/clients/maxfort_school.png" },
    { name: "Starbucks", color: "#00704a", initials: "SB", logo: "/images/clients/starbucks.png" },
    { name: "GD GOENKA", color: "#c2185b", initials: "GD", logo: "/images/clients/gd_goenka.png" },
    { name: "APOLLO", color: "#0288d1", initials: "AP", logo: "/images/clients/apollo.png" },
    { name: "DPS", color: "#7b1fa2", initials: "DP", logo: null }
];

export default function TrustedByMarquee() {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                    Trusted <span className="text-[#daa520]">By</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Honored to partner with industry leaders
                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {CLIENTS.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl border-2 border-transparent transition-all duration-300 group"
                            style={{ borderColor: 'transparent' }}
                        >
                            {/* Floating Animation Wrapper */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: Math.random() * 2
                                }}
                                className="flex flex-col items-center w-full"
                            >
                                {/* Stylized Initial/Logo Mark */}
                                <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                                    {client.logo ? (
                                        <div className="relative w-full h-full transition-all duration-300 filter grayscale group-hover:grayscale-0">
                                            <Image
                                                src={client.logo}
                                                alt={client.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold bg-opacity-10 transition-all duration-300 group-hover:bg-opacity-20"
                                            style={{ backgroundColor: `${client.color}20`, color: client.color }}
                                        >
                                            {client.initials}
                                        </div>
                                    )}
                                </div>

                                {/* Brand Name */}
                                <h3
                                    className="text-xl md:text-2xl font-black text-gray-400 group-hover:text-gray-900 transition-colors uppercase tracking-tight"
                                    style={{ transition: 'color 0.3s' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = client.color}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                                >
                                    {client.name}
                                </h3>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
