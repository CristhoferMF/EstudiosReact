const URL='http://musicroom.esy.es/json/insertSesiones';

function addSesiones(idEstudiante,fechaSesion,capitulo,parrafoFinal,Observacion) {
	return fetch(URL,{
			method:'POST',
			headers:{
				'Accept':'application/json,text/plain,*/*',
			},
			body:JSON.stringify({
				idEstudiante:idEstudiante,
				fechaSesion:fechaSesion,
				capitulo:capitulo,
				parrafoFinal:parrafoFinal,
				Observacion:Observacion
			})
			})
			.then((res) => res.json())
}
 export {addSesiones}