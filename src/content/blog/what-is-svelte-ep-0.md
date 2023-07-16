---
title: 'What is Svelte?'
description: 'Introduction to the Svelte framework and why it is a great alternative to other industry standard UI frameworks'
pubDate: 'Jul 14 2023'
heroImage: '/blog_images/svelte.webp'
tags: ['svelte', 'javascript', 'frontend', 'frameworks']
---

## Why Svelte over other industry standard UI frameworks?

The seemingly age-old question everyone asks is - "Why use **_X_** framework over React or Vue?". Admittedly, I ask this question a lot, even as I have begun my Svelte journey! I used it in my first job out of college, and even now in my current role. I used it in every personal project til today as well. React also seems to be in every Frontend / Fullstack Engineer job description. So, React is the _de-facto_ client-side UI library/framework, as it seems and as it has rightfully deserved.

There is no doubt that React is important and beneficial to know in today's market to get a job or even garner lots of retention online via its large community, YouTube tutorials and more. However, just because React is the standard today, does not mean it will be the standard tomorrow. And do not get me wrong, React got me where I am today and is a huge part of my career. I enjoy it, and I like using it, **<mark>and I will continue using it</mark>** but it was time to start looking beyond my comfort zone and find something new to try and something that just might be the next big thing in the frontend engineering world.

## Introducing Svelte!

Introducing, [Svelte](http://svelte.dev) - a different way of building web applications with ease. Svelte brings us back to the way websites and web applications used to be developed, and quite frankly should be developed. Your HTML, JavaScript and CSS are all logically separated in your code to make understanding code at the component level much easier. You write _plain_ HTML, CSS and JavaScript in all your `.svelte` files and leverage templates to inject dynamic, JavaScript-reactive values into your code to make things dynamic and interactive. All while not requiring a virtual DOM or a fancy abstraction like JSX to render your UI.

Instead of there being any fancy abstractions or framework-specific tooling like the virtual DOM to build, bundle and render your code, Svelte uses a compiler to compile all your `.svelte` files into plain JavaScript that is used to create the DOM in your browser as well as all the CSS styles needed to style your application. It is as straightforward as that. Write svelte syntax, let svelte compile it all and the browser will use the DOM and the compiled JavaScript to build your UI. It is not only impressive, but elegant - not to mention very efficient.

> Fun fact : I refer to Svelte as a framework often but it actually is just a compiler! Svelekit , a server side rendering solution, and the new, recommended way of developing Svelte applications is a true framework. Don’t worry, after introducing the core of Svelte, we will cover Sveltekit and all its glory

Svelte offers so many other enhancements and improvements to frontend developer DX and usability and that is what this blog series will be all about. While this post did not focus on the features of Svelte, code examples and more, I wanted to preface this Svelte series with a little intro to what it is and answer the common "what framework should I choose" frontend developer question we all seem to have. Svelte is an awesome frontend UI framework that takes the pains of other UI libraries and frameworks away and brings you closer to the fundamentals and architectures of the web. If you want to learn more about what Svelte is, how it works and all its features, continue following this blog series as I will address and showcase all this amazing framework has to offer.

> Do not worry - all the features and components of Svelte will be covered in the subsequent posts in this series dedicated to Svelte. Below is an explanation on how every post from now on will be covered.

## Blog Series Structure

Here is how the structure of the remaining articles in this Svelte series will be organized

- Each post will be dedicated to the core topics in Svelte. They will include all the explanations and examples you need for the topic being discussed, and they will also contain real, runnable code sandboxes showcasing each topic and how the topics work in real applicable working examples.
- Every post will also contain a YouTube tutorial addressing the post in a video format as well as a follow-along coding example building out the actual topics discussed in each article. This way for people who prefer matching writing with video can get the best of both worlds.
- Lastly, a real working project that uses all that was learned in previous sections + the one being covered will be included as well. This is not the same as the coding tutorials addressing the core topic discussed in every blog post. This will be an actual full-fledged, real working example to showcase how the theory and application come together. Don't worry, this will also be recorded and they won't be massive projects. They will be small enough to get done in no time but large enough to learn real, applicable skills.

It will be important to follow the articles in sequence as every new article will build on the previous one due to examples in the code becoming more involved which requires knowing other fundamentals.

I hope you enjoy all the tutorials and posts that will be in this series! Stay tuned for Part 2 where I will cover Svelte basics and how they compare to other frameworks.

## `Happy coding!`
