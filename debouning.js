function add(num1, num2) {
  console.log(num1 + num2);
}

function debounce() {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(add, 2000, ...args);
  };
}

let timer = debounce();
timer(4, 6);
timer(4, 8);
