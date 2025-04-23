export const getLowyere =()=>{
    const lowyere =localStorage.getItem('lowyere')
    if(lowyere)return JSON.parse(lowyere)
        return[]
}

export const addAppoin =lowyere=>{

const lowyeres =getLowyere()
const isExist =lowyeres.find(l=>l.ID===lowyere.ID)
if(isExist)return console.log('vdfvsdasc');
lowyeres.push(lowyere)
localStorage.setItem('lowyere',JSON.stringify(lowyeres))
}


export const removelowyere =id=>{
    const lowyere = getLowyere()
    const remaininglowyere =lowyere.filter(lowyere=>lowyere.ID!==id)
    localStorage.setItem('lowyere',JSON.stringify(remaininglowyere))
}