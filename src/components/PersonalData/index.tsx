import { useEffect, useRef, useState } from "react"

import { useUpdateForm } from "../../hooks/useUpdateForm"
import { defaultAvatar } from "../../utils"

import arrowBlack from '../../assets/icons/arrow-black.png'

import { BtnArrow, Div, Form } from "../../pages/Profile/styles"

const PersonalData = () => {
  const form = useUpdateForm()

  const [isEditing, setIsEditing] = useState<{ [ key: string ]: boolean}>({})

  const nameInput = useRef<HTMLInputElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)
  const avatarInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing['name'] && nameInput.current) {
      nameInput.current.focus()
    } if (isEditing['password'] && passwordInput.current) {
      passwordInput.current.focus()
    } else if (isEditing['avatar'] && avatarInput.current) {
      avatarInput.current.focus()
    }
  }, [isEditing])

  const handleEdit = (field: string) => {
    setIsEditing({ [field]: true })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    form.handleSubmit()
    setIsEditing({})
  }

  return (
    <Form>
      <Div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' value={form.values.email} disabled />
        </div>
      </Div>
      <Div>
        <div>
          <label htmlFor="name">Full name</label>
          <input
            ref={nameInput}
            type="text"
            id="name"
            value={form.values.name}
            disabled={!isEditing['name']}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={isEditing['name'] ? 'editing' : ''}
            data-testid="name-input"
          />
        </div>
        <BtnArrow
          type="button"
          onClick={(e) => !isEditing['name'] ? handleEdit('name') : handleSubmit(e)}
        >
          {isEditing['name']? 'Save' : 'Edit'}
          <img src={arrowBlack} alt="" />
        </BtnArrow>
      </Div>
      <Div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordInput}
            type="password"
            id='password'
            value={isEditing['password'] ? form.values.password : '000000'}
            disabled={!isEditing['password']}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={isEditing['password'] ? 'editing' : ''}
          />
        </div>
        <BtnArrow
          type="button"
          onClick={(e) => !isEditing['password'] ? handleEdit('password') : handleSubmit(e)}
        >
          {isEditing['password']? 'Save' : 'Edit'}
          <img src={arrowBlack} alt="" />
        </BtnArrow>
      </Div>
      <Div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          {isEditing['avatar'] && (
            <input
              ref={avatarInput}
              type="text"
              id='avatar'
              disabled={!isEditing['avatar']}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={isEditing['avatar'] ? 'editing' : ''}
            />
          )}
          <BtnArrow
            type="button"
            onClick={(e) => !isEditing['avatar'] ? handleEdit('avatar') : handleSubmit(e)}
            style={{ padding: '1px 2px'}}
          >
            {isEditing['avatar']? 'Save' : 'Edit'}
            <img src={arrowBlack} alt="" />
          </BtnArrow>
          <BtnArrow
            type="button"
            onClick={() => form.setFieldValue('avatar', defaultAvatar)}
            style={{ padding: '1px 2px'}}
          >
            Remove
          </BtnArrow>
        </div>
        <img src={form.values.avatar} alt="Profile" />
      </Div>
    </Form>
  )
}

export default PersonalData
