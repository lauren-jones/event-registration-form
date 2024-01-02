export const isRequiredValid = (text: string): boolean => text.length > 0;

export const isMaxLengthValid = (text: string, maxLength: number): boolean => text.length <= maxLength;

export const isMinLengthValid = (text: string, minLength: number): boolean => text.length >= minLength;