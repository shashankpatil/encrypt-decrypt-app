import * as CryptoJS from 'crypto-js';

export class AesAlgorithm {

    secretKey: string;
    constructor() {
        this.secretKey = "aescbc128bitspkcs7";

    }

    encrypt(plainText: string, secretKey:  string): string {
      var key = CryptoJS.enc.Hex.parse(this.get16ByteHexFromString(secretKey));
      var iv = CryptoJS.enc.Hex.parse(this.get16ByteHexFromString(secretKey));
        return CryptoJS.AES.encrypt(plainText.trim(), key, { iv: iv }).toString();
    }

    decrypt(plainText: string, secretKey:  string): string {
      var key = CryptoJS.enc.Hex.parse(this.get16ByteHexFromString(secretKey));
      var iv = CryptoJS.enc.Hex.parse(this.get16ByteHexFromString(secretKey));
        return CryptoJS.AES.decrypt(plainText.trim(), key, { iv: iv }).toString(CryptoJS.enc.Utf8);
    }

    get16ByteHexFromString(tmp: string): string {
        var str = '',
            i = 0,
            tmp_len = tmp.length,
            c;

        for (; i < tmp_len; i += 1) {
            c = tmp.charCodeAt(i);
            str += this.d2h(c);
        }

        for (i = 0; i < 16 - tmp_len; i += 1) {
            str += "00";
        }

        return str;
    }

    d2h(d) {
        return d.toString(16);
    }
}
