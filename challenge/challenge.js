var photo = ["../img/pizza.jpg", "../img/cevap.jpg", "../img/humus.jpg"];
var price = ["10$", "8$", "3$"];
var descrp = ["Pizza", "Cevapcici", "Humus"];
var x = price[0], y = price[1], z = price[2];
for (var b in photo) {
    document.getElementsByClassName("main")[0].innerHTML += ("<img src='" + photo[b] + "'>" + descrp[b] + " " + price[b] + " <p class='all'></p><br>");
    document.getElementsByClassName("all")[0].innerHTML = "Today special offer for menu instead of " + x + " it will be " + y;
}
