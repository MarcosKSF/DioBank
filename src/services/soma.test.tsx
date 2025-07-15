import {soma} from './soma'
import {multiplica} from './soma'

describe ('soma', () => {
    it ('deve somar 1 ao numero somado', () => {
        const value = soma(1)
        expect(value).toBe (2)
    })
    it ('deve multiplicar o numero inserido por 2',()=>{
        const value = multiplica(2,2)
        expect(value).toBe(4)
    })

    it ('deve multiplicar o numero inserido por 3',()=>{
        const value = multiplica(2,3)
        expect(value).toBe(6)
    })

    it ('deve infromar um erro, com multiplicador diferente de 2 ou 3', ()=>{
        const value = multiplica (2,4)
        expect(value).toBe('multiplicador nao aceito')
    })

})