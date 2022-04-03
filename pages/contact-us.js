import Header from '../components/header';
import { useState } from 'react';
import Head from 'next/head'


export default function ContactUs() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault(); 
        //이걸 안해주면 form 태그의 원래 기능상 전송페이지로 넘어가게 됨. SPA의 장점을 잃게 된다. 따라서 그 원래 기능을 막는 것
    }
    return (
        <div>
            <Head>
                <title>문의하기 - Caffe : 온라인 커피 주문</title>
            </Head>
            <Header/>
            <h1 className='font-bold'>Contact Us</h1>

            <form
                onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label 
                        htmlFor="exampleFormControlInput1" 
                        className="form-label">
                            이메일
                    </label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"
                        value= { email }
                        onChange = {event => {
                            setEmail(event.target.value);
                        }}/>
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="subjectInput" 
                        className="form-label">
                            제목
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="제목을 입력하세요."
                        value = { subject }
                        onChange = {event => {
                            setSubject(event.target.value);
                        }}/>
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="exampleFormControlTextarea1" 
                        className="form-label">
                            문의 내용
                    </label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value = { content }
                        onChange = {event => {
                            setContent(event.target.value);
                        }}/>
                </div>
                <button className='btn btn-primary btn-lg'>문의하기</button>
            </form>
        </div>
    );
};