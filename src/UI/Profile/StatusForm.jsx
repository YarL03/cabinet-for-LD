import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const StatusForm = ({submitHandler, s, ...props}) => {
    const {register, handleSubmit} = useForm()
    const [editMode, setEditMode] = useState(false) 

    const onSubmit = ({status}) => {
        submitHandler(status)
        toggleEditMode()
    }

    const toggleEditMode = () => {
        setEditMode(!editMode)
      }

    const enterSubmit = (e) => {
      if(e.key === "Enter" && e.shiftKey === false) {
          const data = {status: e.target.value}
          return handleSubmit(onSubmit(data))
        }
    }

    return (
        <div className={s.status}>
                {!editMode && 
                <div className={s.defaultStatus} onClick={toggleEditMode}>{props.statusRedux.length >= 96 ? `${props.statusRedux.slice(0,96)}...`
                : props.statusRedux ? props.statusRedux   
                : "установить статус"}</div>
                }
                {editMode &&
                <div className={s.statusModal}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <textarea autoFocus {
                      ...register('status',
                      {
                        value: props.statusRedux,
                        onChange: e => {
                          if(e.target.value > 194) e.target.value = e.target.value.slice(0, 194)
                        }
                    }
                      )}
                      onKeyPress={enterSubmit}
                      />
                  <button type="submit">Сохранить</button>
                  </form>
                </div>
                }
        </div>
    )
}