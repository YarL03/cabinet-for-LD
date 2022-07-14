import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/common/Buttons/Button";
import style from "./RegisterForm.module.css"

export const RegisterForm = ({submitHandler, cF, errorMessage, s}) => {
    const {register, formState: {errors}, handleSubmit, setValue, getValues, reset} = useForm() // { mode: ''}

    const onSubmit = (data) => {
        submitHandler(data)
        reset()
    }
    
    return (
        <div className={s.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.registerForm}>
            <label>Имя</label>
            <input type="text" className={`${s.text}  ${errors?.name ? s.error : ''}`} {
                ...register('name', {
                    required: 'Укажите имя'
                    
                })
            } />
            {errors?.name && <p className={`${style.required}`}>{errors.name.message}</p>}
            <label>Фамилия</label>
            <input type="text" className={`${s.text}  ${errors?.lastname ? s.error : ''}`} {
                ...register('lastname', {
                    required: 'Укажите фамилию' 
                })
            } />
            {errors?.lastname && <p className={`${style.required}`}>{errors.lastname.message}</p>}
            <label>Номер телефона</label>
            <input type="text" className={`${s.text}  ${errors?.phoneNumber ? s.error : ''}`} {
                ...register('phoneNumber', {
                    required: 'Укажите номер телефона',
                    pattern: {
                        value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                        message: 'Некорректный номер'
                    } 
                })
            } />
            {errors?.phoneNumber && <p className={`${style.required}`}>{errors.phoneNumber.message}</p>}
            <label>Email</label>
            <input type="text" className={`${s.text}  ${errors?.email ? s.error : ''}`} {
                ...register('email', {
                    required: 'Укажите email',
                    pattern: {
                        value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        message: `Некорректный email`
                    }
                })
            } />
            {errors?.email && <p className={`${style.required} ${style.first}`}>{errors.email.message}</p>}
            <label>Пароль</label>
            <input type="text" className={`${s.text}  ${errors?.password ? s.error : ''}`} {
                ...register('password', {
                    required: 'Укажите пароль', // сделать потом обязательным наличие большой/малой латиницы
                    minLength: 6
                })
            } />
            {errors?.password && <p className={`${style.required} ${style.second}`}>{errors.password.message}</p>}
            <p className={`${s.inputDescription} ${errors?.password ? s.error : ''}`}>Пароль должен содержать как минимум 6 символов</p>
            <Button text='Зарегистрироваться'/>
            {errorMessage && <p className={style.firebaseError}>{errorMessage}</p>}
        </form>
        <div>Уже есть аккаунт? <Link onClick={cF} to='/login'>Войти</Link></div>
        </div>
    )
}