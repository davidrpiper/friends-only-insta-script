setInterval(() => {
	const articleElements = document.getElementsByTagName("article")

	for (article of articleElements) {
		if (article.innerHTML.includes("Suggested for you")) {
			// article.innerHTML = ""
			article.remove()
			continue
		}
		if (article.innerHTML.includes(">Follow<")) {
			// article.innerHTML = ""
			article.remove()
			continue
		}
	}
}, 1000)
