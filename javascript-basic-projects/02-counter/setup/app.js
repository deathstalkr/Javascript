let count = 0

const btns = document.querySelectorAll(".btn")

const value = document.getElementById("value")


btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
    const styles = event.currentTarget.classList
    if (styles.contains("decrease")) {
        count--
    }
    else if (styles.contains("increase")) {
        count++
    }
    else{
        count = 0
    }
    if(count < 0){
        value.style.color = "red"
        // document.body.style.backgroundColor = "red"
    }
    if (count > 0) {
        value.style.color = "green"
        // document.body.style.backgroundColor = "green"
    }
    if (count === 0) {
        value.style.color = "#222"
        // document.body.style.backgroundColor = "hsl(210, 36%, 96%)"
    }
    value.textContent = count
    })
})