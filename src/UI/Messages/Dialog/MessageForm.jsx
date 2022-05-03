import React from "react";
import { useForm } from "react-hook-form";

export const MessageForm = ({submitHandler, s, ...restProps}) => {
    const {register, handleSubmit, setValue, getValues} = useForm()

    const onSubmit = (data) => {
        debugger
        if(!getValues('messageInput')) return
        submitHandler(data)
        setValue('messageInput', '')
    }

    const enterSubmit = (e) => {
        if(e.key === "Enter" && e.shiftKey == false) {
            debugger
            const data = {messageInput: e.target.value}
            e.target.blur()
            return handleSubmit(onSubmit(data))
        }
    }

    return (
        <form className={s.textArea}>
          <div className={s.docs}></div>
          <textarea autoFocus {
              ...register('messageInput')
          }
            onKeyPress={enterSubmit}
            placeholder='Write a message'
          ></textarea>
          <button onClick={handleSubmit(onSubmit)}>Send</button>
        </form>
    )
} 