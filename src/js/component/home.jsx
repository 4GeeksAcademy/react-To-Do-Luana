import React , {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const[tarea,setTarea] = useState("")
	const [listaTareas, setListaTareas] = useState(["Aprender React", "Cocinar", "Estudiar"])
	const agregarTarea = (evento)=>{
		if(evento.key === "Enter"){
			setListaTareas([...listaTareas, tarea])
			setTarea("")
		}
	}
	const borrarTarea = (evento, index) => {
		evento.preventDefault()
		let listaFiltrada= listaTareas.filter((item, id ) => {
			return(id != index)
		})
		setListaTareas(listaFiltrada)
	}

	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">To Do List!</h1>
			<input type="text" className="form-control" 
			value = {tarea}
			onChange={(evento)=> setTarea(evento.target.value)}
			onKeyDown ={agregarTarea}
			/>
			<ul className="list-group mt-3">
				{listaTareas.map((item,index)=>(
					<li className="list-group-item" key={index}> 
					{item} 
					<i className="fa fa-trash float-end fs-4 text-danger icono-oculto" onClick = {(evento) => borrarTarea(evento,index)}></i>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
