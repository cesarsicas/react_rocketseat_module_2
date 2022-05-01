import styled from 'styled-components'
import { GlobalStyle } from './styles/globals';

//criação de um componente chamado Title
//substitui o h1 logo abaixo
//usado para escrever css direto no js
//const Title  = styled.h1`
//            color: #FF0000`;

export function App() {
  return (
    <div className="App">
        <h1 className='title'>Hellow brah</h1>

        <GlobalStyle/>
    </div>
  );
}