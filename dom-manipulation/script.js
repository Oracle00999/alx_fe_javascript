document.addEventListener("DOMContentLoaded", function () {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const btn = document.getElementById("newQuote");
  const newQuoteText = document.getElementById("newQuoteText");
  const newQuoteCategory = document.getElementById("newQuoteCategory");
  const addQuotebtn = document.getElementById("addQuote");

  // Array that stores quote objects
  const quoteObjects = [
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      category: "Inspiration",
    },
    {
      text: "Do not watch the clock. Do what it does. Keep going.",
      category: "motivation",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      category: "life",
    },
  ];

  //   funtion to display random quotes
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quoteObjects.length);
    const randomQuote = quoteObjects[randomIndex];
    quoteDisplay.textContent = `${randomQuote.text} - category : ${randomQuote.category}`;
  }
  btn.addEventListener("click", showRandomQuote);

  //   createAddQuoteForm function
  function createAddQuoteForm() {
    const newQuoteTextValue = newQuoteText.value.trim();
    const newQuoteCategoryValue = newQuoteCategory.value.trim();
    if (newQuoteTextValue !== "" && newQuoteCategory !== "") {
      const newQuote = {
        text: newQuoteTextValue,
        category: newQuoteCategoryValue,
      };
      quoteDisplay.innerHTML = `${newQuote.text} - category ${newQuote.category}`;
      console.log(newQuoteTextValue);
      console.log(newQuoteCategoryValue);
      quoteObjects.push(newQuote);
      console.log(quoteObjects);

      //   clear inputs
      document.getElementById("newQuoteText").value = "";
      document.getElementById("newQuoteCategory").value = "";
    } else if (newQuoteTextValue == "" || newQuoteCategory == "") {
      alert("fill in both fields");
    } else {
      alert("quotes cant be empty");
    }
  }
  addQuotebtn.addEventListener("click", createAddQuoteForm);
});

