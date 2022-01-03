module.exports = async ({
    get,
    update
}) => {
   
    let reg = await get('usuario')
    console.log(reg)
    
    return reg
}