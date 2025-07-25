document.addEventListener("DOMContentLoaded", function () {
  
  // Our Work
  const filters = document.querySelectorAll(".filter")
  const items = document.querySelectorAll(".work-item")

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      filters.forEach((f) => f.classList.remove("active"))
      filter.classList.add("active")

      const category = filter.dataset.filter

      items.forEach((item) => {
        if (category === "all" || item.classList.contains(category)) {
          item.classList.remove("d-none")
        } else {
          item.classList.add("d-none")}})})})
  
  // Subscribe
  const formSubscribe = document.getElementById("subscribeForm")
  const emailInput = document.getElementById("emailInput")
  const error1 = document.getElementById("emailError1")
  const error2 = document.getElementById("emailError2")
  const warningBox = document.getElementById("warningBox")

  if (formSubscribe) {
    formSubscribe.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = emailInput.value.trim()
      let valid = true

      // Reset
      error1.classList.add("d-none")
      error2.classList.add("d-none")
      warningBox.classList.add("d-none")

      if (email === "") {
        error1.classList.remove("d-none")
        valid = false
      } else {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!regex.test(email)) {
          error2.classList.remove("d-none")
          valid = false}}

      if (!valid) {
        warningBox.classList.remove("d-none")
      } else {
        alert("Subscribed successfully!")}})}

  // Owl Carousel
  $(document).ready(function () {
    var owl = $(".owl-carousel")
    owl.owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        992: { items: 2 }}})

    $(".custom-next").click(function () {
      owl.trigger("next.owl.carousel")})

    $(".custom-prev").click(function () {
      owl.trigger("prev.owl.carousel")})})
            
  // Contact Form
  const form = document.getElementById("contactForm")
  const nameInput = document.getElementById("name")
  const emailInput2 = document.getElementById("email")
  const subjectInput = document.getElementById("subject")
  const messageInput = document.getElementById("message")

  const nameError = document.getElementById("nameError")
  const emailEmptyError = document.getElementById("emailEmptyError")
  const emailInvalidError = document.getElementById("emailInvalidError")
  const subjectError = document.getElementById("subjectError")
  const messageError = document.getElementById("messageError")

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault()

      nameError.classList.add("d-none");
      emailEmptyError.classList.add("d-none")
      emailInvalidError.classList.add("d-none")
      subjectError.classList.add("d-none")
      messageError.classList.add("d-none")

      let hasError = false

      if (nameInput.value.trim() === "") {
        nameError.classList.remove("d-none")
        hasError = true}

      if (emailInput2.value.trim() === "") {
        emailEmptyError.classList.remove("d-none")
        hasError = true
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput2.value)) {
        emailInvalidError.classList.remove("d-none")
        hasError = true}

      if (subjectInput.value.trim() === "") {
        subjectError.classList.remove("d-none")
        hasError = true}

      if (messageInput.value.trim() === "") {
        messageError.classList.remove("d-none")
        hasError = true}

      if (!hasError) {
        alert("Form submitted successfully!")
        form.reset()}})}
      
  // Back to Top Arrow
const backToTopBtn = document.getElementById("backToTop")

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block"
  } else {
    backToTopBtn.style.display = "none"}})

backToTopBtn.addEventListener("click", function (e) {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: "smooth"})})})
