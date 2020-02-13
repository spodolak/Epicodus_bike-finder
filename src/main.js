import { BikeFinderApi } from "./bike-finder-api";
import $ from 'jquery';
$;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function()  {

  $("form#bike-type").submit(function(event)  {
    event.preventDefault();
    let bikeColor = $(".dropdown-menu").val();
    console.log(bikeColor);
    // findBike(bikeColor);
  });

  (async () => {
    let bikeFinderApi = new BikeFinderApi();
    const response = await bikeFinderApi.getBike();
    getElements(response);
  })();

  function getElements(response) {
    console.log(response.bikes[0, 5].frame_colors);
    $("body").append(`${response.bikes[0].frame_colors}`);
  }
});