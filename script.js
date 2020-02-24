// Get all images on the page
images = document.getElementsByTagName("img");

// Loop through all to find what we need
for(i = 0; i < images.length; i++) {
    image = images[i];
    // Ignore the smaller images
    if(image.width > 128){
        // Check if an alt text or a title is present at all
        if(image.hasAttribute("alt") || image.hasAttribute("title")){
            // Create a badge showing the alt text
            // TODO
        } else if(image.hasAttribute("aria-hidden")) {
            // Turn the image grey if it is hidden from screenreaders
            image.classList.add("show-alt-aria-hidden");
        }
    }
}