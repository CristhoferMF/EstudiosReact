const URL="http://musicroom.esy.es/json/totalEstudiante";

const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

function getEstudiantes(){
	return fetch(URL)
	.then(response => response.json())
	.then(data => data.map( data => {
		var f= new Date(data.ultimafecha);
		let dia=f.getDate()+1;
		const fecha=(f.getDate()+1) + " de " + meses[f.getMonth()] + " de " + f.getFullYear()
		return{
			id:data.idEstudiante,
			nombre:data.nombre,
			apellidos:data.apellidos,
			edad:data.edad,
			ufecha:fecha,
			publicacion:data.publicacion,
			ucapitulo:data.ultimocapitulo,
			uparrafo:data.ultimoparrafo
		}
	}))
}
export {getEstudiantes}