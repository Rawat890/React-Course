// const { createElement } = require("react");

// const header1 = document.createElement("h1");
// header1.innerText = "Hello Rohan Rawat";
// header1.style.fontSize ="20px";
// header1.style.color ="black";
// header1.style.backgroundColor ="yellow";
// header1.style.padding ="10px";
// header1.style.backgroundColor ="yellow";

// const header2 = document.createElement("h1");
// header2.innerText = "Hello Coder Army";
// header2.style.fontSize ="20px";
// header2.style.color ="black";
// header2.style.backgroundColor ="yellow";
// header2.style.padding ="10px";
// header2.style.backgroundColor ="yellow";

//So to create another header we have to again write the same code with different variable, that is very hectic and not a good practice as the code grows

//Let's create the element with React
const React = {
  createElement: function (tag, props = {}, ...children) {
    const element = document.createElement(tag);

    for (let key in props) {
      if (key === "style") {
        Object.assign(element.style, props.style);
      } else {
        element.setAttribute(key, props[key]);
      }
    }

    children.forEach(child => {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });

    return element;
  }
};

const header1 = React.createElement(
  "h1",
  { style: { fontSize: "20px", color: "black", backgroundColor: "yellow", padding: "10px" } },
  "Hello Rohan Rawat"
);

const header2 = React.createElement(
  "h1",
  { style: { fontSize: "20px", color: "black", backgroundColor: "yellow", padding: "10px" } },
  "Hello Coder Army"
);

const header3 = React.createElement(
  "h1",
  { style: { fontSize: "20px", color: "black", backgroundColor: "yellow", padding: "10px" } },
  "Hello React"
);


const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  }
}
ReactDOM.render(header1, document.getElementById('root'));
ReactDOM.render(header2, document.getElementById('root'));


//Create unordered list
// Create list items
const li1 = React.createElement('li', {}, "HTML");
const li2 = React.createElement('li', {}, "CSS");
const li3 = React.createElement('li', {}, "JS");

// Create the unordered list and append children
const ul = React.createElement(
  'ul',
  { style: { fontSize: "20px", color: "black", backgroundColor: "yellow", padding: "10px" } },
  li1, li2, li3
);

// Render the unordered list
ReactDOM.render(ul, document.getElementById('root'));
