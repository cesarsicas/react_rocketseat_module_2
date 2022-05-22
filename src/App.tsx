import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/globals';
import Modal from 'react-modal';
import { useState } from 'react';

//criação de um componente chamado Title
//substitui o h1 logo abaixo
//usado para escrever css direto no js
//const Title  = styled.h1`
//            color: #FF0000`;

Modal.setAppElement('#root');

export function App() {
  const[isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  } 

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  } 

  return (
    <> 
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard/>
            <Modal 
                isOpen={isNewTransactionModalOpen} 
                onRequestClose={handleCloseNewTransactionModal} >
                <h2>Cadastrar transação</h2>
            </Modal>

        <GlobalStyle/>
    </>
  );
}