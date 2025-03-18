"use strict";

const init = () => {
  const pdfDiv = document.querySelector(".resume-pdf")
  if (pdfDiv) {
    const header = document.querySelector("header")
    const hRect = header.getBoundingClientRect()
    
    const footer = document.querySelector("footer")
    const fRect = footer.getBoundingClientRect()

    pdfDiv.style.height = `calc(100vh - (${hRect.height}px + ${fRect.height}px + 4rem))`
    pdfDiv.style.width = "100%"

    PDFObject.embed("/assets/ALP-Resume-2025.pdf", pdfDiv)
  }

  const lightboxButtons = document.querySelectorAll("button.lightbox")

  if (lightboxButtons.length) {
    const dialog = document.querySelector("dialog.lightbox")
    const dialogImage = dialog.querySelector("img")
  
    const showLightbox = (button) => {
      dialogImage.src = button.dataset.img
      dialog.showModal()
      e.stopPropagation()
      e.preventDefault()
    }

    const hideLightbox = (e) => {
      e.stopPropagation()
      e.preventDefault()
      dialog.close()
    }

    lightboxButtons.forEach((button) => {
      button.onclick = () => showLightbox(button)
    })

    dialog.onmousedown = hideLightbox
  }
}

"loading" === document.readyState ?
  document.addEventListener("DOMContentLoaded", init, false) :
  init()