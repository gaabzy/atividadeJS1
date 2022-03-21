function pegarDados(){
	let PrimFaixa = document.getElementById("PrimFaixa").value;
	let SegFaixa = document.getElementById("SegFaixa").value;
	let TercFaixa = document.getElementById("TercFaixa").value;
	let QuatFaixa = document.getElementById("QuatFaixa").value;

	let concatenar = parseFloat(PrimFaixa + SegFaixa);
	let result = concatenar * TercFaixa;
	let tole1 = result * QuatFaixa;
	let tole2 = result - tole1;
	let tole3 = result + tole1;
	
	document.getElementById('result').innerHTML = result + 'ohms COM TOLERÂNCIA MÍNIMA DE ' + tole2 + 'ohms E MÁXIMA DE ' + tole3 + 'ohms ';
}