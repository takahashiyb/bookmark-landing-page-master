# Frontend Mentor - Bookmark landing page

![Design preview for the Bookmark landing page coding challenge](preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Your challenge is to build out this landing page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

For this challenge you'll need to:

- Create the rounded blue background shape with code
- Change the `fill` and `stroke` color of the SVGs at specific points (the challenge can be completed using the single `logo-bookmark.svg` file provided)

### Links

- Solution URL: [click here for GitHub repository](https://github.com/takahashiyb/bookmark-landing-page-master)
- Live Site URL: [click here for Live Site](https://takahashiyb.github.io/bookmark-landing-page-master)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS

### What I learned

For this challenge, I was not far off on my ETA, but the estimated difficulty was really different from what I had. I had difficulties with the SVG and in fact skipped the coloring of the logo, (though I made some workaround for it).

```css
svg {
  filter: sepia (1) saturate(100) invert(1) hue-rotate(120deg);
}
```

That line saved the day. I got the idea of adding chroma to a white svg by adding sepia by asking Copilot, but I was proud to figure out that inverting the colors can bring up the intensity that would otherwise be muted.

I also had a hard time working with grids, ever since I used the 12 column grid, I had been very hard to work with it. but I eventually got it by learning how to choose and when to choose to use it.

## Author

- Frontend Mentor - [@takahashiyb](https://www.frontendmentor.io/profile/takahashiyb)
