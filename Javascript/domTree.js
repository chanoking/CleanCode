function change() {
  const header = document.getElementsByTagName("h2").item(0);

  header.firstChild.data = "A dynamic document";

  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "This is the first paragraph";

  const newText = document.createTextNode("This is the second paragraph.");

  const newElement = document.createElement("p");

  newElement.appendChild(newText);

  para.parentNode.appendChild(newElement);
}
