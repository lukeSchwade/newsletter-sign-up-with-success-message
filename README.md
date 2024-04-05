# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)



## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page




### Links

- Solution URL: [github](https://github.com/lukeSchwade/newsletter-sign-up-with-success-message)
- Live Site URL: [Live Site](https://lukeschwade.github.io/newsletter-sign-up-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SASS](https://sass-lang.com/) - CSS precompiler



### What I learned

I learned how to implement responsive images for mobile and web design. A big one was the orientation:portrait media query is a really easy way to distinguish phone users from pc and tablet users. as well as how to implement submission forms.

I also figured out how to use images for list styles, using ::before to properly align them.

I also like the little hack I made for the button, I had an issue where the hover effect for the image wasn't a color but a gradient, so I had to transition from a background-color to a background-image on hover, which had an issue where once unhovering the animation would flicker white because the background-image would disappear instantly.
by messing with the blend modes and setting initial blend mode to darken, the gradient is pre-loaded but invisible, then transitions to multiply blend mode which makes it visible.

```css
.email-submit-button {
    transition: all 150ms ease-out;
    background-image: $orange-red-gradient ;
    background-blend-mode: darken;
}

.email-submit-button:hover {
    background: $orange-red-gradient;
    background-blend-mode: multiply;
}
```



### Continued development

I'm more interested in building backend now, and reading more about regex

### Useful resources

- [Making responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - great resource for responsive images

