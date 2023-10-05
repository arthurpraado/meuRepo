import React from 'react';
import './App.css';
import styled from 'styled-components';

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: calc(100vh - 120px);
  width: calc(60vw - 50px);
  border: 1px solid #000000;
  margin: 50px auto 0 auto;
  background-color: #E5DDD5;
`

const Mensagens = styled.p`
  margin: 15px;
  word-wrap: break-word;
`

const DivInputs = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

const InputUsuario = styled.input`
  width: 150px;
  height: 25px;
`

const InputMensagem = styled.input`
  width: calc(60vw - 300px);
`

const ButtonEnviar = styled.button`
  width: 92px;
  &hover{
    cursor: pointer;
    background-color: black;
    color: white;
  }
`

class App extends React.Component {

  state = {
    mensagens: [],
    valorNomeUsuario: "",
    valorMensagemUsuario: "",
  }

  onChangeValorNomeUsuario = (event) => {
    this.setState({
      valorNomeUsuario: event.target.value
    })
  }

  onChangeValorMensagemUsuario = (event) => {
    this.setState({
      valorMensagemUsuario: event.target.value
    })
  }

  enviaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorNomeUsuario,
      mensagem: this.state.valorMensagemUsuario
    }
    const novoArrayMensagens = [...this.state.mensagens, novaMensagem]
    
    if (this.state.valorMensagemUsuario === "") {
      return alert("Digite uma mensagem.")
    } else if (this.state.valorNomeUsuario === "") {
      return alert("Diga seu nome de usuário.")
    }
    else {
    this.setState({
      mensagens: novoArrayMensagens, valorMensagemUsuario:'', valorNomeUsuario: ''
    })}
  }

  render () {

  
    return (
      <DivPrincipal>
        <div>
          {this.state.mensagens.map((mensagem) => {
            return <Mensagens><strong>{mensagem.usuario}:</strong> {mensagem.mensagem} </Mensagens>
          })}
        </div>
        <DivInputs>
          <InputUsuario 
            value= {this.state.valorNomeUsuario}
            onChange= {this.onChangeValorNomeUsuario}
            placeholder="Usuário"
          />
          <InputMensagem
            value= {this.state.valorMensagemUsuario}
            onChange= {this.onChangeValorMensagemUsuario}
            placeholder="Mensagem"
            />
          <ButtonEnviar onClick={this.enviaMensagem} >Enviar</ButtonEnviar>
        </DivInputs>
      </DivPrincipal>
    );
  }
}

export default App;
