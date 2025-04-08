import { useState } from 'react';
import Button from '../button';
import style from './formulario.module.scss'

interface Props {
    children?: React.ReactNode
}

function Formulario({children}: Props) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function efetuarCadastro(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        
        console.log('cadastrar usuário:', nome, email, senha);
    }

    return (
        <form className={style.formPadrao} onSubmit={efetuarCadastro}>
            <div className={style.inputContainer}>
                <label htmlFor="txtNome">
                    Nome
                </label>
                    <input 
                        type="text"
                        id="txtNome"
                        name="txtNome"
                        value={nome}
                        onChange={evento => setNome(evento.target.value)}
                        placeholder='Informe o nome'
                        maxLength={200}
                        required />
                <label htmlFor="txtEmail">
                    E-mail
                </label>
                    <input
                        type="text"
                        id='txtEmail'
                        name='txtEmail'
                        value={email}
                        onChange={evento => setEmail(evento.target.value)}
                        placeholder='Informe o e-mail'
                        maxLength={100}
                        required />
                <label htmlFor="txtSenha">
                    Senha
                </label>
                    <input
                        type="password"
                        id='txtSenha'
                        name='txtSenha'
                        value={senha}
                        placeholder='Informe a senha'
                        onChange={evento => setSenha(evento.target.value)}
                        maxLength={20}
                        required />
                <Button
                    type="submit">
                    Cadastrar
                </Button>
            </div>
        </form>
    );
}

export default Formulario;