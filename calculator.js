let c = confirm("Enter the calculator");

let f = "";
let o = "";
let s = "";
let r = 0;

// These MUST be outside the loop
let total = 0;
let count = 0;
let min = Infinity;
let max = -Infinity;
let rows = "";

while(c){
    f = prompt("Enter first number");
    o = prompt("Enter operator (+,-,*,/)");
    s = prompt("Enter second number");

    let num1 = parseFloat(f);
    let num2 = parseFloat(s);

    switch(o){
        case "+": r = num1 + num2; break;
        case "-": r = num1 - num2; break;
        case "*": r = num1 * num2; break;
        case "/": r = num2 !== 0 ? num1 / num2 : "Error"; break;
        default: r = "Invalid";
    }

    // Add row to stored string (NOT document.write)
    rows += "<tr style='text-align:center'>" +
            "<td>"+ f +"</td>" +
            "<td style='background-color:orange'>"+ o +"</td>" +
            "<td>"+ s +"</td>" +
            "<td>"+ r +"</td>" +
            "</tr>";

    if(typeof r === "number" && !isNaN(r)){
        total += r;
        count++;
        if(r < min) min = r;
        if(r > max) max = r;
    }

    c = confirm("Do another calculation?");
}

// Now build tables AFTER loop finishes

let avg = 0;
if(count !== 0){
    avg = total / count;
}

document.body.innerHTML =
    "<table border='1'>" +
    "<tr style='background-color:green'>" +
    "<th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>" +
    rows +
    "</table>" +

    "<br><table border='1'>" +
    "<tr style='background-color:green'>" +
    "<th>Min</th><th>Max</th><th>Avg</th><th>Total</th></tr>" +
    "<tr style='text-align:center'>" +
    "<td>"+ min +"</td><td>"+ max +"</td><td>"+ avg +"</td><td>"+ total +"</td>" +
    "</tr></table>";
