export class BikeFinderApi {
  async getBike() {
    try {
      let response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=30&location=IP&distance=10&stolenness=stolen`)
      if (response.status === 200 && response.ok === true) {
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      } else {
        return false;
        }
      } catch(error) {
      console.error(error.message);
      }
    }
  }

  
// export function getBike() {
//   try {
//     let promise = new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=30&location=IP&distance=10&stolenness=stolen`;
//       request.onload = function() {
//         if(this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//     promise.then(function(response) {
//       let result = JSON.parse(response);
//       let result2 = JSON.stringify(result)
//       console.log(result2);
//       return result2;
//     });
//   } catch(error) {
//     console.error(error.message);
//     }
//   }