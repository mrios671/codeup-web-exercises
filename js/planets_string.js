(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);
    let planetsArray= planetsString.split('|');


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let planets = planetsArray.join("<br>");
    console.log(planets);

    let planetList = "<ul>";

    for (let i = 0; i < planetsArray.length; i++) {
        planetList += `<li>${planetsArray}</li>`
    }
    planetList += "<ul>";

    console.log(planetList);

})();