let expense_per_category = {Food:0,Travel:0,Entertainment:0,Groceries:0,Others:0};  //declaring an array of elements which holds the expense amount the user has spent wrt their categories
  
  var count = 4;  //size of the array
  
  function update_sum(category) {   //updates the values of the amount spent on each category
    console.log("inside update_sum");
  
    for (item in expense_per_category) {
      if (category === item) {
        document.getElementById(category.toLowerCase()).innerHTML = " - " + expense_per_category[item] + " Rs. Spent ";
      }
    }
  }
  
  function add_expense() {
    console.log("inside add_expense");
    var amount = document.getElementsByClassName("form-input")[0].value;   //we get values from inputs of add_category form 
    var category = document.getElementById("category").value;
    var date = document.getElementsByClassName("form-input")[1].value;
    var note = document.getElementsByClassName("form-input")[2].value;
    console.log(amount + " " + category + " " + date + " " + note);       //creates a message that includes the entered amount, category, date, and note. This message is then logged to the console.
  
    if (amount && date && note && category) {
      alert("SUCCESSFULLY ADDED EXPENSE!!");    //if all the values are present then the alert is displayed 
  
      var table = document.getElementsByTagName("table")[0];   //updating the expenses into the expenses table
  
      var new_row = document.createElement("tr");    //for creating a new row
  
      new_row.innerHTML = `<tr style=border-bottom:1px solid white;>    
  
      <td>${amount}</td>
  
      <td>${category}</td>
  
      <td>${date}</td>
  
      <td>${note}</td>
  
      </tr>
  
      `;          //adding the details of the row 
  
      table.appendChild(new_row);   //appending the new row
  
      expense_per_category[category] = parseInt(expense_per_category[category]) + parseInt(amount);   //to update the amount spent on the current category in the category section

      console.log(expense_per_category[category]);
  
      update_sum(category);    //calling update_sum function to update the values again
  
      console.log(count);
  
      document.getElementsByClassName("add-new-expense")[0].style.display ="none"; //to hide the form
    }
    
    else {
      alert("Please enter all the details!!");
    }
  }
  
  function add_category() {
    var new_category_value = document.getElementsByName("new-category")[0].value;   //we get the names of the new categories
    console.log("inside add_category");
    if (new_category_value) {
      var dropdown = document.getElementsByName("category")[0]; //if the value is present, we get the selected tags
  
      var available_categories = document.getElementsByClassName("available-categories")[0];
  
      var new_category_option = document.createElement("option");  //for a new option
  
      new_category_option.innerHTML = `<option value=${new_category_value}>${new_category_value}</option>`;   //to add the contents of the option tag 
  
      count++;  //incrementing because a new category is added
  
      expense_per_category[new_category_value] = 0;
  
      var new_category_span = document.createElement("span");  //to update the span of available categories
  
      new_category_span.innerHTML = `<span>${new_category_value}:<span id="${new_category_value.toLowerCase()}">Rs Spent</span></span>`;
  
      console.log(expense_per_category);
      dropdown.appendChild(new_category_option);    //to add the option tag and the new category span tag 
  
      available_categories.appendChild(new_category_span);
  
      document.getElementsByClassName("add-category")[0].style.display = "none";  //to hide form
    }
  }
  
  function add_category_page() {
    if (document.getElementsByClassName("add-category")[0].style.display == "block") {  //if the elements style is none, we display it as block
      document.getElementsByClassName("add-category")[0].style.display = "none";        //else we display it as none
    } 
    else {
      document.getElementsByClassName("add-category")[0].style.display = "block";
    }
  }
  
  function add_expense_page() {
    if (document.getElementsByClassName("add-new-expense")[0].style.display =="block") {        //same
      document.getElementsByClassName("add-new-expense")[0].style.display ="none";
    }
    else {
      document.getElementsByClassName("add-new-expense")[0].style.display ="block";
    }
  }