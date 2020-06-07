function solve() {
  let $elements = {
    creator: document.getElementById("creator"),
    title: document.getElementById("title"),
    category: document.getElementById("category"),
    content: document.getElementById("content"),
    createArticleButton: document.querySelector("form > button"),
    articles: document.querySelector("main > section"),
    archiveArticles: document.querySelector("aside > section > ul"),
  };

  $elements.createArticleButton.addEventListener("click", createArticle);

  function createArticle(event) {
    event.preventDefault();

    let article = createHtmlElement("article");
    let h1 = createHtmlElement("h1", null, $elements.title.value);
    let categoryParagraph = createHtmlElement("p", null, "Category:");
    let categoryStrong = createHtmlElement(
      "strong",
      null,
      $elements.category.value
    );
    let creatorParagraph = createHtmlElement("p", null, "Creator:");
    let creatorStrong = createHtmlElement(
      "strong",
      null,
      $elements.creator.value
    );
    let contentParagraph = createHtmlElement(
      "p",
      null,
      $elements.content.value
    );
    let div = createHtmlElement("div", ["buttons"]);
    let deleteButton = createHtmlElement(
      "button",
      ["btn", "delete"],
      "Delete",
      null,
      { name: "click", function: deleteArticle }
    );
    let archiveButton = createHtmlElement(
      "button",
      ["btn", "archive"],
      "Archive",
      null,
      { name: "click", function: archiveArticle }
    );

    categoryParagraph = appendChildrent([categoryStrong], categoryParagraph);
    creatorParagraph = appendChildrent([creatorStrong], creatorParagraph);
    div = appendChildrent([deleteButton, archiveButton], div);

    article = appendChildrent(
      [h1, categoryParagraph, creatorParagraph, contentParagraph, div],
      article
    );
    $elements.articles.appendChild(article);

    $elements.creator.value = "";
    $elements.title.value = "";
    $elements.category.value = "";
    $elements.content.value = "";
  }

  function archiveArticle(event) {
    let parentArticle = event.target.parentElement.parentElement;
    let title = parentArticle.children[0].textContent;

    let li = createHtmlElement("li", null, title);
    $elements.archiveArticles.appendChild(li);

    let allLis = Array.from($elements.archiveArticles.children);
    allLis.forEach((li) => $elements.archiveArticles.removeChild(li));
    allLis = allLis.sort((a, b) => a.textContent.localeCompare(b.textContent));
    allLis.forEach((li) => $elements.archiveArticles.appendChild(li));

    $elements.articles.removeChild(parentArticle);
  }

  function deleteArticle(event) {
    let parentArticle = event.target.parentElement.parentElement;
    $elements.articles.removeChild(parentArticle);
  }

  function createHtmlElement(
    tagName,
    classNames,
    textContent,
    attributes,
    event
  ) {
    let element = document.createElement(tagName);

    if (classNames) {
      element.classList.add(...classNames);
    }

    if (textContent) {
      element.textContent = textContent;
    }

    if (attributes) {
      attributes.forEach((a) => element.setAttribute(a.key, a.value));
    }

    if (event) {
      element.addEventListener(event.name, event.function);
    }

    return element;
  }

  function appendChildrent(children, parent) {
    children.forEach((c) => parent.appendChild(c));
    return parent;
  }
}
