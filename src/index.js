document.addEventListener("DOMContentLoaded", function() {
    console.log('%c HI-C', 'color: firebrick');
    fetchDogs()
    fetchDogBreeds()
    handleClickBreed()
  })

  function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(dogs => renderDogs(dogs.message));
  }

  function renderDogs(dogs) {
    const dog_container = document.getElementById('dog-image-container')
    dogs.forEach(dog => {
      const img = document.createElement('img')
      img.src= `${dog}`
      dog_container.appendChild(img)
    })
  }

  function fetchDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(breeds => renderBreeds(Object.keys(breeds.message)));
  }

  function renderBreeds(breeds) {
    const dog_breeds = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
      const li = document.createElement('li')
    //  li.innerHTML = `${breed}`
      li.innerHTML = `<p class='breed_name'>${breed}</p>`
    //    li.setAttribute("class", "d")
      dog_breeds.appendChild(li)
      li.style.cursor = 'pointer';
      li.addEventListener("click", handleClickBreed)
    })
  }

  function handleClickBreed(event) {
        event.target.style.color = "lightblue"; 
    } 

    //Still Need to Filter Breeds
  //function 

// document.getElementById("myDiv").style.color = "lightblue";

