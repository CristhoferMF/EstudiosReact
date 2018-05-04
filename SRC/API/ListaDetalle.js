const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
function letraanumero(n){
	let numero;
	switch (n) {
		case '1':
			numero='Uno';
			break;
		case '2':
			numero='Dos';
			break;
		case '3':
			numero='Tres';
			break;
		case '4':
			numero='Cuatro';
			break;
		case '5':
			numero='Cinco';
			break;
		case '6':
			numero='Seis';
			break;
		case '7':
			numero='Siete';
			break;
		case '8':
			numero='Ocho';
			break;
		case '9':
			numero='Nueve';
			break;
		case '10':
			numero='Diez';
			break;
		default:
			numero=n;
			break;
	}
	return numero;
}
function getDetalleEstudiantes(codigo){
	let URL="http://musicroom.esy.es/json/totalSesion?codigo="+codigo;
	return fetch(URL)
	.then(response => response.json())
	.then(data => data.map( data => {

		var f= new Date(data.fechaSesion);
		let dia=f.getDate()+1;
		const fecha=(f.getDate()+1) + " de " + meses[f.getMonth()] + " de " + f.getFullYear()
		return{
			id:data.idSesion,
			codigo:data.idEstudiante,
			fecha:fecha,
			capitulo:letraanumero(data.Capitulo),
			parrafofinal:data.ParrafoFinal,
			observacion:data.Observacion
		}
	}))
}

export {getDetalleEstudiantes}