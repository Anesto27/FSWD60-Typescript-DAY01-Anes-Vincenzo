var photo: any[] =["../img/pizza.jpg","../img/cevap.jpg","../img/humus.jpg"];
var price: any[] =["10$","8$","3$"];
var descrp: string[] = ["Pizza","Cevapcici","Humus"];

function rest(a){

	for(var i = 0; i<a.length; i++){

		document.write(a[i]+"<br>");

}

}

rest(price);
rest(descrp);

for(let b of photo){

	document.write("<img src='"+b+"'> <br>"	);
}
