import React from 'react'
import './Projects.scss'

const Projects = () => {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <div className="projectsList">
                <div>
                    <h4>Equipamientos Marvel</h4>
                    <a target="_blank" rel="noreferrer" href="https://dreamy-noether-bdef38.netlify.app/"><img src="https://i.ibb.co/vzqQmTC/equip-marvel.png" alt="" /></a>
                    <p><a target="_blank" rel="noreferrer" href="https://github.com/uri21199/Equipamientos-Marvel">Repositorio</a></p>
                </div>
                <div>
                    <h4>Cosmos</h4>
                    <a target="_blank" rel="noreferrer" href="https://heuristic-pasteur-d55154.netlify.app/"><img src="https://i.ibb.co/mRqfYbP/cosmos.png" alt="" /></a>
                    <p><a target="_blank" rel="noreferrer" href="https://github.com/uri21199/proyecto-js">Repositorio</a></p>
                </div>
                <div>
                    <h4>BocaJr</h4>
                    <a target="_blank" rel="noreferrer" href="https://tender-blackwell-d8fa3d.netlify.app/"><img src="https://i.ibb.co/yd4kQfK/tienda-bocajr.png" alt="" /></a>
                    <p><a target="_blank" rel="noreferrer" href="https://github.com/uri21199/Tienda-virtual-react">Repositorio</a></p>
                </div>
            </div>
        </div>
    )
}

export default Projects
