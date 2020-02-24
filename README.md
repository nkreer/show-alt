# show-alt

Browser plugin to make alternative texts of images easily visible. Can help decide whether it is suitable to send a given page to a blind audience.

## How to use

When hovering over an image, it will turn grey when `aria-hidden` is set and the image is thus hidden from the screen reader user. `aria-hidden` should only be set for decorative images that are never relevant for screenreader users and do not serve any purpose except for the visual decoration.