let sum = 0;  // Acumulador

    for (let index = 0; index < resistanceValues.length; index++) {
        // Contenido
        let resistance = resistanceValues[index];
        if (resistance < 0) {
            resistance = resistance * (-1);
        }

        sum = sum + resistance;
    }



    // 2

    const array = [];
    const half = number / 2;
    array.push(half); // array[0] = half
    array.push(half); // array[1] = half

    return array;

 // let index = 10;
    // index++;
    // // index++ -> Operador de incremento
    // index = index + 1;  // 11
    // index--;
    // // index-- -> Operador de decremento
    // index = index - 1;  // 10

    // index = index + 2;
    // index += 2;
    // index = index + 5;
    // index += 5;
    // index = index * 5;
    // index *= 5
    // index = index / 3;
    // index /= 3;