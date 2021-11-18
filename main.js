//Lista som ska vara global
let myList1 = [];
let myList2 = [];

document.querySelector("#addBtn").addEventListener("click", function(e){
    e.preventDefault()

    const option = document.querySelector(".form-select").value
    console.log(option)
    let description = document.querySelector("#input-description").value
    let money = document.querySelector("#input-value").value

    if(!description || !money) return alert ("Please fill in information!")
    let li = document.createElement("li")
    li.innerText = description + " " + money
    li.setAttribute("class", "list-group-item")
    let btn = document.createElement("button")
     btn.setAttribute("class", "removeBtn")
     btn.textContent="Remove"
    //console.log(li)

    //if income
    if (option == "+") {
        document.querySelector("#myList1").appendChild(li)
        document.querySelector("#myList1").appendChild(btn)
        myList1.push(money)

    }

    else {
        document.querySelector("#myList2").appendChild(li)
        document.querySelector("#myList2").appendChild(btn)
        myList2.push(money)
    }

    document.querySelector("#input-description").value=""
    document.querySelector("#input-value").value=""

    var incomeAmount = 0;

    for (var i = 0; i < myList1.length; i++){
        incomeAmount += Number(myList1[i]);
     
    }
    const incomes = document.querySelector(".incomeList")
    incomes.textContent = incomeAmount

    var expenseAmount = 0;

    for (var i = 0; i < myList2.length; i++){
        expenseAmount += Number(myList2[i]);
    }

    const expenses = document.querySelector(".expenseList")
    expenses.textContent = expenseAmount

    const balances = document.querySelector(".balanceList")
    balances.textContent = incomeAmount - expenseAmount

 
})