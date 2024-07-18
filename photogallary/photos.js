document.addEventListener("DOMContentLoaded",()=>{
    const uploadForm = document.getElementById("upload-form");
    const uploadInput = document.getElementById("upload-input");
    const albumNameInput = document.getElementById("album-name");
    const photoGrid = document.getElementById("photo-grid");
    const albumGrid = document.getElementById("album-grid");

    // array to store all uploads photos
    const photos = [];

    //object to store albums and their photos
    const albums = {};

    // function to display photos in the grid
    const displayPhotos = (photo) =>{
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");

    const img = document.createElement("img");
        img.src = photo.url;
        img.alt = "photo";

        //create div element for the caption (album name)
        const caption = document.createElement("div");
        caption.classList.add("caption");
        caption.textContent = photo.album;

        //append the caption and image to the photo div
        photoDiv.appendChild(img);
        photoDiv.appendChild(caption);

        //append the photo div to the photo grid
        photoGrid.appendChild(photoDiv);
    };

    // function to display and create albums in the grid
    const displayAlbum = (albumName) => {
        const albumDiv = document.createElement("div");
        albumDiv.classList.add("album");
        //h3 element  for the album title

        const albumTitle = document.createElement("h3");
        albumTitle.textContent = albumName;

        //div element for holding photos in the album
        const albumPhotos = document.createElement("div");
        albumPhotos.classList.add("album-photos");

       
    }
})