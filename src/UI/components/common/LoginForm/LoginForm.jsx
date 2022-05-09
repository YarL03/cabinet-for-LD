import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import style from "./LoginForm.module.css"

export const LoginForm = ({submitHandler, s}) => {
    const {register, formState: {errors}, handleSubmit, setValue, getValues} = useForm() // { mode: ''}
    const errorMessage = useSelector(state => state.auth.errorMessage)
    
    return (
        <>
        <form onSubmit={handleSubmit(submitHandler)} className={s.authorization}>
            <input type="text" className={s.text} {
                ...register('email', {
                    required: `This field is required`,
                    pattern: {
                        value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        message: `Invalid email`
                    }
                })
            } placeholder="Введите логин"/>
            {errors?.email && <p className={`${style.required} ${style.first}`}>{errors.email.message}</p>}
            <input type="text" className={s.text} {
                ...register('password', {
                    required: true
                    
                })
            } placeholder="Введите пароль"/>
            {errors?.password && <p className={`${style.required} ${style.second}`}>This field is required</p>}
                <div className={s.checkbox}>
                    <input type="checkbox" {
                        ...register('rememberMe')
                    }
                     />
                    <label onClick={() => setValue('rememberMe', !getValues('rememberMe'))}>Remember me</label>
                </div>
            <button>Войти</button>
            {errorMessage && <p className={`${style.required} ${style.third}`}>{errorMessage}</p>}
        </form>
        </>
    )
}