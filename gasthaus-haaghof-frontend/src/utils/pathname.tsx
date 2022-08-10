const toSite = (pathname: string): string => {
    switch (pathname) {
        case "home": return "Startseite";
        case "menu": return "Speisekarte";
        case "about": return "Über uns";
        case "news": return "Aktuelles";
        case "contact": return "Kontakt";
        default: return "Wo sind Sie gelandet?";
    }
};

export const Path = {
    toSite,
}
