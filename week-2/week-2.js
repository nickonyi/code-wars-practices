//Day one
function removeEveryOther(arr) {
    //your code here
    return arr.filter((_, index) => index === 0 || index % 2 === 0);

}



function greet(language) {
    //create the database
    const database = {
            english: 'Welcome',
            czech: 'Vitejte',
            danish: 'Velkomst',
            dutch: 'Welkom',
            estonian: 'Tere tulemast',
            finnish: 'Tervetuloa',
            flemish: 'Welgekomen',
            french: 'Bienvenue',
            german: 'Willkommen',
            irish: 'Failte',
            italian: 'Benvenuto',
            latvian: 'Gaidits',
            lithuanian: 'Laukiamas',
            polish: 'Witamy',
            spanish: 'Bienvenido',
            swedish: 'Valkommen',
            welsh: 'Croeso'
        }
        //loop over the database and compare values
    for (const lang in database) {
        if (lang === language) {
            return database[lang];
        }
    }
    return "Your function should have returned 'Welcome'. Try again.";
}

function rot13(message) {
    //helper function to apply rot 13 cypher to a single character
    function rotateString(char) {
        const code = char.charCodeAt(0);
        //check if the character is uppercase or lowercase
        if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
            //Determine the base ascii code
            const base = code >= 97 ? 97 : 65;
            //Perform the rot 13 and make sure it wraps around each character
            return String.fromCharCode((code - base + 13) % 26 + base);
        }
        //return the character as it is if not a letter
        return char;
    }

    //Use the helper function to cypher each character in the string
    return message.split("").map(rotateString).join("");
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function abbrevName(name) {

    // code away
    //get the two names separately
    const [first, last] = name.split(" ");
    //get the first letters from the first and last name and capitalize them
    const firstN = first[0].toUpperCase();
    const lastN = last[0].toUpperCase();


    //return the abbrevited form
    return firstN + "." + lastN;


}

function likes(names) {
    // TODO
    if (names.length == 0) {
        return "no one likes this";
    } else if (names.length <= 3) {
        if (names.length == 1) {
            return `${names[0]} likes this`;
        } else if (names.length == 2) {
            return `${names[0]} and ${names[1]} like this`;
        } else if (names.length == 3) {
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        }
    } else if (names.length > 3) {
        const count = names.length - 2;
        return `${names[0]}, ${names[1]} and ${count} others likes this`;
    }
}


const triangle = [
    [1],
    [3, 5],
    [7, 9, 11],
    [13, 15, 17, 19],
    [21, 23, 25, 27, 29]
];

function rowSumOddNumbers(n) {
    // TODO
    return n * (n ** 2);
}


function sumOfNthRow(n) {
    return n * (n ** 2);
}


function isTriangle(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        return true;
    }
    return false;
}

function correct(string) {
    // your code here
    //looop over the array
    //replace the characters with the correct character
    return string.split("").map(char => {
        if (char == 5) {
            return char.replace('5', 'S');
        } else if (char == 0) {
            return char.replace('0', 'O');
        } else if (char == 1) {
            return char.replace('1', 'I');
        }
        return char;
    }).join("");
}