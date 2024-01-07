"use strict"

document.addEventListener("click", documentsActions);

function documentsActions(e) {
    const targerElement = e.target;

    if (targerElement.closest('.burger')) {
        document.documentElement.classList.toggle('burger-open');
    }
}

