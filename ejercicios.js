// Calculate the sum of all resistors connected in series.
// Examples:
// - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
// - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

// Note: This approach uses the absolute value of each resistance to ensure all values are positive.

   

    for (let index = 0; index < resistanceValues.length; index++) {
        // Contenido
        
        const resistance = resistanceValues[index];
        if (resistance < 0) {
            resistance = resistance * -1;
        }

        sum = sum + resistance;
    }

    console.log (resistenceValues([-1,5,6,3]));
    





    // 2

    // const array = [];
    // const half = number / 2;
    // array.push(half); // array[0] = half
    // array.push(half); // array[1] = half

    // return array;









//     Display online status for a list of users.
 

// Example:
// - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.


 

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