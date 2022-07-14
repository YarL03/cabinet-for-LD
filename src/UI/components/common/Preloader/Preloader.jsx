import React from "react";
import preloader from '../../../../images/preloader.svg'

const Preloader = ({s}) => {
    return s.preloader ? <img className={s.preloader} src={preloader} /> 
    : <img className={'Preloader'} style={s} src={preloader} />
    
}

export default Preloader