let year = document.querySelector("#year");
year.innerHTML = "&copy; " + new Date().getFullYear();

let lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Last Modified " + document.lastModified;