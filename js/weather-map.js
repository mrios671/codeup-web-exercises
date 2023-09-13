"use strict";

/*TODO
* 1) when you type in a location and hit search, update the current weather/location
*
* 2) when you hit search, it should also update the five day forecast to that location as well
*
* 3) depending on where you input into the search bar, update the map to auto locate that location with the marker at the exact point that you searched for.
*
* //whenever you drag the marker to another location, t should also display the weather information for where it is placed
* */

//CURRENT WEATHER
const OPEN_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`
//FIVE DAY API
const FIVE_DAY_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=${OPEN_WEATHER_API}`

let long = ''
let lat = ''
$.get(FIVE_DAY_FORECAST_URL + `&q=San Antonio,TX,US`)
    .done((data) => {
        console.log(data)

        //assigning the lng and lat to a variable so I could call it in other areas
        long = `${data.city.coord.lon}`
        lat = `${data.city.coord.lat}`

        //inserts the map
        mapboxgl.accessToken = mapboxApiToken;
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            zoom: 10, // starting zoom
            center: [long, lat] // [lng, lat]
        });

        //Geocoder based on Search bar
        const customData = {
            'features': [],
            'type': 'FeatureCollection'
        };

        function forwardGeocoder(query) {
            console.log("query:" + query)
            const matchingFeatures = [];
            for (const feature of customData.features) {
                // Handle queries with different capitalization
                // than the source data by calling toLowerCase().
                if (
                    feature.properties.title
                        .toLowerCase()
                        .includes(query.toLowerCase())
                ) {
                    feature['place_name'] = `${feature.properties.title}`;
                    feature['center'] = feature.geometry.coordinates;
                    feature['place_type'] = ['park'];
                    matchingFeatures.push(feature);
                }
            }
            return matchingFeatures;
        }


//creates a draggable marker on the map
//         let marker = new mapboxgl.Marker({
//             draggable: true
//         })
//             .setLngLat([long, lat])
//             .addTo(map);

        map.on('click',function(){
            let marker = new mapboxgl.Marker({
                draggable:true
            })
                .setLngLat([long, lat])
                .addTo(map);

        })
// This is the SearchBox
        map.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                localGeocoder: forwardGeocoder,
                zoom: 14,
                placeholder: 'Search Map',
                mapboxgl: mapboxgl,
            })
        );
//  let geocoder = map.addControl(new MapboxGeocoder({
//      accessToken: mapboxgl.accessToken,
//                 localGeocoder: forwardGeocoder,
//                 zoom: 14,
//                 placeholder: 'Search Map',
//                 mapboxgl: mapboxgl,
//                 marker: false
//  }))
//
//         geocoder.on('result', function(e){
//             let marker= new mapboxgl.Marker({
//                 draggable:true,
//                 color: "pink"
//             }) .setLngLat(e.result.center)
//                 .addTo(map)
//         })


        //adds a zoom in and out button on the top right of the screen
        map.addControl(new mapboxgl.NavigationControl());

        //declared an empty html string so I can add content and call it again with the added info outside of the loop
        let html = ''
        $.get(OPEN_WEATHER_URL + `q=San Antonio,TX,US&appid=${OPEN_WEATHER_API}&units=imperial`)
            .done(function (data) {
                console.log(data);

                let html = `
               <div>City searched: ${data.name}</div>
                <div>Current Temp: ${data.main.temp.toFixed(0)}</div>
                <div>Current Humidity: ${data.main.humidity}</div>
                <div>Current Conditions: ${data.weather[0].description}</div>
                `
                console.log(html);

                $("#currentForecast").html(html);
            })
                for (let i = 0; i <= data.list.length; i += 7) {
                    html += `<div> 
                    <h2>Today's Temperature</h2>
                    <h3>${data.list[i].main.temp}&deg</h3>
<!--                    <div>${data.list[i].main.icon}</div>-->
                    <div>${data.list[i].main.temp_max}&deg F/${data.list[i].main.temp_min}&deg F</div>
                    <div>${data.list[i].weather[0].description}</div>
                    <div>Humidity: ${data.list[i].main.humidity}</div>
                    <div>Wind: ${data.list[i].wind.speed.toFixed(0)} mph</div>
                    </div>`;
            console.log(html)
        }
        //puts the new information into the browser
        $("#fiveDayForecast").html(html)
    })


//If you want to add the icons the URLs for OpenWeatherMap's icons are formatted like: http://openweathermap.org/img/w/[icon].png where [icon] comes from the API response.
$("#button").on("click", function () {
    geocode($("#mySearch").val(), mapboxApiToken).then(function (result) {

        $.get(FIVE_DAY_FORECAST_URL + `&lat=${result[1]}&lon=${result[0]}`)
            .done((data) => {
                console.log(data)

                //assigning the lng and lat to a variable so I could call it in other areas
                long = `${data.city.coord.lon}`
                lat = `${data.city.coord.lat}`


                $.get(OPEN_WEATHER_URL + `lat=${result[1]}&lon=${result[0]}&appid=${OPEN_WEATHER_API}&units=imperial`)
                    .done(function (data) {
                        console.log(data);

                        let html = `
               <div>City searched: ${data.name}</div>
                <div>Current Temp: ${data.main.temp.toFixed(0)}</div>
                <div>Current Humidity: ${data.main.humidity}</div>
                <div>Current Conditions: ${data.weather[0].description}</div>
                `


                        console.log(html);

                        $("#currentForecast").html(html);


                    })
                let html=''
                for (let i = 0; i <= data.list.length; i += 7) {
                    html += `<div>
                    <h2>Today's Temperature</h2>
                    <h3>${data.list[i].main.temp}&deg</h3>
<!--                    <div>${data.list[i].main.icon}</div>-->
                    <div>${data.list[i].main.temp_max}&deg F/${data.list[i].main.temp_min}&deg F</div>
                    <div>${data.list[i].weather[0].description}</div>
                    <div>Humidity: ${data.list[i].main.humidity}</div>
                    <div>Wind: ${data.list[i].wind.speed.toFixed(0)} mph</div>
                    </div>`;
                    console.log(html)
                }
                $("#fiveDayForecast").html(html)
            })

    })
})

