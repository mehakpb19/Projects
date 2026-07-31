class SortSystem {
  constructor() {
    this.bars = [];
    this.barsdiv = [];
    this.barsdata = [];
    this.speed = 2;
    this.isSorting=false;
    this.updatebars(20);
    let input = document.querySelectorAll("input");
    input.forEach((el) => {
      el.addEventListener(
        "input",
        debounce((...args) => {
          this.syncControl(el);
        }, 500),
      );
    });
    let bubblesort = document.querySelector("#Bubble-Sort");
    bubblesort.addEventListener("click", () => {
      if (!this.isSorting) this.sort();
    });
  }
  async sort() {
    await this.bubblesort(this.barsdiv, this.speed);
  }
  
  async bubblesort(a, dl) {
    this.isSorting = true;
    for (let j = a.length; j > 0; j--) {
      for (let i = 0; i < j - 1; i++) {
        a[i].classList.add("yellow");
        a[i + 1].classList.add("yellow");
        if (
          parseInt(a[i].style.height) > parseInt(a[i + 1].style.height) &&
          a[i + 1]
        ) {
          a[i + 1].classList.toggle("yellow");
          a[i + 1].classList.toggle("red");
          
          await this.delay((dl * 100) / 2);
          let tempHeight = a[i].style.height;
          a[i].style.height = a[i + 1].style.height;
          a[i + 1].style.height = tempHeight;
          
          a[i + 1].classList.toggle("yellow");
          a[i + 1].classList.toggle("red");
          a[i].classList.toggle("red");
          await this.delay((dl * 100) / 2);
        }
        a[i].classList = "bar";
        a[i + 1].classList = "bar";
      }
      a[j - 1].classList.toggle("green");
    }
    this.isSorting = false;
    return await a;
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  syncControl(el) {
    let barinput = document.querySelector("#bar-input");
    let countval = document.querySelector("#count-val");
    let speedinput = document.querySelector("#speed-input");
    let speedval = document.querySelector("#speed-val");
    switch (el.id) {
      case "bar-input":
        countval.value = el.value;
        this.updatebars(el.value);
        break;
      case "count-val":
        if (el.value > 100) {
          alert("enter the value till 100 plz");
        } else {
          barinput.value = el.value;
          this.updatebars(el.value);
        }
        break;
      case "speed-input":
        speedval.value = el.value;
        this.speed = el.value;
        break;
      case "speed-val":
        if (el.value > 10) {
          alert("enter the value till 10 plz");
        } else {
          speedinput.value = el.value;
          this.speed = el.value;
        }
        break;
      default:
        break;
    }
  }
  updatebars(val) {
    this.bars = [];
    for (let i = 0; i < val; i++) {
      this.bars.push(Math.floor(Math.random() * (400 - 10 + 1)) + 10);
    }
    let space = document.createDocumentFragment();
    this.barsdiv = [];
    for (let j = 0; j < this.bars.length; j++) {
      let bar = document.createElement("div");
      bar.style.height = `${this.bars[j]}px`;
      bar.classList.add("bar");
      space.append(bar);
      this.barsdiv.push(bar);
    }
    let barsdiv = document.querySelector("#bars");
    barsdiv.innerHTML = "";
    barsdiv.append(space);
  }
}
function debounce(fnc, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fnc(...args);
    }, delay);
  };
}
let sortSystem = new SortSystem();
