//your JS code here. If required.
 // Get the width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Get the div with id sizeInfo
    const sizeInfoDiv = document.getElementById('sizeInfo');

    // Update the content of the h1 tag within the sizeInfo div
    sizeInfoDiv.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;