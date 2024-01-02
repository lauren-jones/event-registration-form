import { validationResult } from "../../types/validationResult";
import { EmailRegex, PhoneNumberRegex } from "../rules/constants";
import { isMaxLengthValid, isMinLengthValid, isRequiredValid } from "../rules/lengthValidation";
import { isRegexValid } from "../rules/regexValidation";
import { validate } from "./validate";

export const validateName = (name: string): validationResult => {
 return validate([
    {
        rule: isRequiredValid(name),
        message: "Enter your name",
    },
    {
        rule: isMaxLengthValid(name, 30),
        message: "Name must be 30 characters or less",
    },
    {
        rule: isMinLengthValid(name, 2),
        message: "Name must be at least 2 characters",
    },
 ])
}

export const validateEmail = (email: string): validationResult => {
    return validate([
        {
            rule: isRequiredValid(email),
            message: "Enter your email"
        },
        {
            rule: isRegexValid(email, EmailRegex, false),
            message: "Not a valid email",
        }
    ])
}

export const validatePhone = (phone: string): validationResult => {
    return validate([
        {
            rule: isRequiredValid(phone),
            message: "Enter your phone number"
        },
        {
            rule: isRegexValid(phone, PhoneNumberRegex, false),
            message: "Not a valid phone number"
        }
    ])
}