import React from 'react'
let contador = 0
const Form = () => {
    let [objeto, setobjsto] = React.useState([])
    console.log(objeto[0])


    const agregar = (event) => {

        if (event.keyCode === 13 && event.target.value !== "") {
            setobjsto([{ mensaje: event.target.value, id: contador }, ...objeto,])
            console.log("mae", objeto)
            contador++
            event.target.value = ""
        }
    }

    const removeitem = (id) => {
        let newobjet = objeto.filter((elemento) => elemento.id !== id);
        setobjsto(newobjet)

    }
const insertarlineafinal=()=>{
    if (objeto.length !== 0) {
        return (<div className="tareas pendiente">
            {objeto.length} Item left
        </div>)
    }
}
    return (
        <div>
            <h1>todos</h1>
            <div className="lista">
                <input className="form-control form-control-lg shadow-lg" type="text" placeholder={objeto[0] == undefined ? " No tasks, add a task" : "What needs to be done?"} onKeyUp={(event) => agregar(event)}></input>
                {
                    objeto.reverse().map((elementos) => {
                        return (
                            <div className="tareas " key={elementos.id}>{elementos.mensaje}

                                <div className="equis">
                                    <p onClick={() => removeitem(elementos.id)}>x</p>
                                </div>

                            </div>)
                    })
                }

                {insertarlineafinal()                }

            </div>
        </div>
    )
}


export default Form
