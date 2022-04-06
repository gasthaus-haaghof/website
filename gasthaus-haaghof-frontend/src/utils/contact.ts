const inputFromUser = (name: string, mail: string, reason: string): [string?, string?, string?] => {
    return [
        validName(name) ? undefined : "Bitte passen Sie Ihren Namen an.",
        validMail(mail) ? undefined : "Bitte geben Sie eine gültige Email-Adresse ein.",
        validReason(reason) ? undefined : "Bitte geben Sie einen Grund an (max. 2048 Zeichen).",
    ];
};

const validName = (name: string): boolean => {
    return name.length >= 2 && name.length <= 32 &&
        name.length === name.match(/[a-zA-ZÄÖÜäöüß ]{2,32}/)![0].length;
};

const validMail = (mail: string): boolean => {
    const validEmail = mail.toLowerCase().match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/
    );

    return !!validEmail;
};

const validReason = (reason: string): boolean => {
    return reason.length >= 20 && reason.length <= 2048;
};

export const Validate = {
    inputFromUser,
};
