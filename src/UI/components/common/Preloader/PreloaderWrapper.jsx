import React from "react";
import Preloader from "./Preloader";

const PreloaderWrapper = ({s}) => {
    return (
    <div className={s.preloaderWrapper}>
        <Preloader s={s}/>
    </div>
    )
}

export default PreloaderWrapper