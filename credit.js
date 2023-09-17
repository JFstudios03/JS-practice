function buycredit(){
    let option = prompt("To buy credit, press 1. If not, press 2");
    if (option == 1) {
        let amount = prompt("Enter amount\n\n E.g #100, #200, #300\n\n Note purchases attract a rate of 5%");

        if (amount >= 50) {
            var purchase = Number(amount) * (105 / 100);
            alert("Amount to be deducted is #" + purchase);
            let confirmPurchase = prompt("Press 1 to proceed\nPress 2 to cancel");
            
            if (confirmPurchase == 1) {
                alert("You have successfully purchased #" + amount + " credit");
            } else {
                alert("Thanks. We will love to see you again.")
            }
        }
        if (amount < 50) {
            let amount = prompt("Amount can't be less than #50");


            if (amount < 50) {
                alert("Try again with an amount greater or equal to #50")
            } else if (amount >= 50) {
                var purchase = Number(amount) * (105 / 100);
                alert("Amount to  be deducted is #" + purchase);
                let confirmPurchase = prompt("Press 1 to proceed\nPress 2 to cancel");
                
                if (confirmPurchase == 1) {
                    alert("You have successfully purchased #" + amount + " credit");
                } else {
                    alert("Thanks. We will love to see you again.")
                }
            }
        }
        
    } else if (option == 2) {
        alert("Thanks. We will love to see you again.")
    }
}

// For calculator
function calculator() {
    let a = prompt("Enter first number");
    let b = prompt("Enter second number");
    let op = prompt("Enter Operator\n\n*  for multiplication\n/  for division\n-  for subtraction\n+  for addition");
    op == "*"
    ? ans = Number(a)*Number(b)
    : op == "/"
    ? ans = Number(a)/Number(b)
    : op == "-"
    ? ans = Number(a)-Number(b)
    : op == "+"
    ? ans = Number(a)+Number(b)
    : alert("Invalid input")

    op == "*"
    ? alert(a + " * " + b + " = " +ans)
    : op == "/"
    ? alert(a + " / " + b + " = " +ans)
    : op == "-"
    ? alert(a + " - " + b + " = " +ans)
    : op == "+"
    ? alert(a + " + " + b + " = " +ans)
    : "Invalid input"
}

// For hello

function changeName(){
    let name = prompt("Input your name")

    if (name == "") {
        document.getElementById("greeting").textContent="We will love to meet you!"
    } else {
        document.getElementById("greeting").textContent=`Hello, ${name}!`
    }

}