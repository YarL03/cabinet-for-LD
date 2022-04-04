import React from "react";
import preloader from '../../../../images/preloader.svg'

const Preloader = ({s}) => {
    return (
        <img className={s.preloader} src={preloader} />
    )
}

export default Preloader