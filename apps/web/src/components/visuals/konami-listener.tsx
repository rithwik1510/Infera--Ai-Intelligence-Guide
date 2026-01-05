"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];

export function KonamiListener() {
    const [keys, setKeys] = useState<string[]>([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setKeys((prev) => {
                const next = [...prev, e.key];
                if (next.length > KONAMI_CODE.length) {
                    next.shift();
                }
                return next;
            });
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    useEffect(() => {
        if (keys.join(",") === KONAMI_CODE.join(",")) {
            setActive((a) => !a);
            setKeys([]);

            // Toggle class on body for global CSS effects
            document.body.classList.toggle("party-mode");
        }
    }, [keys]);

    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    className="fixed bottom-8 right-8 z-50 pointer-events-none"
                >
                    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[2px] rounded-2xl shadow-2xl">
                        <div className="bg-black/90 px-6 py-4 rounded-2xl backdrop-blur-md">
                            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-pulse">
                                🎉 PARTY MODE ACTIVATED 🎉
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
