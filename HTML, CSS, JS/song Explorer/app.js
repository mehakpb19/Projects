class Song{
    constructor(data){
        this.Name = data.trackName;
        this.album = data.collectionName;
        this.poster = data.artworkUrl100;
       this.updateui()
    }
    updateui(){
const trackCard = document.createElement('div');
trackCard.classList.add('track-card');

// Create the image element
const trackImage = document.createElement('img');
trackImage.classList.add('track-image');
trackImage.src = this.poster;
trackImage.alt = 'Artwork';

// Create the info container
const trackInfo = document.createElement('div');
trackInfo.classList.add('track-info');

// Create the track name element
const trackName = document.createElement('div');
trackName.classList.add('track-name');
trackName.textContent = this.Name;

// Create the album name element
const albumName = document.createElement('div');
albumName.classList.add('album-name');
albumName.textContent = this.album;

// Assemble the structure
trackInfo.appendChild(trackName);
trackInfo.appendChild(albumName);

trackCard.appendChild(trackImage);
trackCard.appendChild(trackInfo);

// Append to the document body (or any other existing container)
document.querySelector('#results-container').appendChild(trackCard);
    }

}

document.querySelector('#search-btn').addEventListener('click',function() {
    document.querySelector('#artist-input')
    fetch("https://itunes.apple.com/search?entity=song&limit=10&term="+document.querySelector('#artist-input').value)
.then(response => response.json())
.then((data)=>{
    data.results.forEach((s)=>{
        let song = new Song(s)
    })    
})
.catch(error => console.error('Error:', error));
})
