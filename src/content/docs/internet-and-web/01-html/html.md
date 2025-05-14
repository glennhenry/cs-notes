---
title: HTML
slug: internet-and-web/html
description: HTML
---

**Main Source:**

- **[HTML — Wikipedia](https://en.wikipedia.org/wiki/HTML)**
- **[What is the DOM? The Document Object Model Explained in Plain English — freeCodeCamp](https://www.freecodecamp.org/news/what-is-the-dom-explained-in-plain-english/)**
- **[Document Object Model — Wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model)**

**HTML (HyperText Markup Language)** is a markup language used to create the structure and content of web pages. It is the basic building block of a webpage, consisting a series of tags or elements, which are used to define the structure and content of a web page.

HTML documents are text files that can be created using any text editor, and have a .html file extension.

HTML provides a wide range of tags that can be used to create various elements on a web page, such as headings, paragraphs, lists, links, images, tables, forms, and more. To use a tag, it must be enclosed in angle brackets `<>` to indicate the beginning of the tag, and also include a closing tag enclosed in angle brackets with a slash `</>` to indicate the end of the tag.

For example creating heading looks like below:

```html
<h1>Heading text here</h1>
```

This is the basic HTML structure that is essential for defining the structure and content of an HTML document:

![Example of HTML basic page structure](./html-example.png)  
Source: https://www.geeksforgeeks.org/html/

HTML may also contain:

- `<meta>`: This tag is used to provide additional metadata about the document, such as the character encoding, keywords, and description.
- `<link>`: This tag is used to link to external resources, such as stylesheets and scripts.
- `<style>`: This tag is used to define styles for the document, either within the document itself or in an external stylesheet.
- `<script>`: This tag is used to insert scripts into the document, either within the document itself or in an external file.

:::tip
Find out more about [how HTML works](/internet-and-web/web-browser#page-rendering).
:::

### HTML DOM

**HTML DOM** stands for HTML Document Object Model. It is a programming interface for HTML documents that provides a hierarchical representation of the document structure, along with a set of methods and properties for manipulating the content and structure of the document.

Web browser is responsible for parsing HTML when you visit a web page, during parsing the browser reads the HTML code and creates a Document Object Model (DOM), which represents the structure of the web page.

:::tip
DOM is not limited to HTML it is also used in **[Extensible Markup Language (XML)](/digital-media-processing/xml)** which is markup language used to store and transport data in a structured format. XML allows developers to define their own custom tags and elements, making it highly extensible and adaptable to a wide range of applications.
:::

#### DOM Tree

DOM is represented as tree-like structure, with each HTML element represented as a node in the tree and is represented as an object, with properties. The root of the tree is the document object, which represents the entire HTML document.

Objects and properties make each HTML element in the document possible to be accessed and manipulated using JavaScript. For example, the document object has properties such as title and URL, while HTML elements have properties such as `innerHTML`, `className`, and `style`.

Developers can use JavaScript to access and modify individual elements in the document, change their attributes and styles, add or remove elements from the document, and respond to user interactions.

:::tip
See how [JavaScript manipulates the DOM](/internet-and-web/javascript#dom-manipulation).
:::

![HTML represented in tree structure with HTML tags as the root and has head and body as children which also contains another children elements such as p, ul, li](./dom-tree.png)  
Source: https://www.tutorialstonight.com/js/js-dom-introduction

#### Nodes Type

There are several types of nodes in the Document Object Model (DOM), with each type of node representing a different kind of object in an HTML or XML document. Here are the most common types of nodes in the DOM:

- **Element Nodes**: Element nodes represent the actual elements in an HTML or XML document, such as `<div>`, `<p>`, and `<img>`.
- **Text Nodes**: Text nodes represent the text content of an element, such as the text between two HTML tags.
- **Attribute Nodes**: Attribute nodes represent the attributes of an element, such as the src attribute of an `<img>` element.
- **Comment Nodes**: Comment nodes represent comments in an HTML or XML document, such as `<!-- This is a comment -->`.
- **Document Nodes**: Document nodes represent the entire HTML or XML document and are the root node of the DOM tree.
- **Document Type Nodes**: Document type nodes represent the document type declaration in an HTML or XML document, such as `<!DOCTYPE html>`.
- **Processing Instruction Nodes**: Processing instruction nodes represent processing instructions in an XML document, such as `<?xml version="1.0" encoding="UTF-8"?>`.

#### DOM Level

The Document Object Model (DOM) has evolved over time, with different versions or levels of the DOM being developed to support new features and capabilities. Here are some of the key levels of the DOM:

- **DOM Level 1**: The first level of the DOM was released in 1998 introducing the basic concepts of the DOM, such as nodes, elements, and attributes, and provided a set of core methods and properties for working with these objects.
- **DOM Level 2**: The second level of the DOM was released in 2000 and added support for new features such as CSS, event handling, and user interface controls. It introduced new interfaces and methods for working with stylesheets, events, and user interface elements, and improved support for XML namespaces and namespaces.
- **DOM Level 3**: The third level of the DOM was released in 2004 and included support for additional features such as XPath, keyboard navigation, and validation. It introduced new interfaces and methods for working with XPath expressions, keyboard events, and XML Schema validation, among other things.
- **DOM Level 4**: The fourth level of the DOM was released in 2015 and has since become the standard. DOM Level 4 offers notable enhancements in areas such as performance, security, internationalization, and accessibility. Additionally, it introduces new elements and attributes to the model.

### Semantic HTML

Semantic HTML is the practice of using HTML markup to convey the meaning and structure of content on a web page. Semantic HTML elements, such as `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`, provide a clear and meaningful structure to web pages.

Using just traditional `div` container would work fine, but using semantic HTML provide a clear and meaningful structure to web pages, which can improve accessibility, search engine optimization (SEO) (making it easier for search engine to index our website), etc.

![Showing how semantic elements use varying tags while non-semantic mostly just use div tags](./semantic-html.png)  
Source: https://www.semrush.com/blog/semantic-html5-guide/

### XHTML

**XHTML (Extensible HyperText Markup Language)**, and it is a markup language that is designed to be a stricter, more standardized version of HTML. XHTML is based on [XML](/digital-media-processing/xml), which means that it is syntactically stricter than HTML and conforms to the rules of XML syntax such as element nesting, attribute quoting, and other syntax rules.

XHTML was developed as a response to the proliferation of non-standard, poorly formed HTML documents on the web, which made it difficult for web browsers to render pages consistently. By adopting XML syntax and enforcing strict rules for document structure and syntax, XHTML aims to create a more consistent and predictable web browsing experience.

For example in XHTML, any syntax errors will cause the document to fail to parse, and the browser will display an error message. In HTML, the browser will attempt to correct any errors and continue parsing the document, which can lead to unexpected and inconsistent behavior.
