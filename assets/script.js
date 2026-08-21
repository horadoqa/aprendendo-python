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

// updatePagination();


document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // ELEMENTOS DA BUSCA
    // =====================================================

    const searchButton =
        document.getElementById("searchButton");

    const searchBox =
        document.getElementById("searchBox");

    const searchInput =
        document.getElementById("searchInput");

    const clearSearch =
        document.getElementById("clearSearch");

    const searchResults =
        document.getElementById("searchResults");


    // =====================================================
    // VERIFICAR ELEMENTOS
    // =====================================================

    if (!searchButton) {

        console.error(
            "❌ Botão de busca não encontrado."
        );

        return;

    }


    if (!searchBox) {

        console.error(
            "❌ Caixa de busca não encontrada."
        );

        return;

    }


    console.log(
        "✅ Sistema de busca carregado."
    );


    // =====================================================
    // ABRIR BUSCA
    // =====================================================

    searchButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            searchBox.classList.toggle(
                "active"
            );


            if (
                searchBox.classList.contains(
                    "active"
                )
            ) {

                searchInput.focus();

            }

        }
    );


    // =====================================================
    // LIMPAR BUSCA
    // =====================================================

    clearSearch.addEventListener(
        "click",
        function () {

            searchInput.value = "";

            searchResults.innerHTML = "";

            searchInput.focus();

        }
    );


    // =====================================================
    // PESQUISAR
    // =====================================================

    searchInput.addEventListener(
        "input",
        function () {

            const termo =
                searchInput.value.trim();


            if (!termo) {

                searchResults.innerHTML = "";

                return;

            }


            pesquisarAulas(termo);

        }
    );


    // =====================================================
    // FECHAR AO CLICAR FORA
    // =====================================================

    document.addEventListener(
        "click",
        function (event) {

            if (
                !event.target.closest(
                    ".search-container"
                )
            ) {

                searchBox.classList.remove(
                    "active"
                );

                searchResults.innerHTML = "";

            }

        }
    );


    // =====================================================
    // CARREGAR AULAS
    // =====================================================

    let aulas = [];


    async function carregarAulas() {

        try {

            const response =
                await fetch("../aulas.json");


            if (!response.ok) {

                throw new Error(
                    "Erro ao carregar aulas.json"
                );

            }


            aulas =
                await response.json();


            console.log(
                "✅ Aulas carregadas:",
                aulas.length
            );


        } catch (error) {

            console.error(
                "❌ Erro:",
                error
            );

        }

    }


    // =====================================================
    // REGEX
    // =====================================================

    function pesquisarAulas(termo) {

        let regex;


        try {

            const termoSeguro =
                termo.replace(
                    /[.*+?^${}()|[\]\\]/g,
                    "\\$&"
                );


            regex =
                new RegExp(
                    termoSeguro,
                    "i"
                );


        } catch (error) {

            console.error(
                "Erro na Regex:",
                error
            );

            return;

        }


        const resultados =
            aulas.filter(
                function (aula) {

                    return (

                        regex.test(
                            String(aula.numero)
                        )

                        ||

                        regex.test(
                            aula.titulo
                        )

                    );

                }
            );


        mostrarResultados(
            resultados
        );

    }


    // =====================================================
    // MOSTRAR RESULTADOS
    // =====================================================

    function mostrarResultados(
        resultados
    ) {

        searchResults.innerHTML = "";


        if (
            resultados.length === 0
        ) {

            searchResults.innerHTML = `

                <div class="search-no-results">

                    🔎 Nenhuma aula encontrada.

                </div>

            `;

            return;

        }


        resultados.forEach(
            function (aula) {

                const link =
                    document.createElement("a");


                link.className =
                    "search-result";


                link.href =
                    "../" + aula.arquivo;


                link.innerHTML = `

                    <span class="search-result-number">

                        Aula ${aula.numero}

                    </span>

                    <span class="search-result-title">

                        ${aula.titulo}

                    </span>

                `;


                searchResults.appendChild(
                    link
                );

            }
        );

    }


    // =====================================================
    // INICIALIZAR
    // =====================================================

    carregarAulas();

});