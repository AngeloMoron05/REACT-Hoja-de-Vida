import React from 'react';
import "./footer.css";
import {GitHub, LinkedIn, Facebook} from '@mui/icons-material';

export default function Footer(){
    return(
        <div className='footer'>
            <ul className="ulFooter">
                <li className='contactListItemFooter'><a href='https://github.com/AngeloMoron05' target="_blank"><GitHub/></a></li>
                <li className='contactListItemFooter'><a href='###' target="_blank"><LinkedIn/></a></li>
                <li className='contactListItemFooter'><a href='https://web.facebook.com/profile.php?id=100008027958183' target="_blank"><Facebook/></a></li>
            </ul>
        </div>
    )
}