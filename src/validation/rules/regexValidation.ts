export const isRegexValid = (text: string, regex: RegExp, isCaseSensitive: boolean): boolean => {
    return isCaseSensitive ? regex.test(text) : regex.test(text.toLowerCase());
}