/**
 * Метод для дешифровки строки, зашифрованной с помощью ROT13
 * @param str - зашифрована строка, только заглавные буквы латинского алфавита
 * @returns {*} - расшифрован строка
 */
export function decodeROT13(str) {
    return str.replace(/[A-Z]/g, char => {
        const code = char.charCodeAt(0);
        return String.fromCharCode(((code - 65 + 13) % 26) + 65)
    })
}

