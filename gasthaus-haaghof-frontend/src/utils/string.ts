const substr = (text: string, length: number): string => {
    return `${text.substring(0, length)}${text.length > length ? "..." : ""}`;
};

export const StringUtils = {
    substr,
}
