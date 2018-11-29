{
    "use strict";

    // Add listener 
    document.getElementById("helloButton").addEventListener( "click", function() {
        alert("Hello World!");
        const myTextNode = document.createTextNode("Some new words.");
        // Append “Some new words.” to the page.
        document.body.appendChild(myTextNode); 
    });

    document.getElementById("locationButton").addEventListener( "click", function() {
        getLocation();
    });

    const location = document.querySelector("div#geoLocation p#location");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCurrentPositionCallback);
        } else {
            location.innerHTML = "Geolocation is not supported in your browser!";
        } 
    }

    function getCurrentPositionCallback(position) {
        location.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude +
        "<br>Speed: " + position.coords.speed +
        "<br>Altitude: " + position.coords.altitude +
        "<br>Accuracy: " + position.coords.accuracy;
    }

};