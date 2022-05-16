import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import style from "./RegisterForm.module.css"

export const RegisterForm = ({submitHandler, s}) => {
    const {register, formState: {errors}, handleSubmit, setValue, getValues, reset} = useForm() // { mode: ''}
    const errorMessage = useSelector(state => state.auth.errorMessage)

    const onSubmit = () => {
        submitHandler()
        reset()
    }
    
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className={s.authorization}>
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
            <button>Зарегистрироваться</button>
            {errorMessage && <p className={`${style.required} ${style.third}`}>{errorMessage}</p>}
        </form>
        </>
    )
}