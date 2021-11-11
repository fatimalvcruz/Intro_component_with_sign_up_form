# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](/img/screen_shot.jpg)



### Links

- Solution URL: [Github](fatimalvcruz/Intro_component_with_sign_up_form)
- Live Site URL: [Netlify](https://intro-component-wiht-sing-up-form-challenge.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- SASS
- Native JavaScript



### What I learned

In this project I learned how to use SASS to design, using variables for font colours and weight, I also used the blend property to group properties to be used in different elements.

To see how you can add code snippets, see below:

```Css Sass


@import 'medias';


$font-1:400;
$font-2:500;
$font-3:600;
$font-4:700;


$red:hsl(0, 100%, 74%);
$green:hsl(154, 59%, 51%);
$blue:hsl(248, 32%, 49%);
$dark-blue: hsl(249, 10%, 26%); 
$Grayish-blue:hsl(246, 25%, 77%); *


```

The challenge has two different views, mobile and desktop, and the elemnents are distributed in different ways, I used display grid to create 2 columns in desktop view. 


```css
    .container{

        width: 80%;
        min-width: 812px; 
        grid-gap: 10px; 
        grid-template-columns: 1fr 1.4fr;
        grid-template-rows:100px 100px;
        position: relative;

}
```
To add the image to the empty input I added the image to the placeholder.

```css
      &.active{
                            &::placeholder{
                                background-image: url(/img/icon-error.svg);
                                background-repeat: no-repeat;   
                                background-position-x: 95%; 
                                height: 100%;  
                                
                            }
```
To validate the form I used Javascript, creating an addEventListener event when submit is done. Then I added a series of conditionals with the different regular expressions adapted to each field.
```js

form.addEventListener("submit", (e) => {
    e.preventDefault();


    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    const regPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;

        const errores = [];

        if (!regUserName.test(forName.value)) {
            errores.push({
                input: forName,
                tipo: alertName,
                msg: "First Name cannot be empty"
            })
}
```


