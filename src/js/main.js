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

    PDFObject.embed("/assets/ALP-Resume-2025.pdf", pdfDiv, {
      title: "Andy Lynn Parker | Resume",
      zoom: "page-width",
      pagemode: "none"
    })
  }

  const lightboxButtons = document.querySelectorAll("button.lightbox")

  if (lightboxButtons.length) {
    const dialog = document.querySelector("dialog.lightbox")
    const dialogImage = dialog.querySelector("img")
  
    const showLightbox = (button, e) => {
      const srcImg = button.querySelector("img")
      dialogImage.src = srcImg.src
      dialogImage.srcset = srcImg.srcset
      dialogImage.width = srcImg.width
      dialogImage.height = srcImg.height
      dialogImage.sizes = srcImg.sizes
      dialog.classList.toggle("pad", button.classList.contains("pad-lightbox"))

      dialog.showModal()
      e.stopPropagation()
      e.preventDefault()
    }

    const hideLightbox = (e) => {
      e.stopPropagation()
      e.preventDefault()
      if (e.button !== 2) {
        dialog.close()
      }
    }

    lightboxButtons.forEach((button) => {
      button.onclick = (e) => showLightbox(button, e)
    })

    dialog.onmousedown = hideLightbox
  }
}

"loading" === document.readyState ?
  document.addEventListener("DOMContentLoaded", init, false) :
  init()
