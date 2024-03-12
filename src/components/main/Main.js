import React from 'react';
import "./main.css";

function Main(){
    return (
        <div className='main'>
            <h2>Habilidades</h2>
            <div className="cvMain">
                <ul className="ListaHabilidadesMain">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVA</li>
                    <li>JavaScript</li>
                    <li>Dart</li>
                    <li>C++</li>
                    <li>BootStrap</li>
                    <li>SQL</li>
                    <li>NodeJS</li>
                    <li>NetBeans</li>
                </ul>
            </div>
            <h2>Formacion Academica Universitaria</h2>
            <div className="cvMain">
                <p>Tecnologo en Analisis y Desarrollo de Software.</p>
            </div>
            <h2>Experiencia Laboral</h2>
            <div className="cvMain">
                <p><strong>Desarrollador Fullstack</strong> Globant. 6 meses. Tecnologias empleadas: HTML, CSS, JavaScript, NodeJs, REACT, Dart, JAVA, Sass, SQL.</p>
            </div>
            <h2>Proyectos desarrollados</h2>
            <div className="cvMain">
                <ul className="ListaHabilidadesMain">
                    <li><p>Buscaminas. </p><a href="https://github.com/AngeloMoron05/ADSO-2711993.git">https://github.com/AngeloMoron05/ADSO-2711993.git</a></li>
                    <li><p>Registro Personas. </p><a href="https://github.com/AngeloMoron05/ADSO-2711993.git">https://github.com/AngeloMoron05/ADSO-2711993.git</a></li>
                    <li><p>Registro Veterinaria. </p><a href="https://github.com/AngeloMoron05/ADSO-2711993.git">https://github.com/AngeloMoron05/ADSO-2711993.git</a></li>
                    <li><p>Registro CRUD. </p><a href="https://github.com/AngeloMoron05/ADSO-2711993.git">https://github.com/AngeloMoron05/ADSO-2711993.git</a></li>
                </ul>
            </div>
            <h2>Formacion Complementaria</h2>
            <div className="cvMain">
                <h4>SENA</h4>
                <ul className="ListaHabilidadesMain">
                    <li>SEGURIDAD Y SALUD EN EL TRABAJO</li>
                    <li>ETICA LABORAL</li>
                    <li>COMUCANION ACERTIVA</li>
                    <li>DERECHOS LABORALES</li>
                </ul>
                <h4>LEXICOM</h4>
                <ul className="ListaHabilidadesMain">
                    <li>CURSO COMPLEMENTARIO DE INGLES</li>
                    <br></br>
                </ul>
            </div>
        </div>
    )
}

export default Main;