const readline = require('readline');
const fs = require('fs');

var stdin = process.openStdin();

  const klavye = readline.createInterface({
  input: process.stdin,
  //output: process.stdout
});

console.log("Başta aramak için 1 kelime içinde aramak için 2 tam eşleşme için 3 yazın.  ");
klavye.on('line', (input) => {
  if ( input == 1){
		bastaAra();
	}
	else if ( input == 2){
		ortadaAra();
	}
	else if ( input == 3){
		tamAra();
	}
});


function bastaAra(){
	console.log("Aranacak kelimeyi gir. ");
	klavye.on('line', (kelime) => {
		const dosyaOku = readline.createInterface({
		input: fs.createReadStream('d:/words.txt')
		});
  
		dosyaOku.on('line', (satir) => {
			var regex = new RegExp("^"+kelime,"gi");
			if(regex.test(satir)){
				console.log(satir);
				kontrol = true;
			}
		});
	});
}

function ortadaAra(){
	console.log("Aranacak kelimeyi gir. ");
	klavye.on('line', (kelime) => {
		const dosyaOku = readline.createInterface({
		input: fs.createReadStream('d:/words.txt')
		});
  
		dosyaOku.on('line', (satir) => {
			var regex = new RegExp(kelime,"gi");
			if(regex.test(satir)){
				console.log(satir);
			}
	});
		});
}

function tamAra(){
	console.log("Aranacak kelimeyi gir. ");
	klavye.on('line', (kelime) => {
		const dosyaOku = readline.createInterface({
		input: fs.createReadStream('d:/words.txt')
		});
  
		dosyaOku.on('line', (satir) => {
			var regex = new RegExp("^"+kelime+"$","gi");
			if(regex.test(satir)){
				console.log(satir);
			}
		});
	});
}