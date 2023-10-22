// INDEX.JS for W5 "Cats as a service"

//  request logic ..

const fetchBreedDescription = (breedName, callback) => {
  request(BASE_URL + breedName, (error, response, body) => {
  // Check for request errors
    if (error) {
      callback(`Failed to fetch breed details: ${error}`, null);
      return;
    }

    const data = JSON.parse(body);

    // Check if the breed is not found
    if (data.length === 0) {
      callback(`Could not find breed: ${breedName}`, null);
      return;
    }

    // Extract and return the breed description
    const breed = data[0];
    callback(null, breed.description);
  });
};