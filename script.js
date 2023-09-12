const form = document.querySelector("#form");
const list = document.querySelector("#list");
const item = document.querySelector("#item");

form.addEventListener("submit", (e) => {
  //This code adds an event listener to the form element. It listens for the "submit" event (which is triggered when the form is submitted) and specifies a callback function to run when the event occurs.
  e.preventDefault(); //Within the event callback function, this line prevents the default behavior of form submission, which would typically refresh the page. This prevents the page from reloading when you submit the form.

  if (item.value.trim() !== "") {
    //his conditional statement checks if the value of the item input field, after trimming whitespace, is not an empty string.
    const li = document.createElement("li");
    li.textContent = item.value; //This line sets the text content of the newly created list item (li) to the value of the input field (item.value), effectively displaying the input value as a list item.
    list.appendChild(li); //This line appends the newly created list item (li) to the unordered list (list). This adds the input value as a new item in the list.

    item.value = ""; //After adding the input value to the list, this line clears the input field by setting its value to an empty string.
    li.addEventListener("click", () => {
      //When a list item is clicked, it toggles the text decoration to "line-through," essentially striking through the text, giving the appearance of marking the item as completed.
      li.style.textDecoration = "line-through";
    });
  }
});
