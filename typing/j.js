
let quote = document.getElementById("quoteDisplay");
let url = "https://apis.ccbp.in/random-quote";
let spinner = document.getElementById("spinner");
let options = {
    method: "GET"
}
let count = 0;
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        quote.textContent = data.content;
    })

let con = document.getElementById("speedTypingTest")
let timer = document.getElementById("timer");
let result = document.getElementById("result");
let submit = document.getElementById("submitBtn");
let reset = document.getElementById("resetBtn");
let textarea = document.getElementById("quoteInput");
timer.textContent = 0;
timer.style.fontSize = "40px";
let x = setInterval(function() {
    count = count + 1;
    timer.textContent = count;
}, 1000);
submit.addEventListener('click', function() {
    if (textarea.value !== quote.textContent) {
        result.textContent = "You typed incorrect sentence";
    } else {
        clearInterval(x);
        result.textContent = "you typed in " + timer.textContent + " seconds";

    }
});

reset.addEventListener('click', function() {
    textarea.value = "";
    result.textContent = "";
    con.classList.add("d-none");
    spinner.classList.remove("d-none");
    con.classList.remove("d-none");
    spinner.classList.add("d-none");
    timer.textContent = 0;
    count = 0;
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            quote.textContent = data.content;
        });
    let x = setInterval(function() {
        count = count + 1;
        timer.textContent = count;
    }, 1000);
    submit.addEventListener('click', function() {
        if (textarea.value !== quote.textContent) {
            result.textContent = "You typed incorrect sentence";
        } else {
            clearInterval(x);
            result.textContent = "you typed in " + timer.textContent + " seconds";

        }
    });

})