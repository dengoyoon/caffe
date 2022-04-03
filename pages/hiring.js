import Header from '../components/header';
import Head from 'next/head';

export default function Hiring() {
    return (
        <div>
            <Head>
                <title>직원 모집 - Caffe : 온라인 커피 주문</title>
            </Head>
            <Header/>
            <h1 className='font-bold'>Hiring</h1>
            Caffe에서는 언제나 새로운 직원을 뽑고 있습니다!
        </div>
    );
};