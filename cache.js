import redis from 'redis'
const redisClient = redis.createClient(6379, '127.0.0.1')

const chavePlate = () => {
    return {
        placa: 'ABC',
        renavam:123,
        debitos:[
            {
                valor:200,
                descricao: "Multa A"
            },
            {
                valor: 500,
                descricao: "Multa B"
            }            
        ]                
    }
}



const verificoEnCache = (plate) => {

    redisClient.get(`${plate}`, (err, obj) => {

        if (obj) {
            console.log('Encontrado en la cache')
            return obj
        }

        console.log('Buscando información fuera de la cache')
        redisClient.setex(`${plate}`, 3600, JSON.stringify (chavePlate()))
        return chavePlate()

    })
    
    return chavePlate()
}






const find = (plate) => {
    return redisClient.get (`${plate}` , (verificoEnCache) => {
        if (chavePlate.placa === 'ABC' && chavePlate.renavam === 123){
            console.log('Encontrado en la cache')
            return{
                verificoEnCache
            }
        } 
    })
}


export {
    find
}

export {
    verificoEnCache, 
}