function caesarsCipher(ROT13 ) {
    let encoded = '';

    for (let i=0; i < ROT13.length; i++) {
    let asciiNumber = ROT13[i].charCodeAt();
        if (asciiNumber >= 65 && asciiNumber <= 77) {
            encoded += String.fromCharCode(asciiNumber + 13);
        } else if (asciiNumber >= 78 && asciiNumber <= 90) {
            encoded += String.fromCharCode(asciiNumber - 13); 
        } else {
            encoded += ROT13[i];
        }
    }

    return encoded;
}