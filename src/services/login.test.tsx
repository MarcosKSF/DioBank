import { login } from "./login"

describe ('login', () =>{
        
    const mockAlert = jest.fn()
    window.alert = mockAlert
    it ('deve exibir um alerta de boas vindas', () =>{
        login()
        expect(mockAlert).toHaveBeenCalledWith('Seja Bem Vindo ao sistema, Kaleu!')
    })
})