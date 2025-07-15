import { login } from "./login"

describe ('login', () =>{
    it ('deve exibir um alerta de boas vindas', () =>{

        const mockAlert = jest.fn()
        window.alert = mockAlert

        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem Vindo ao sistema')

    })
})