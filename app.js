// Picking DOM Element 
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const year = document.querySelector("#year")
const btn = document.querySelector(".btn")
const tableBody = document.querySelector("#book-list")

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (title.value == "" || author.value == "" || year.value == "") {
        alert("please fill all form field")
    }
    else {

        //making table row 
        const tableRow = document.createElement("tr");

        //title
        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value;
        tableRow.appendChild(newTitle);

        //author
        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = author.value
        tableRow.appendChild(newAuthor);

        //year
        const newYear = document.createElement("th");
        newYear.innerHTML = year.value;
        tableRow.appendChild(newYear);


        //Appending Row To Parent
        tableBody.appendChild(tableRow);

    }
})