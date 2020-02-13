import { BikeFinderApi } from './../src/bike-finder-api.js'; 

  describe('BikeFinderApi', () => {
    let bikeFinder;

    beforeEach(function() {
      bikeFinder = new BikeFinderApi();
    });
    
    test('should show the return of the API', () => {
      bikeFinder.getBikeByColor();
      expect(bikeFinder).toBe(true);
    })

  });
  

