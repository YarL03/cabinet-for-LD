import React from "react";
import Preloader from "../components/common/Preloader/Preloader";
import s from '../components/common/Preloader/PreloaderBig.module.css'

export const withSuspense = ({children}) => {

    return <React.Suspense fallback={<Preloader s={s}/>}>
            {children}
        </React.Suspense>
}
