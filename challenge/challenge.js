var photo = ["../img/pizza.jpg", "../img/cevap.jpg", "../img/humus.jpg"];
var price = ["10$", "8$", "3$"];
var descrp = ["Pizza", "Cevapcici", "Humus"];
var x = price[0], y = price[1], z = price[2];
for (var b in photo) {
    document.getElementsByClassName("main")[0].innerHTML += ("<div class='col-lg-4'><img src='" + photo[b] + "'><h2>" + descrp[b] + "</h2><p> " + price[b] + "</p> <p class='all'></p><br></div>");
}
document.getElementsByClassName("all")[0].innerHTML = "<h2> Today special offer for menu instead of " + x + " it will be " + y + "</h2>";
