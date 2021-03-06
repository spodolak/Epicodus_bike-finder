import { BikeFinderApi } from "./bike-finder-api";
import $ from 'jquery';
$;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let getElements = (result, bikeColorInput) => {
  console.log(result.bikes[0].frame_colors);
  console.log(result.bikes.length)
  for (var i = 1; i <= result.bikes.length; i +=1) {
    let bikeSearch = result.bikes[i].frame_colors[0];
    console.log(bikeColorInput);
    if (bikeColorInput === bikeSearch) {      
      console.log(bikeSearch);
      $("#result").append(`${result.bikes[i].title}`);
      $("#result").append(`<img src="${result.bikes[i].thumb}">`);
      $("#result").append(`${result.bikes[i].frame_colors}`);
    }
  }
}

$(document).ready(function()  {

  $("form#bike-type").submit(function(event)  {
    event.preventDefault();
    let bikeColorInput = $("select#color").val();
    (async () => {
      let bikeFinderApi = new BikeFinderApi();
      const response = await bikeFinderApi.getBike();
      getElements(response, bikeColorInput);
    })();

  });
});


