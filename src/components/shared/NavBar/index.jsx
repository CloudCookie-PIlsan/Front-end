import React, {useState} from 'react'
import {StNavContainer} from './styled'
import Button from '../Button';
import Title from '../Title';
import ModalLogin from '../ModalContainer/ModalLogin';
import ModalRegister from '../ModalContainer/ModalRegister';
import ModalLetter from '../ModalContainer/ModalLetter';
import { getCookie, removeCookie } from '../../../modules/cookie';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  // 모달 제어 화면
  const [onLogin, setOnLogin] = useState(false);
  const [onRegister, setOnRegister] = useState(false);
  const [onLetter, setOnLetter] = useState(false);

  const handleRegisterModal = (isOn) => {
    setOnRegister(isOn);
  };
  const handleLoginModal = (isOn) => {
    setOnLogin(isOn);
  };
  const handleLetterModal = (isOn) => {
    setOnLetter(isOn);
  };

  console.log(getCookie("Authorization"));
  return (
    <>  
    <StNavContainer>
      <div>
        <Title>항해마니또💘</Title>
      </div>
      {getCookie("Authorization") === undefined ? <div>
        <Button color="danger" $negative={true} handleBtnClick={()=> {
          handleRegisterModal(true)
        }}>Sign Up</Button>
        <Button color="danger" handleBtnClick={()=>{
          handleLoginModal(true);
        }}>Log in</Button>
      </div>
      : <div>
        <Button $negative={true} handleBtnClick={()=> {
          handleLetterModal(true);
        }}>마니또에게 쪽지 보내기</Button>
        <Button $negative={true} handleBtnClick={()=> {
          removeCookie("Authorization");
          navigate("/");
        }}>로그아웃</Button>
        
      </div>}
      
    </StNavContainer>
        {onLogin && <ModalLogin onClose={()=>{
          handleLoginModal(false)
        }} />}
        {onRegister && <ModalRegister onClose={()=>{
          handleRegisterModal(false)
        }} />}
        {onLetter && <ModalLetter onClose={()=>{
          handleLetterModal(false)
        }} />}
    </>
  )
}

export default NavBar