export const checkForNull = value => {
  if(value) return undefined
  return 'Поле обязательно к заполнению'
}

export const checkMaxWidth30 = value => {
  if(value.length > 30) return `Нельзя ввести больше чем 30 символов`
  return undefined
}

export const checkForChose = allValues => {
  if(allValues.role) return undefined
  return 'Вы не выбрали роль'
}

export const checkEmail = value => {
  const condition1 = value.includes('@')
  const condition2 = value.includes('.ru') || value.includes('.com') || value.includes('.su') || value.includes('.net')
  const condition3 = !value.includes(' ')

  if (condition1 && condition2 && condition3) return undefined
  return 'Неверный формат'
}

export const checkNames = value => {

  const condition1 = !value.includes(' ')
  const condition2 = ![...value].some(i => i >= 0)

  if (condition1 && condition2 ) return undefined
  return 'Неверный формат'
}

export const checkClassName = value => {
  const condition1 = value.includes('-')
  const condition2 = value.length <= 7
  // const condition3 = parseInt(value[-1]+value[-2]) > 10

  if (condition1 && condition2  ) return undefined
  return 'Неверный формат'
}

export const checkGit = value => {

  const condition1 = value.includes('https://github.com/')
  const condition2 = (value.split('/').length - 1) === 3

  if (condition1 && condition2) return undefined
  return 'Неверный формат'
}

export const checkPhone = value => {
  const condition1 = value.length == 11
  const condition2 = ![...value].some(i => i < 0)

  if (condition1 && condition2) return undefined
  return 'Неверный формат'
}
