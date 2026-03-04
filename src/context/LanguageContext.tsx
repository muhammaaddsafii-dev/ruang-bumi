"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import translationsDataRaw from "./translations.json";

type Language = "id" | "en";

type TranslationsData = {
    id: Record<string, string>;
    en: Record<string, string>;
};

const translationsData = translationsDataRaw as TranslationsData;

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("id");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language;
        if (saved === "id" || saved === "en") {
            setLanguage(saved);
        }
        setMounted(true);
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const nextLang = prev === "id" ? "en" : "id";
            localStorage.setItem("language", nextLang);
            return nextLang;
        });
    };

    const t = (text: string) => {
        if (!mounted) return translationsData.id[text] || text;
        return translationsData[language][text] || text;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
