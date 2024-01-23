const nameRegex = /^[A-Za-z\s']+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const phoneRegex = /^[1-9]\d{3,11}$/;

export function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}

export function isNameValid(name) {
    return nameRegex.test(name)
}

export function isPhoneValid(phone) {
    return phoneRegex.test(phone)
}

export function isEmailValid(email) {
    return emailRegex.test(email)
}
