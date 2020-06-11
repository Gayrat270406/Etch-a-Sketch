initPage();

function buildGrid(rowlength = 16) {
  const parent = document.getElementById("grdContainer");

  while (parent.children.length) parent.removeChild(parent.children[0]);

  let div = document.createElement("DIV");
  div.style.backgroundColor = "white";
  div.style.width = 100 / rowlength + "%";
  div.style.height = 100 / rowlength + "%";

  for (let i = 0; i < rowlength ** 2; i++) {
    let clone = div.cloneNode();
    clone.addEventListener("mouseover", function () {
      let randoColor = Math.floor(Math.random() * 16581375).toString(16);
      let color = "#" + randoColor;
      this.style.backgroundColor = color;
    });
    parent.appendChild(clone);
  }
}

function initPage() {
  buildGrid();
  document.getElementById("clearButton").addEventListener("click", clearGrid);
}

function clearGrid() {
  const gridSize = Math.sqrt(
    document.getElementById("grdContainer").children.length
  );
  buildGrid(gridSize);
}
