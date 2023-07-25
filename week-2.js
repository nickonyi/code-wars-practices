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