var photo = ["../img/pizza.jpg", "../img/cevap.jpg", "../img/humus.jpg"];
var price = ["10$", "8$", "3$"];
var descrp = ["Pizza", "Cevapcici", "Humus"];
function rest(a) {
    for (var i = 0; i < a.length; i++) {
        document.write(a[i] + "<br>");
    }
}
rest(price);
rest(descrp);
for (var _i = 0, photo_1 = photo; _i < photo_1.length; _i++) {
    var b = photo_1[_i];
    document.write("<img src='" + b + "'> <br>");
}
