// Counter

 document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter")
  let started = false

  function startCount(counter) {
    const target = +counter.getAttribute("data-target")
    let count = 0
    const speed = 300
    const step = Math.ceil(target / speed)

    const interval = setInterval(() => {
      count += step
      if (count >= target) {
        counter.textContent = target
        clearInterval(interval)
      } else {
        counter.textContent = count}}, 10)}

  function checkCountersInView() {
    const section = document.querySelector(".counter")?.closest("section")
    if (!section) return

    const rect = section.getBoundingClientRect()
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0

    if (isVisible && !started) {
      counters.forEach(counter => startCount(counter))
      started = true}}

  window.addEventListener("scroll", checkCountersInView)})


