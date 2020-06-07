function solve() {
  let $elements = {
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
    addNewTaskButton: document.getElementById("add"),
    openTasksSection: document.getElementsByTagName("section")[1].children[1],
    inProgressTasksSection: document.getElementById("in-progress"),
    finishedTasksSection: document.getElementsByTagName("section")[3]
      .children[1],
  };

  $elements.addNewTaskButton.addEventListener("click", addNewTask);

  function addNewTask(event) {
    event.preventDefault();

    if (
      $elements.task.value !== "" &&
      $elements.description.value !== "" &&
      $elements.date.value !== ""
    ) {
      let article = createHtmlElement("article");
      let h3 = createHtmlElement("h3", null, $elements.task.value);
      let paragraphDescription = createHtmlElement(
        "p",
        null,
        `Description: ${$elements.description.value}`
      );
      let paragraphDate = createHtmlElement(
        "p",
        null,
        `Due Date: ${$elements.date.value}`
      );
      let div = createHtmlElement("div", ["flex"]);
      let buttonStart = createHtmlElement("button", ["green"], "Start", null, {
        name: "click",
        function: startTask,
      });
      let buttonDelete = createHtmlElement("button", ["red"], "Delete", null, {
        name: "click",
        function: deleteTask,
      });

      div = appendChildrent([buttonStart, buttonDelete], div);
      article = appendChildrent(
        [h3, paragraphDescription, paragraphDate, div],
        article
      );

      $elements.openTasksSection.appendChild(article);
    }

    $elements.task.value = "";
    $elements.description.value = "";
    $elements.date.value = "";
  }

  function deleteTask(event) {
    let parentTask = event.target.parentElement.parentElement;
    let grandParent = parentTask.parentElement;
    grandParent.removeChild(parentTask);
  }

  function startTask(event) {
    let parentTask = event.target.parentElement.parentElement;

    let [firstButton, secondButton] = Array.from(
      parentTask.children[3].children
    );
    parentTask.children[3].removeChild(firstButton);

    let buttonFinish = createHtmlElement("button", ["orange"], "Finish", null, {
      name: "click",
      function: finishTask,
    });

    parentTask.children[3].appendChild(buttonFinish);

    $elements.inProgressTasksSection.appendChild(parentTask);

    $elements.openTasksSection.removeChild(parentTask);
  }

  function finishTask(event) {
    let parentTask = event.target.parentElement.parentElement;

    let [firstButton, secondButton] = Array.from(
      parentTask.children[3].children
    );

    parentTask.children[3].removeChild(firstButton);
    parentTask.children[3].removeChild(secondButton);
    parentTask.removeChild(parentTask.children[3]);

    $elements.finishedTasksSection.appendChild(parentTask);

    $elements.inProgressTasksSection.removeChild(parentTask);
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
