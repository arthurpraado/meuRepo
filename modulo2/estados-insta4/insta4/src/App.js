import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Inputs = styled.input`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 20px;
  margin: 10px
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 20px;
  margin: 10px
`


class App extends React.Component {

  state = {
    posts: [
        {
          nomeUsuario: 'paulinha',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/200/150',
        },
        {
          nomeUsuario: 'joão',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/250/150',
        },
        {
          nomeUsuario: 'maria',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/300/150',
        },
    ], 
    valorInputNome: "",
    valorInputFoto: "",
    valorInputFotoPost: "",
  }

   adicionaPosts = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputFotoPost
    }
    const novosPosts = [...this.state.posts, novoPost]

    this.setState({
      posts:novosPosts,
      valorInputNome:"",
      valorInputFoto: "",
      valorInputFotoPost: ""
  })


 
}

onChangeInputNomeUsuario = (event) => {
  this.setState({
    valorInputNome: event.target.value
  })
}

onChangeInputFotoUsuario = (event) => {
  this.setState({
    valorInputFoto: event.target.value
  })
}

onChangeInputFotoPost = (event) => {
  this.setState({
    valorInputFotoPost: event.target.value
  })
}

  render() {
    const mostraPosts = this.state.posts.map((post) => {
          return (
            <Post 
            key={post.nomeUsuario}
            nomeUsuario={post.nomeUsuario} 
            fotoUsuario={post.fotoUsuario} 
            fotoPost={post.fotoPost}
            />
          )
    })
    return (
      
      <MainContainer>
        <div>
          <Inputs
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNomeUsuario}
            placeholder="Nome"
          />
          <Inputs
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFotoUsuario}
            placeholder="Foto" 
          />
          <Inputs 
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder='Foto Post'
          />
          <Button onClick={this.adicionaPosts}>Adicionar</Button> 
        </div>
        {mostraPosts}
      </MainContainer>
    );
  }
}

export default App;
