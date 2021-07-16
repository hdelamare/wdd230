function gridView() {
    let grid = document.querySelector('.cards');
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "1fr 1fr 1fr";
}

function listView() {
    let list = document.querySelector('.cards');
    list.style.display = "grid";
    list.style.gridTemplateColumns = "1fr";
}

function revertStyle(x) {
    let grid = document.querySelector('.cards');

    if (x.matches) { 
      grid.style.gridTemplateColumns = "1fr";
    } else {
        grid.style.gridTemplateColumns = "1fr 1fr 1fr";
    }
  }
  
  var x = window.matchMedia("(max-width: 45rem)")
  revertStyle(x)
  x.addListener(revertStyle)