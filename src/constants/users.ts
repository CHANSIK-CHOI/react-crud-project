import type { EditableUserKey, InitUserFormObject } from '@/types/users'

export const PLACEHOLDER_SRC = `${import.meta.env.BASE_URL}avatar-placeholder.svg`

export const INIT_NEW_USER_VALUE: InitUserFormObject = {
  email: '',
  first_name: '',
  last_name: '',
  avatar: undefined,
}

export const EDITABLE_USER_KEYS: EditableUserKey[] = ['email', 'first_name', 'last_name', 'avatar']
