import React from 'react';

const Nosotros = () => {

    const [equipo, setEquipo] = React.useState([])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        //console.log(users)
        setEquipo(users)
        console.log(equipo)
    }

    React.useEffect(()=>{
        obtenerDatos()
    }, [])

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item => () => (
                    <li key={item.id}> {item.name} - {item.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
