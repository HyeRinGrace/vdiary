import React from 'react'
import {Row} from 'react-bootstrap'
import '../Login/LoginPage.css'
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const {register, formState:{errors}, handleSubmit } = useForm();

  return (
        <form className='LoginForm'>
            <Row className='LoginContainer'>
                <h1>로그인</h1>
                <div className='inputContainer'>
                    <label htmlFor='email' >이메일</label>
                    <input type='email' name='email' id='email' placeholder='이메일을 입력해주세요.'
                    {...register("email", {required:true , pattern:/^\S+@\S+$/i})}
                    ></input>
                    {errors.email && <p className='warningText'>이메일을 입력해주세요.</p>}
                </div> 
                <div className='inputContainer'>
                    <label htmlFor='password'>비밀번호</label>
                    <input type='password' name='password' id='password' placeholder='비밀번호를 입력해주세요.'
                    {...register("password",{required:true, minLength:6})}
                    ></input>
                    {errors.password && <p className='warningText'>비밀번호를 잘못입력하셨습니다.</p>}
                    {errors.minLength < 6 && <p className='warningText'>비밀번호는 최소 6자리 이상 입력해주세요.</p>}
                </div>
                <div className='LoginBtnContainer'>
                    <button className='LoginBtn'>로그인</button>
                </div>
                <Link to={'/Register'} className='NoIdText'>회원가입 하러가기</Link>
            </Row>
        </form>
  )
}

export default LoginPage