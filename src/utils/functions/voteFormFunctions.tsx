export const validateDni = (dni: string) => {
    //Se separan los números de la letra
    const letraDNI = dni.substring(8, 9).toUpperCase();
    const numDNI = parseInt(dni.substring(0, 8));

    //Se calcula la letra correspondiente al número
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    const letraCorrecta = letras[numDNI % 23];

    return letraDNI === letraCorrecta
} 