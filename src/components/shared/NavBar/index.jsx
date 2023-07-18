import React, {useState} from 'react'
import {StNavContainer} from './styled'
import Button from '../Button';
import Title from '../Title';
import ModalLogin from '../ModalContainer/ModalLogin';
import ModalRegister from '../ModalContainer/ModalRegister';

const NavBar = () => {
  const [onLogin, setOnLogin] = useState(false);
  const [onRegister, setOnRegister] = useState(false);

  const handleRegisterModal = (isOn) => {
    setOnRegister(isOn);
  };
  const handleLoginModal = (isOn) => {
    setOnLogin(isOn);
  };


  return (
    <>  
    <StNavContainer>
      <div>
        <Title>항해마니또💘</Title>
      </div>
      <div>
        <Button color="danger" $negative={true} handleBtnClick={()=> {
          handleRegisterModal(true)
        }}>Sign Up</Button>
        <Button color="danger" handleBtnClick={()=>{
          handleLoginModal(true);
        }}>Log in</Button>
      </div>
    </StNavContainer>
        {onLogin && <ModalLogin onClose={()=>{
          handleLoginModal(false)
        }} />}
        {onRegister && <ModalRegister onClose={()=>{
          handleRegisterModal(false)
        }} />}
    </>
  )
}

export default NavBar