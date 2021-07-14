document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector(".beer-button");
  const randomBeer = document.querySelector(".random-beer");
  const displayDescription = document.querySelector(".description");
    console.log(startBtn)
    console.log(randomBeer)
    console.log(displayDescription)
  
  // On click we invoke the data
  function getData(e) {
    //e.preventDefault(); // stop the window from closing

    // Fetching data
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(response => {
        return response.json()
      })
      .then(data => {
        // Returning data
        const name = data[0].name
        const description = data[0].description
        const {volume} = data[0]
        const volumeValue = volume.value
        const volumeUnit = volume.unit

        randomBeer.innerHTML = name + " " + volumeValue + volumeUnit
        displayDescription.innerHTML = description
      })
  }

  startBtn.addEventListener('click', getData)

})