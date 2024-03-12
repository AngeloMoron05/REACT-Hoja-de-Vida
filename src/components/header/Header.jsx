import React from 'react';
import "./header.css";
import fotopersonal from "./fotopersonal.jpg";
import {Smartphone, LocationOn, EmailOutlined, AlternateEmailSharp} from '@mui/icons-material';

export default function Header(){
    return (
        <div className='header'>
            <div className="headerPhoto">
                <img src={fotopersonal} alt="foto-personal" className="headerPhotoImg"></img>
            </div>
            <div className='headerNombres'>
                <h1>ANGELO FABIAN MORON PINEDA</h1>
                <p>Desarrollador Web Fullstack</p>
            </div>
            <div className="headerContacto">
                <ul className='contactList'>
                    <li className='contactListItem'><Smartphone/><p>(+57) 3113784303</p></li>
                    <li className='contactListItem'><LocationOn/><p>Dosquebradas / Risaralda - Colombia</p></li>
                    <li className='contactListItem'><EmailOutlined/><p>angelofabianmoron05@gmail.com</p></li>
                    <li className='contactListItem'><AlternateEmailSharp/><p>angelobezno05@gmail.com</p></li>
                </ul>
            </div>
        </div>
    )
}