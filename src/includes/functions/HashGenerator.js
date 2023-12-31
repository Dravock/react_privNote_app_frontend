import CryptoJS from 'crypto-js'

const encryptMessage = async (userMessage = "", secret_key = "") => {
    try {
        const ciphertext = CryptoJS.AES.encrypt(userMessage, secret_key).toString();
        return ciphertext
    } catch (error) {
        return console.log(error);
    }
};

const decryptMessage = async (ciphertext = "", secret_key) => {
    try {
        const bytes = CryptoJS.AES.decrypt(ciphertext, secret_key);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText
    } catch (error) {
        return console.log("!", error);
    }
}



export default {
    decryptMessage,
    encryptMessage
};