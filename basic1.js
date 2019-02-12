var list = [1, 2, 3, 4, 5, 6, 7, 8, 10];
//1.Step create a array called list with the numbers from 1 -10
//2.Step use a for loop in a for loop and create two variables i and j and goes along the array length. 
//3.Step we use document write to output the result while using a chain of strings and for loop variables
for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list.length; j++) {
        document.write(list[i] + "*" + list[j] + "=" + (list[i] * list[j]) + "<br>");
    }
}
