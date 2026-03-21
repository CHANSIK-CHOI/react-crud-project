const AVATAR_PROXY_PREFIX = `${import.meta.env.BASE_URL}api/avatars/`

export const getAvatarSrc = (avatar?: string) => {
  if (!avatar) return avatar ?? ''

  if (
    avatar.startsWith('data:') ||
    avatar.startsWith('blob:') ||
    avatar.startsWith(AVATAR_PROXY_PREFIX)
  ) {
    return avatar
  }

  try {
    const url = new URL(avatar)

    if (url.hostname !== 'reqres.in' || !url.pathname.startsWith('/img/faces/')) {
      return avatar
    }

    const fileName = url.pathname.replace('/img/faces/', '')
    return `${AVATAR_PROXY_PREFIX}${fileName}`
  } catch {
    return avatar
  }
}
