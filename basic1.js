var list = [1, 2, 3, 4, 5, 6, 7, 8, 10];
//Step 1 create a array called list from 1-10
//Step 2 using a for loop in a foor loop set two diffrent variables i and j and the loop goes through the whole array length until it stop.
//Step 3 output the result solution and the result in a document write using strings and + to connect a chain to display the whole multiplication with the result.
for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list.length; j++) {
        document.write(list[i] + "*" + list[j] + "=" + (list[i] * list[j]) + "<br>");
    }
}
