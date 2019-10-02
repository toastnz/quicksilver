function attach(event, func, delay = false) {
  let throttle = false; // not throttled
  let debounce = false; // holder debounce

  func(); // initialise function before adding event handlers

  const attachment = () => {
    if (delay) {
      // throttle
      if (!throttle) {
        throttle = true;
        func();
        setTimeout(() => throttle = 0, delay);
      }
      // debounce
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        func();
      }, delay);
    } else {
      func();
    }
  }

  event.split(' ').forEach((type) => {
    window.addEventListener(type, () => attachment());
  })

}

module.exports = attach;