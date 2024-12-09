/*document.addEventListener("DOMContentLoaded", () => {
    console.log(CSS.escape("this?element"));
    console.log("this\\?element");

    const nonElement = document.querySelector("this?element");
    console.log(nonElement);

    const heading = document.createElement("h1");
    console.log(heading.innerHTML = "Hello, Palintr");
    const headerTextValue = document.createTextNode("Hello World");
    //document.querySelectorAll()
    //heading.append(headerTextValue);
    document.body.appendChild(heading);
});*/

/*
heading.style.color = "red";
    heading.style.position = "relative";
    heading.style.backgroundColor = "green";
*/

document.body.onload = () => {
 const contentEx = document.getElementById("example");
 
 contentEx.innerHTML = "<p> GoodBye <em> World </em></p>";
 contentEx.insertAdjacentHTML("beforebegin","<ul><li>Name</li> <li>Age</li> <li>Sex</li></ul>");
 
 console.log(contentEx.innerHTML);
 console.log(contentEx.getHTML());

 /*console.log("loaded...");
 const newDiv = document.createElement("div");
 const content = document.createTextNode("Speech by author");
 newDiv.append(content);
 const oldDiv = document.getElementById("div1");
 document.body.insertBefore(newDiv, oldDiv)*/
};