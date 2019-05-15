
return function sampleComponent() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(["Hello", "webpack"], ' ');
  element.classList.add("hello");
  element.classList.add("hello--blue");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}
