import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Calendar, MapPin, ArrowRight, Users } from "lucide-react";

// Your carousel images
const CAROUSEL_IMAGES = [pic1, pic2, pic3, pic4];
const INTERVAL_MS = 3500;

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // ✅ Preload images to avoid lag
    useEffect(() => {
        CAROUSEL_IMAGES.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    // ✅ Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, INTERVAL_MS);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cmx-blue/10 text-cmx-blue rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            <Zap size={14} /> The Premier Community Event in Africa
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6">
                            BEYOND THE <br />
                            <span className="text-cmx-blue">HORIZON</span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                            Redefining the strategic importance of community for businesses,
                            entrepreneurs, and tech talent in the African ecosystem.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <div className="flex items-center gap-3 bg-cmx-gray px-5 py-3 rounded-2xl">
                                <Calendar className="text-cmx-blue" size={20} />
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">
                                        Date
                                    </p>
                                    <p className="text-sm font-bold">October 26, 2024</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-cmx-gray px-5 py-3 rounded-2xl">
                                <MapPin className="text-cmx-blue" size={20} />
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">
                                        Location
                                    </p>
                                    <p className="text-sm font-bold">Ibadan, Nigeria</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn-primary flex items-center justify-center gap-2">
                                Get Your Ticket <ArrowRight size={18} />
                            </button>

                            <button
                                className="btn-outline"
                                onClick={() =>
                                    document
                                        .getElementById("structure")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                View Schedule
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT CAROUSEL */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 aspect-[4/3]">

                            {/* ✅ All images stacked, only active image animates */}
                            {CAROUSEL_IMAGES.map((src, i) => (
                                <motion.img
                                    key={i}
                                    src={src}
                                    alt={`CMX Summit ${i + 1}`}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover absolute inset-0"
                                    initial={false} // keep mounted, do not remount
                                    animate={{
                                        opacity: i === currentIndex ? 1 : 0,
                                        scale: i === currentIndex ? 1 : 1.05, // pop effect
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    style={{ zIndex: i === currentIndex ? 2 : 1 }}
                                />
                            ))}
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cmx-orange/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-cmx-blue/20 rounded-full blur-3xl" />

                        {/* Floating badge */}
                        <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20 animate-bounce">
                            <Users size={40} className="text-cmx-blue" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;