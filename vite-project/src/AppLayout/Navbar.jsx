import React from 'react'
import '../AppLayout/Navbar.css';

const Navbar = ({LoginTrue}) => {
    const LoginFalse = ()=>{
        LoginTrue(false);
    }
  return (
    <nav id="nav1">
    <ul>
      <li><a href="/">about</a></li>
      <li><a href="/Board">board</a></li>
      <li><a href="/Diary">diary</a></li>
      <li><a href="#">chat</a></li>
      {LoginTrue ? <li><a href='/Login' onClick={LoginFalse}>로그아웃</a></li> :<li><a href='/Login'>로그인</a></li>}
    </ul>
  </nav>
  )
}

export default Navbar