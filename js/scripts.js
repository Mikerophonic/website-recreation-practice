window.onload = function() {
  const h1 = document.querySelector("h1");
  h1.remove();
  const head = document.createElement("h1");
  const body = document.querySelector("body");
  head.append("Website Recreation Practice");
  body.before(head);
  const firstP = document.createElement("p");
  firstP.append("The HTML of this webpage was created with JavaScript.");
  body.append(firstP);
  const firstImg = document.createElement("img");
  firstImg.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  firstImg.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  firstImg.setAttribute("style", "width:50%");
  body.append(firstImg);
  const number2h1 = document.createElement("h1");
  number2h1.append("Facts about the Multicolored Tanager");
  body.append(number2h1);
  const ul = document.createElement("ul");
  body.append(ul)
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  li1.append("It is endemic to the mountains of Colombia.");
  li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  ul.append(li1);
  ul.append(li2);
  const h2 = document.createElement('h2');
  h2.append("Source");
  body.append(h2);
  const a = document.createElement("a");
  a.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  a.append("Wikipedia");
  body.append(a);
}