function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "Hello Tutu, vc é meu amorzinho!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
