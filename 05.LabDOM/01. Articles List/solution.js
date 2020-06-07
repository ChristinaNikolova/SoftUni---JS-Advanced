function createArticle() {
	
	let $inputTitle = document.getElementById("createTitle");
	let $inputContent = document.getElementById("createContent");

	if($inputTitle.value !== "" && $inputContent.value !== ""){
		let h3Element = document.createElement("h3");
		h3Element.textContent = $inputTitle.value;
		$inputTitle.value = "";

		let paragraphElement = document.createElement("p");
		paragraphElement.textContent = $inputContent.value;
		$inputContent.value = "";

		let articleElement = document.createElement("article");
		articleElement.appendChild(h3Element);
		articleElement.appendChild(paragraphElement);

		let $mainArticle = document.getElementById("articles");
		$mainArticle.appendChild(articleElement);
	}
}