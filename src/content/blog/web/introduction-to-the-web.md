---
title: 'Introduction to the Web and Internet'
topic: 'Web Development'
description: 'An Introduction to the Internet and the Web'
pubDate: 'Oct 12 2023'
heroImage: '/blog_images/web/world-wide-web.webp'
tags: ['web', 'html', 'css', 'javascript', 'internet']
---

## How does the Internet Work?

At its core, the internet is a global network of interconnected computers. These computers communicate with each other through a set of protocols called the Internet Protocol Suite, or TCP/IP. This suite of protocols governs how data is transmitted and received across the internet.

When you type a website address into your browser, like [www.example.com](http://www.example.com), the first step in the process is converting the human-readable domain name into its corresponding IP address. This conversion is facilitated by a system called the Domain Name System (DNS). The DNS acts as a directory that translates domain names into IP addresses, allowing your browser to know where to send requests.

Once the IP address is obtained, your browser initiates a request to the web server associated with the website. This request is sent through your Internet Service Provider (ISP), which acts as a gateway to the internet. The ISP forwards the request to the web server by following a series of routers – specialized devices designed to direct internet traffic.

Upon reaching the web server, the request is processed, and the server sends back the requested data, such as the website's HTML, images, or other media files. This data is broken down into small packets for efficient transmission over the internet.

Each packet contains both the data itself and information about its destination and origin. These packets travel independently across the internet, taking different routes to reach their destination. They may encounter various routers and network switches along the way, which make decisions about the most efficient path to take based on factors such as network congestion or available bandwidth.

To ensure that the packets arrive at their destination intact, the internet uses a concept called packet switching. Rather than sending data as a continuous stream, it is divided into smaller packets that can be individually routed. This allows for more efficient transmission and higher reliability, as damaged or lost packets can be retransmitted without retransmitting the entire stream of data.

Once all the packets reach their destination, they are reassembled into the original data by the receiving computer or device. This process happens quickly and seamlessly, allowing you to access websites, stream videos, and download files with ease.

## What is the Web?

The web (often called the world wide web _www_ ), is an information system where data is transferred across different systems and gives results as HTML to end users to be rendered as a _web page_

The data is transferred (most commonly) over a protocol called HTTP (Hypertext Transfer Protocol). **HTTP is the foundation of the web and web communication**

Web sites are served via web-servers which are serving HTML files to the browser, and they are responsible for processing requests to get these files and passing them to the browser so they can be rendered

The web consists of web-sites and web-apps. Technically, the underlying properties of a web-app and a web-site are the same (HTML, CSS, and JavaScript) however what distinguishes the two is the functionality and features. _see below_

- A **website** is a collection of web pages that are interconnected and accessible through a unique domain name. It provides information or resources to visitors and can include text, images, videos, and other media elements. Websites are typically static, meaning the content remains the same unless manually updated.
- A **web app** is a more interactive and dynamic website that allows users to perform specific tasks or access specific services online. Web apps often require user input, process data, and provide personalized experiences. They can be used for a wide range of purposes, such as online shopping, social media platforms, productivity tools, and more.
  > The main difference between a website and a web app lies in their functionality and interactivity. While a website is primarily informational and provides content to visitors, a web app is designed to perform specific functions and may require user input or interaction.
  > In terms of technology, both websites and web apps use similar underlying technologies such as HTML, CSS, and JavaScript. However, web apps often involve more complex coding, server-side processing, and database integration to deliver their functionality.

## Request / Response Lifecycle

The request/response lifecycle refers to the series of steps that occur when a client (such as a web browser) sends a request to a server and receives a response in return. Here is a flow of how this is done.

![web server lifecycle](/blog_images/web/reqrescycle.jpeg)

1. Client sends a request: The client (typically a web browser) initiates the request by sending a request message to the server. This message includes information such as the HTTP method (e.g., GET, POST), the URL of the requested resource, and any additional headers or data.
2. Server processes the request: Upon receiving the request, the server processes it based on the HTTP method and the requested resource. This may involve accessing a database, generating a dynamic response, or retrieving a static file.
3. Server sends a response: Once the server has processed the request, it constructs a response message containing the requested resource or an error message. This response message includes a status code (e.g., 200 for a successful request) and additional headers providing information about the response.
4. Client receives the response: The client receives the response message from the server. The client's web browser then interprets the response and takes appropriate actions, such as rendering a web page or processing data.
5. Client sends additional requests (optional): Depending on the content of the response or user interactions, the client may send additional requests to retrieve additional resources or perform actions on the server. This can include loading images, making AJAX requests, or submitting form data.
6. Server processes subsequent requests: If the client sends additional requests, the server repeats the process of processing the request and sending a response. This cycle continues until the client has retrieved all necessary resources or completed the desired actions.

> It's important to note that the request/response lifecycle is not confined to a single interaction. Users often navigate between multiple pages or perform multiple actions on a single page, resulting in multiple request/response cycles. Additionally, various technologies and frameworks, such as cookies, caching, and session management, can affect the lifecycle and add additional layers of complexity.

## Frontend vs Backend

![web server lifecycle](/blog_images/web/fe-v-be.png)

### Frontend

The frontend is **what you see** .

- The visual content you see on a client (desktop browser, mobile etc.)
- Frontend deals with HTML, CSS and JavaScript at its core
- HTML, CSS and JS have frameworks and tools that make working with them easier, more powerful and interactive _(out of scope for this article)_

### Backend

The backend is **what you don't see**

- The backend refers to the underlying components of a software system that operate behind the scenes and are not directly observable by the user. It encompasses the processing of data, handling of requests, and other related tasks necessary for the application's operation. Upon completion, the backend transmits a response to the frontend or client in the form of HTML or JSON data, which is subsequently processed and rendered.
- At an advanced level, the backend code and services primarily engage with a database, manage HTTP requests, execute business logic, and are accountable for providing data to the requesting client.

## The Purpose of HTML, CSS and JavaScript

**HTML** - The purpose of HTML (Hypertext Markup Language) is to structure the content of a web page. It defines the elements and layout of the page, such as headings, paragraphs, images, links, and forms. HTML provides the foundation for creating the structure and organization of a website.

**CSS** - The purpose of CSS (Cascading Style Sheets) is to control the visual appearance and layout of a web page. It allows web developers to define styles for HTML elements, such as colors, fonts, spacing, and positioning. CSS separates the presentation from the content, making it easier to update the design of a website without changing the underlying HTML structure.

**JavaScript** - The purpose of JavaScript is to add interactivity and dynamic behavior to a web page. It allows web developers to create interactive elements, such as image sliders, form validations, and responsive menus. JavaScript can also be used to retrieve and manipulate data, create animations, and communicate with web servers. It enhances the user experience by making web pages more engaging and responsive.

## Conclusion

The internet and the web are two distinct but related concepts. The internet is a global network of interconnected computers that communicate with each other through a set of protocols called TCP/IP. The web is an information system where data is transferred across different systems and gives results as HTML to end users to be rendered as a web page. Stay tuned for more articles on the web and web development.
