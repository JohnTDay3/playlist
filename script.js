let albumOne = document.getElementById('albumOne');
let albumTwo = document.getElementById('albumTwo');
let albumThree = document.getElementById('albumThree');

// window.addEventListener('load', function(){
//   fetch(`https://lit-fortress-6467.herokuapp.com/object`).then(function(response){
//     return response.json();
//   }).then(function(data){
//     console.log(data)
//     document.getElementById('albumOne').innerHTML += `<img src=${data[0].cover_art}></img>`
//   })
// })

window.addEventListener('load', () => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
    .then(res => {
      for (let i = 0; i < Math.ceil(Math.random() * 6); i++) {
        albumOne.setAttribute('src', `images/${res.data.results[i].cover_art}`)
      }
    })
})

window.addEventListener('load', () => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
    .then(res => {
      for (let i = 0; i < Math.ceil(Math.random() * 6); i++) {
        albumTwo.setAttribute('src', `images/${res.data.results[i].cover_art}`)
      }
    })
})

window.addEventListener('load', () => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
    .then(res => {
      for (let i = 0; i < Math.ceil(Math.random() * 6); i++) {
        albumThree.setAttribute('src', `images/${res.data.results[i].cover_art}`)
      }
    })
})
