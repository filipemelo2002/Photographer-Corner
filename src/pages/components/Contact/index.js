import React, {memo} from 'react'

import {FaWhatsapp, FaInstagram} from 'react-icons/fa'
import {MdMail} from 'react-icons/md'
import './styles.css'
function Footer(){
    return (
        <div className="footer">
            <a href="https://www.instagram.com/gersonvaz_fotografia/" rel="noopener noreferrer" target="_blank"><FaInstagram className="icon"/><span>@gersonvaz_fotografia</span></a>
            <a href="tel:+558181984132034"><FaWhatsapp className="icon"/><span>(81) 98413-2034</span></a>
            <a href="mailto:gersonvazfotografia@gmail.com"><MdMail className="icon"/><span>gersonvazfotografia@gmail.com</span></a>
        </div>

    )
}

export default memo(Footer)