## GA-WDI Sticker Generator!

Access the app [here](https://javeddc.github.io/sticker_generator/)!

## Description

During the General Assembly Web Development Immersive, I was asked to make a sticker for our WDI cohort at General Assembly, and thought it would be cool if each of us was able to customise their sticker.

The app allows each person to choose custom colours and patterns for their versions of the sticker. You can generate your own too – there are millions of possible combinations.

After picking a combination, the application produces a data blob containing the pattern and colour information - I used these data blobs to generate high resolution versions of the sticker for printing. The application also includes a function that renders the combination to a PNG image.

## Tools used

I wrote this web app using pure Javascript and CSS.

The only dependency is for the save to PNG function, which uses the [HTML2Canvas](https://github.com/niklasvh/html2canvas) library. 
