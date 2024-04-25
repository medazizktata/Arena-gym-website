import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoPlayCircleOutline } from "react-icons/io5";

import { faImages } from '@fortawesome/free-solid-svg-icons';

const ConsulterGalerieButton = ({className}) => {
    return (
        <div className={`flex items-center gap-3 h-16 text-white ${className}`}>

           {/*  <FontAwesomeIcon icon={faImages} className="galerie-icon" /> */}
            <IoPlayCircleOutline className="" icon={faImages}/>

            <button className="galerie-button font-robotoCon"> Consulter notre galerie</button>
        </div>
    );
};

export default ConsulterGalerieButton;
