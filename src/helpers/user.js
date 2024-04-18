export const randomNames = ()=>{
  const names = ['edgar', 'martin', 'abgar', 'vazgen']
  const randomName = names[Math.floor(Math.random() * names.length)]
  return randomName
}

export const randomSurnames = ()=>{
  const surnames = ['hambardzumyan', 'elizbaryan', 'hakobyan', 'sargsyan']
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)]
  return randomSurname
}

export const randomActions = ()=>{
  const actions = ['DoneGreen', 'ReOpen red']
  const randomAction = actions[Math.floor(Math.random() * actions.length)]
  return randomAction
}


