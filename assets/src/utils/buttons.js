function loading (button) {
  let el = document.querySelector(`#${button}-button > i`)

  if (el === undefined || el === null) {
    console.log('Error getting button ' + button)
    return
  }

  el.dataset.icon = el.innerHTML
  el.style.opacity = 0

  setTimeout(() => {
    el.classList.add('spin')
    el.innerHTML = 'autorenew'
    el.style.opacity = 1
  }, 100)
}

function done (button, success = true) {
  let el = document.querySelector(`#${button}-button > i`)

  if (el === undefined || el === null) {
    console.log('Error getting button ' + button)
    return
  }

  el.style.opacity = 0

  setTimeout(() => {
    el.classList.remove('spin')
    el.innerHTML = el.dataset.icon
    el.style.opacity = 1
  }, 100)
}

export default {
  loading,
  done
}
