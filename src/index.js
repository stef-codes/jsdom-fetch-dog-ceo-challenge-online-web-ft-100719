document.addEventListener("DOMContentLoaded", function() {
    console.log('%c HI-C', 'color: firebrick');
    fetchDogs()
  })

  function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(dogs => renderDogs(dogs));
  }

  function renderDogs(dogs) {
    const dog_container = document.getElementById('dog-image-container')
    dogs.forEach(dog => {
      const img = document.createElement('img')
      img.src= `${dog}`
      dog_container.appendChild(img)
    })
  }



