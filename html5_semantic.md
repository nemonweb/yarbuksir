//- html5 semantic

```jade
body
  header.site-header
    nav.site-menu
  main.content
    header.blog-header
      h1.blog-title
      h2.blog-description
    article
      header
        h2.post-title
      section.post-content
        p text
      time
      footer
        section.share
    nav.pagination
  footer
```

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Title</title>
    <link href="stylesheets/main.css" rel="stylesheet" />
</head>
<body>
    <header>
        <hgroup>
            <h1>Header</h1>
            <h2>Subheader</h2>
        </hgroup>
    </header>
    <nav>
        <ul>
            <li><a href="#">Menu Option 1</a></li>
            <li><a href="#">Menu Option 2</a></li>
        </ul>
    </nav>
    <section>
        <article>
            <header>
                <h1>Article #1</h1>
            </header>
            <section>
                This is the first article.
            </section>
        </article>
        <article>
            <header>
                <h1>Article #2</h1>
            </header>
            <section>
                This is the second article.
            </section>
        </article>
    </section>
    <aside>
        <section>
            <h1>Links</h1>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </section>
        <figure>
            <img width="85" height="85"
                src="http://domain.tld/path/to/image.jpg"
                alt="foobar" />
            <figcaption>Foobar</figcaption>
        </figure>
    </aside>
    <footer>Footer</footer>
</body>
</html>
```

section - element defines a section in a document.
A section is a thematic grouping of content, typically with a heading

```
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>
```

article - element specifies independent, self-contained content.
Forum post
Blog post
Newspaper article

```
<article>
  <h1>What Does WWF Do?</h1>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```

On the Internet, you will find HTML pages with <section> elements containing <article> elements, and <article> elements containing <sections> elements.

You will also find pages with <section> elements containing <section> elements, and <article> elements containing <article> elements.


main
The content inside the <main> element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.
There must not be more than one <main> element in a document.
The <main> element must NOT be a descendant(потомком) of an <article>, <aside>, <footer>, <header>, or <nav> element.

developer.mozilla.org
```
  main
    h1
    p
    article
      h2
      p
    article
      h2
      p
```

medium post
```
  body
    nav
    article
      header
      main
        section
        section
      footer
```

theguardian
```
  body
    header
      nav
    article
      header
        h1.post-title
      .content
    footer
```

bbc
```
body
  header
  .main
    article
      h1
      p
      footer
        .share
      section
        .related
    div
      section.top-stories
      section.related
  div.footer
    aside
    footer
```

bbc

http://www.w3schools.com/html/html5_semantic_elements.asp
https://gist.github.com/thomd/9220049
