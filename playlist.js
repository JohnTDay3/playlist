let scroll = document.getElementById('albumScroll');
let bin = document.getElementById('trackBin');
let clear = document.getElementById('clear');
let submit = document.getElementById('submit');
let albumList = [];
let selectedAlbum = [];

window.addEventListener('load', () => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
    .then(response => {
      let newData = response.data.results;
      // console.log(newData);

      for (let i = 0; i < newData.length; i++) {
        let coverArt = newData[i].cover_art;
        // console.log('MY ALBUM:', myAlbum);
        let title = newData[i].title;
        // console.log('TITLE:', albumTitle)
        let artist = newData[i].artist;
        // console.log('ARTIST', artist)
        albumScroll.innerHTML += `<img src=images/${coverArt}></div>`
      }
    })
  })

  albumScroll.addEventListener('click', () => {
    axios.get('https://lit-fortress-6467.herokuapp.com/object')
      .then(response => {
        let newData = response.data.results;
        console.log(newData);

        for (let i = 0; i < newData.length; i++) {
          let albumTitle = newData[i].title;
          console.log(albumTitle);
          let artist = newData[i].artist;
          console.log('ARTIST',artist)
          albumList.push(albumTitle)
          trackBin.innerHTML += `<p><strong>${artist}</strong>: ${albumTitle}<br><hr></p></hr>`
        }
      })
    })

    clear.addEventListener('click', e => {
      trackBin.innerHTML = '';
      albumList = [];
    })
