const totalPages = 80;

// Descobre em qual página estamos
const path = window.location.pathname;

let currentPage;

if (path.includes("/aulas/")) {
    // Pega o nome do arquivo: 02.html, 03.html etc.
    const fileName = path.split("/").pop();
    currentPage = parseInt(fileName.replace(".html", ""), 10);
} else {
    // index.html = aula 01
    currentPage = 1;
}


// Elementos da página
const currentPageElement =
    document.getElementById("currentPage");

const totalPagesElement =
    document.getElementById("totalPages");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const previousButtonBottom =
    document.getElementById("previousButtonBottom");

const nextButtonBottom =
    document.getElementById("nextButtonBottom");


totalPagesElement.textContent = totalPages;

function nextPage() {

    if (currentPage >= totalPages) {
        return;
    }

    const nextPageNumber = currentPage + 1;

    if (nextPageNumber === 1) {

        window.location.href = "../index.html";

    } else {

        const path = window.location.pathname.includes("/aulas/")
            ? "./"
            : "./aulas/";

        window.location.href =
            `${path}${String(nextPageNumber).padStart(2, "0")}.html`;
    }
}


function previousPage() {

    if (currentPage <= 1) {
        return;
    }

    const previousPageNumber = currentPage - 1;

    if (previousPageNumber === 1) {

        window.location.href = "../index.html";

    } else {

        const path = window.location.pathname.includes("/aulas/")
            ? "./"
            : "./aulas/";

        window.location.href =
            `${path}${String(previousPageNumber).padStart(2, "0")}.html`;
    }
}


const darkModeToggle =
    document.getElementById("darkModeToggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    darkModeToggle.checked = true;
}


darkModeToggle.addEventListener(
    "change",
    function () {

        if (this.checked) {

            document.body.classList.add("dark");

            localStorage.setItem("theme", "dark");

        } else {

            document.body.classList.remove("dark");

            localStorage.setItem("theme", "light");
        }
    }
);

updatePagination();