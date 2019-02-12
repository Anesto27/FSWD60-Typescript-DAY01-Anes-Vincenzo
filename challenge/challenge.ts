var photo: any[] =["../img/pizza.jpg","../img/cevap.jpg","../img/humus.jpg"];
var price: any[] =["10$","8$","3$"];
var descrp: string[] = ["Pizza","Cevapcici","Humus"];


	const [x, y, z] = price;


for(let b in photo){


	document.getElementsByClassName("main")[0].innerHTML+=("<img src='"+photo[b]+"'>"+descrp[b]+" "+price[b]+" <p class='all'></p><br>");


	document.getElementsByClassName("all")[0].innerHTML ="Today special offer for menu instead of "+x+" it will be "+y;
}
	
