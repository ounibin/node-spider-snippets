const AES = require("crypto-js/aes")
const SHA256 = require("crypto-js/sha256")
const Base64 = require("crypto-js/enc-base64")
var CryptoJS = require("crypto-js")


const CRYPTO_KEY = "1g301m1e"
const CRYPTO_IV = "KzihpvgmeIoqvHszYEFGuomVk5S1iI2cBRrXCGRAHsB1w+bWrxZhdq/Cs1qoV3WJ1pqjiLKjenbMPVmzcHwlfQ=="

const ciphertext = "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"


const key = CryptoJS.enc.Utf8.parse(CRYPTO_KEY)
const iv = CryptoJS.enc.Utf8.parse(CRYPTO_IV)

console.log(`ny----key: `, key)
console.log(`ny----iv: `, iv)

// console.log(`ny----CryptoJS.mode: `, CryptoJS.mode)

// Decrypt
try {
  var bytes = CryptoJS.AES.decrypt(ciphertext, key, {
    iv
  })
  var originalText = bytes.toString(CryptoJS.enc.Utf8)
  console.log('originalText====', originalText)
} catch (error) {
  console.log(error.message)
}


// Decrypt
// var bytes  = CryptoJS.SHA256.decrypt(ciphertext, secretKey)
// var originalText = bytes.toString(CryptoJS.enc.Utf8)
// console.log('originalText====', originalText)