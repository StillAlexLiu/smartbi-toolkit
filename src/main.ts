import {setSmartbiEnv} from './index'
import {getRootElements} from './methods/CatalogService'

setSmartbiEnv({
    dev: {
        username: 'admin',
        password: 'Bi@2024!!!!!!!!',
    },
    mode: 'dev'
})

// smartbi('x', 'x', [1, 2, 3]).then(value => {
//     console.log(value)
// })
getRootElements().then(value => {
    console.log(value)
    value.forEach(item => {
        console.log(item.fullPath)
    })
})
