import React, { useState } from 'react'
import {Row} from 'react-bootstrap'
import '../Login/LoginPage.css'
import {useForm} from 'react-hook-form';
import '../Register/RegisterPage.css';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase';

const RegisterPage = () => {
    const Auth = getAuth(app);

    const {register, formState:{errors}, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessages,setErrorMessages] = useState('');

    const RegisterCheck = async(data) =>{

        try {
            const createdUser = await createUserWithEmailAndPassword(Auth,data.email,data.password);
            console.log(createdUser); 
            setIsLoading(true);              
        } catch (error) {
            setErrorMessages(error.message);
        }
 
    }

  return (
        <form className='LoginForm' onSubmit={handleSubmit(RegisterCheck)}>
            <Row className='LoginContainer'>
                <h1>로그인</h1>
                <div className='inputContainer'>
                    <label htmlFor='email' >이메일</label>
                    <input type='email' name='email' id='email' placeholder='이메일을 입력해주세요.'
                    {...register("email", {required:true , pattern:/^\S+@\S+$/i})}
                    ></input>
                    {errors.email && <p className='warningText'>이메일 형식이 아닙니다.</p>}
                </div> 
                <div className='inputContainer'>
                    <label htmlFor='password'>비밀번호</label>
                    <input type='password' name='password' id='password' placeholder='비밀번호를 입력해주세요.'
                    {...register("password",{required:true, minLength:6})}
                    ></input>
                    {errors.password && errors.password.type === 'required' &&  (<p className='warningText'>비밀번호를 잘못입력하셨습니다.</p>)}
                    {errors.password && errors.password.type === 'minLength' && (<p className='warningText'>비밀번호는 최소 6자리 이상 입력해주세요.</p>)}
                </div>
                <div className='inputContainer'>
                    <label htmlFor='name'>닉네임</label>
                    <input type='name' name='name' id='name' placeholder='사용하실 닉네임을 입력해주세요.'
                    {...register("password",{required:true, maxLength:10})}
                    ></input>
                    {errors.name && errors.name.type === 'required' && <p className='warningText'>닉네임을 입력해주세요.</p>}
                    {errors.name && errors.name.type === 'maxLength' && <p className='warningText'>닉네임을 10자 입력해주세요.</p>}
                </div>
                {errorMessages && <p className='warningText' variant='danger'>{errorMessages}</p>}
                <div className='LoginBtnContainer'>
                    <button className='LoginBtn'>{isLoading? 'Loading' :'회원가입' }</button>
                </div>
            </Row>
        </form>
  )
}

export default RegisterPage