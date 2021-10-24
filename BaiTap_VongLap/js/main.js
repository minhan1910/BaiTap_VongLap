
//EX1
function getELE(element) {
    return document.querySelector(element);
}

function findEvenElementLowerThan100() {    
    var content = "";
    for(var i = 0; i < 100; ++i) {
        if(i % 2 == 0) {
            content += (i + " ");
        }
    }
    getELE("#resultEvenEx1").innerHTML = "Số chẵn: " + content;
}

function findOddElementLowerThan100() {
    var content = "";
    for(var i = 1; i < 100; ++i) {
        if(i % 2 != 0) {
            content += (i + " ");
        }
    }
    getELE("#resultOddEx1").innerHTML = "Số chẵn: " + content;
}

getELE("#btnResEx1").onclick = function() {
    findEvenElementLowerThan100();
    findOddElementLowerThan100();
};


//EX2
function countMod3LowerThan1000() {
    var cnt = 0;
    for(var i = 0; i < 1000; ++i) {
        if(i % 3 == 0) ++cnt;
    }
    getELE("#resultEx2").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + cnt + " số";
}

getELE("#btnResEx2").onclick = countMod3LowerThan1000;


//EX3
function ex3() {
    var result = [];
    var sum = 0;
    for(var i = 1;; ++i) {
        var s = (sum += i);
        result.push(s);
        if(s > 10000) break;
    }
    getELE("#resultEx3").innerHTML = "Số nguyên dương nhỏ nhất: " + result.length;
}

getELE("#btnResEx3").onclick = ex3;

//ex4
function calcSum(x, n) {
    var sum = 0;
    for(var i = 1; i <= n; ++i) {
        sum += (Math.pow(x, i));
    }
    return sum;
}

function sum() {
    var x = Number(getELE("#txtX").value);
    var n = Number(getELE("#txtN").value);

    var res = calcSum(x, n);
    getELE("#resultOfEx4").innerHTML = "Tổng = " + res;
}

getELE("#btnEx4").onclick = sum;

//ex5
function factorial(n) {
    var multiple = 1;
    for(var i = 2; i <= n; ++i) {
        multiple *= i;
    }
    return multiple;
}

function ex5() {
    var n = Number(getELE("#txtNFactorial").value);
    var res = factorial(n);

    getELE("#resultOfEx5").innerHTML = "Giai thừa: "  + res;
}

getELE("#btnEx5").onclick = ex5;


//ex6
function ex6() {
    var content = "";
    for(var i = 1; i <= 10; ++i) {
        if(i % 2 == 0) {
            content += "<div class='text-center' style= 'background-color: red; padding-left: 1em; color: white;'>Thẻ thứ" + i + " (DIV chẵn).</div>";
        } else {
            content += "<div class='text-center' style='background-color: blue; padding-left: 1em; color: white;'>Thẻ thứ" + i + " (DIV lẻ).</div>";
        }
    } 
    getELE("#resultOfEx6").innerHTML = content;
}
getELE("#btnEx6").onclick = ex6;


//ex7
function sieve_of_eratosthenes(n) {
    var prime = [n + 1];
    for(var i = 0; i < n; ++i) 
        prime[i] = 1;
    prime[0] = prime[1] = 0;
    for(var i = 2; i*i <= n; ++i) {
        if(prime[i]) {
            for(var j = i*i; j <= n; j += i) 
                prime[j] = 0;
        }
    }

    var content = "";
    for(var i = 2; i <= n; ++i) {
        if(prime[i] == true)
            content += (i + " ");
    }
    return content;
}

function findPrime() {
    var n = Number(getELE("#txtPrime").value);
    var res = sieve_of_eratosthenes(n);

    getELE("#resultOfEx7").innerHTML = res;
}

getELE("#btnEx7").onclick = findPrime;



