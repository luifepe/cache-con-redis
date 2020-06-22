import redis from 'redis'
const redisClient = redis.createClient(6379, '127.0.0.1')

const chave = () => {
    return {
        plate: "ABC",
        renavam: 123
}
}

const verificoPlacaEnCache = (plate) => {

    redisClient.get(`${plate}`, (err, obj) => {
        if (obj) {
            console.log('Encontrado en la cache')
            return obj
        }

        console.log('Buscando información fuera de la cache')
        redisClient.setex(`${plate}`, 3600, JSON.stringify (chave()))
        return chave()
    })
    
    return chave()
}



const verificoRenavamEnCache = (renavam) => {

    redisClient.get(`${renavam}`, (err, obj) => {
        if (obj) {
            console.log('Encontrado en la cache')
            return obj
        }

        console.log('Buscando información fuera de la cache')
        redisClient.setex(`${renavam}`, 3600, JSON.stringify (chave()))
        return chave()
    })

    
    return chave()
}



export {
    verificoPlacaEnCache
}

export {
    verificoRenavamEnCache
}