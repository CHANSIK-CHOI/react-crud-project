export type User = {
  avatar: string
  email: string
  first_name: string
  id: number
  last_name: string
}

type UserKeys = keyof User
export type EditableUserKey = Exclude<UserKeys, 'id'>
type RequiredEditableUserKey = Exclude<EditableUserKey, 'avatar'>

export type InitUserFormObject = Pick<User, RequiredEditableUserKey> & { avatar?: User['avatar'] }
type EditableUserFormObject = Partial<Omit<User, 'id'>>

export type PayloadNewUser = InitUserFormObject
export type ApiResultNewUser = User & { createdAt: string }

export type PayloadModifiedUser = EditableUserFormObject
export type ApiResultModifiedUser = PayloadModifiedUser & { updatedAt: string }
export type PayloadAllModifiedUsers = { id: User['id']; payload: EditableUserFormObject }[]
export type ApiResultAllModifiedUsers = {
  id: User['id']
  result: ApiResultModifiedUser
}[]

export type UsersFormValues = {
  users: User[]
}
