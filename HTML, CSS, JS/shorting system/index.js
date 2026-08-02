class SortSystem {
  constructor() {
    this.bars = [];
    this.barsdiv = [];
    this.barsdata = [];
    this.speed = 2;
    this.isSorting = false;
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
    let bubblesortbtn = document.querySelectorAll("button");
    bubblesortbtn.forEach((e) => {
      e.addEventListener("click", () => {
        if (!this.isSorting) this.sort(e);
      });
    });
  }
  async sort(e) {
    switch (e.id) {
      case "Bubble-Sort":
        await this.bubblesort(this.barsdiv, this.speed);
        break;
      case "Selection-Sort":
        await this.SelectionSort(this.barsdiv, this.speed);
        break;
      case "Insertion-Sort":
        await this.InsertionSort(this.barsdiv, this.speed);
        break;
      case "Merge-Sort":
        await this.MergeSort(this.barsdiv, this.speed);
        break;
      default:
        break;
    }
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
  }
  async SelectionSort(a, dl) {
    this.isSorting = true;
    console.log(a);

    for (let i = 0; i < a.length; i++) {
      let min = a[i];
      let mini = i;
      for (let j = i + 1; j < a.length; j++) {
        a[j].classList.add("yellow");
        if (parseInt(min.style.height) > parseInt(a[j].style.height)) {
          a[j].classList.add("red");
          min.classList.remove("red");
          min = a[j];
          mini = j;
        }
        await this.delay((dl * 100) / 2);
        a[j].classList.remove("yellow");
      }
      min.classList.remove("red");
      let temp = a[i].style.height;
      a[i].style.height = min.style.height;
      a[i].classList.add("red");
      await this.delay((dl * 100) / 2);
      a[i].classList.remove("red");
      a[i].classList.add("green");
      a[mini].style.height = temp;
    }
    this.isSorting = false;
  }
  async InsertionSort(a, dl) {
    this.isSorting = true;
    for (let i = 1; i < a.length; i++) {
      a[i].classList.add("yellow");
      let temp = a[i].style.height;
      let j = i - 1;
      while (j >= 0 && parseInt(a[j].style.height) > parseInt(temp)) {
        a[j].classList.add("red");
        await this.delay((dl * 100) / 2);
        a[j + 1].style.height = a[j].style.height;
        a[j].classList.remove("red");
        j--;
      }
      a[j + 1].style.height = temp;
      a[i].classList.remove("yellow");
    }
    for (let i = 0; i < a.length; i++) {
      await this.delay((dl * 100) / 3);
      a[i].classList.add("green");
    }
    this.isSorting = false;
  }
  async MergeSort(a, dl) {
    this.isSorting = true;
    await this.MergeSortHelper(a, 0, a.length - 1, dl);
    for (let i = 0; i < a.length; i++) {
      a[i].classList.add("green");
      await this.delay((dl * 100) / 3);
    }
    this.isSorting = false;
  }

  async MergeSortHelper(a, start, end, dl) {
    if (start >= end) {
      return;
    }
    let mid = Math.floor((start + end) / 2);
    await this.MergeSortHelper(a, start, mid, dl);
    await this.MergeSortHelper(a, mid + 1, end, dl);

    await this.MergeSorter(a, start, mid, end, dl);
  }
  async MergeSorter(a, start, mid, end, dl) {
    let leftarray = [];
    let rightarray = [];
    for (let i = start; i <= mid; i++) {
      leftarray.push(a[i].style.height);
    }
    for (let i = mid + 1; i <= end; i++) {
      rightarray.push(a[i].style.height);
    }
    let l = 0;
    let r = 0;
    let k = start;

    while (l < leftarray.length && r < rightarray.length) {
      a[k].classList.add("yellow");
      await this.delay((dl * 100) / 2);
      if (parseInt(leftarray[l]) < parseInt(rightarray[r])) {
        a[k].style.height = leftarray[l];
        l++;
      } else {
        a[k].style.height = rightarray[r];
        r++;
      }

      a[k].classList.remove("yellow");

      k++;
    }
    while (l < leftarray.length) {
      a[k].classList.add("yellow");
      await this.delay((dl * 100) / 2);
      a[k].style.height = leftarray[l];
      a[k].classList.remove("yellow");
      l++;
      k++;
    }
    while (r < rightarray.length) {
      a[k].classList.add("yellow");
      await this.delay((dl * 100) / 2);
      a[k].style.height = rightarray[r];
      a[k].classList.remove("yellow");
      r++;
      k++;
    }
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
