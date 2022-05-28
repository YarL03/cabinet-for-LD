import React from "react";
import {ReactComponent as School} from '../../images/school.svg'
import {ReactComponent as Case} from '../../images/briefcase.svg'
import {ReactComponent as People} from '../../images/people.svg'
import {ReactComponent as PaperPencil} from '../../images/create.svg'
import bsuLogo from '../../images/BSU_logo.jpg'

const RegisterDescription = ({s}) => {
    return (
        <div className={s.description}>
            <div className={s.logo}>
                <img src={bsuLogo} alt="123" />
            </div>
            <h1>Всегда готовы помочь!</h1>
            <div className={s.item}>
                <div className={s.flexPic}><PaperPencil/></div>
                <div className={s.flexItem}>Устные и письменные консультации</div>
            </div>
            <div className={s.item}>
                <div className={s.flexPic}><Case/></div>
                <div className={s.flexItem}>Составление документов</div>
            </div>
            <div className={s.item}>
                <div className={s.flexPic}><People/></div>
                <div className={s.flexItem}>Представительство в суде</div>
            </div>
            <div className={s.item}>
                <div className={s.flexPic}><School/></div>
                <div className={s.flexItem}>Бесплатная юридическая помощь</div>
            </div>
        </div>
    )
}

export default RegisterDescription