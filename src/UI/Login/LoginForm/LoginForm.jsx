import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/common/Buttons/Button";
import style from "./LoginForm.module.css"

export const LoginForm = ({errorMessage, submitHandler, s}) => {
    const {register, formState: {errors}, handleSubmit, setValue, getValues} = useForm() // { mode: ''}
    
    
    return (
        <>
        <form onSubmit={handleSubmit(submitHandler)} className={s.authorization}>
            <label>Email</label>
            <input type="text" className={`${s.text}  ${errors?.email ? s.error : ''}`} {
                ...register('email', {
                    required: `Это поле обязательно`,
                    pattern: {
                        value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        message: `Некорректный email`
                    }
                })
            } placeholder="Введите логин"/>
            {errors?.email && <p className={`${style.required}`}>{errors.email.message}</p>}
            <label>Пароль</label>
            <input type="text" className={`${s.text}  ${errors?.password ? s.error : ''}`} {
                ...register('password', {
                    required: `Это поле обязательно`
                })
            } placeholder="Введите пароль"/>
            {errors?.password && <p className={`${style.required}`}>{errors.password.message}</p>}
                <div className={s.checkbox}>
                    <input type="checkbox" {
                        ...register('rememberMe')
                    }
                     />
                    <label onClick={() => setValue('rememberMe', !getValues('rememberMe'))}>Remember me</label>
                </div>
                <Button text='Войти'/>
            {errorMessage && <p className={`${style.required} ${style.third}`}>{errorMessage}</p>}
            <div className={s.routePhrase}>Впервые здесь? <Link to='/register'>Зарегистрироваться</Link></div>
        </form>
        
        </>
    )
}