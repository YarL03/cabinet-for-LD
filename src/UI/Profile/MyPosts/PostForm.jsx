import React from "react";
import { useForm } from "react-hook-form";

export const PostForm = ({submitHandler, s, ...restProps}) => {
    const {register, handleSubmit, reset, getValues} = useForm()
    
    const onSubmit = (data) => {
        if(!getValues('postInput')) return
        submitHandler(data)
        reset()
    }

    return (
        <form>
            <div className={s.wrapperPost}>
          <textarea {
            ...register('postInput')
            }
            placeholder="What's new?" 
          />
        </div>
        <div className={s.postButtons}>
          <button onClick={handleSubmit(onSubmit)} className={s.postSubmit}>
            Post
          </button>
        </div>
        </form>
    )
}