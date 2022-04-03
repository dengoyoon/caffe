import Header from '../components/header';
import { Fragment, useState, useMemo } from 'react';
import Head from 'next/head';


const formatter = Intl.NumberFormat('ko-KR');

const menuData = [
    {
        name : "에스프레소",
        price : 2800
    },
    {
        name : "아메리카노",
        price : 3000
    },
    {
        name : "카페라떼",
        price : 3500
    }
];

// 무엇이 선택되었는가를 상태로 관리
// 리액트의 Virtual DOM에 따라서 button의 onclick이 일어날때 선택, 선택해제가 바뀌는 부분만 감지해서 이 부분만 바뀌게 알아서 동작함
// useState는 Hook의 종류이며, 선택에서 이것을 사용한 이유는 선택했는지/안했는지를 새로 render가 되는 상황에서도 기억하기 위해서

export default function Order() {
    // [읽기전용함수, 쓰기전용함수] = useState(기본값)
    // 쓰기에서 쓴 state값을 읽기 전용을 통해서 읽어오는게 가능
    
    const [ selected, setSelected ] = useState([]);

    const total = useMemo(() => {
        let value = 0;
        selected.forEach( item => value += item.price);
        // selected.reduce ( (previousValue, item) => previousValue + item.price, 0 );
        return value;
    },[ selected ]);

    //배열안에 들어가있는 값에 변화가 있을떄만 useMemo가 변화하게 함
    //useMemo를 사용안하면 이 가격 값을 더하는 부분이랑 전혀 상관없는 부분이 바뀔때도 리액트의 특성상 매번 실행되게 됨.
    //현재로써는 딱히 안써도 치명적이진 않지만 기능이 복잡해지게 되면 성능에 매우 치명적

    const handleEspresso = () => {
        setEspresso(!hasEspresso);
    };

    const handleAmericano = () => {
        setAmericano(!hasAmericano);
    };

    const handleLatte = () => {
        setLatte(!hasLatte);
    };

    return (
        <div>
            <Head>
                <title>주문하기 - Caffe : 온라인 커피 주문</title>
            </Head>
            <Header/>
            <h1 className='font-bold'>Order</h1>

            <h2 className='text-xl font-bold'>메뉴</h2>

            <dl>
                {
                    menuData.map( element => (// key는 리액트에서 구분을 하기 위함
                        <Fragment key={element.name}> 
                            <dt>
                                {element.name}
                            </dt>
                            <dd>
                                {formatter.format(element.price)}원
                                <small>
                                    <button onClick={() => {
                                        if(selected.includes(element)){
                                            setSelected( selected.filter( item => item !== element ) );// item이 element랑 안같은것만 살려주는 것
                                        } else {
                                            setSelected([...selected, element]);
                                        }
                                    }}>
                                        [ { selected.includes(element) ? "선택 해제" : "선택"} ]
                                    </button>
                                </small>
                            </dd>
                        </Fragment>
                    ))
                }
            </dl>
            <hr/>

            <h2 className='text-xl font-bold'>주문서</h2>

            <ul className='list-unstyled'>
                {
                    selected.map( item => {
                        return <li key={item.name}>{item.name}</li>
                    } )
                }
            </ul>

            합계 : { formatter.format(total) }원

            <div className='mt-4'>
                <button 
                    className='btn btn-primary btn-lg'
                    onClick={() => {
                        confirm(`주문 합계는 ${formatter.format(sum)}원 입니다. 주문하시겠습니까?`);
                    }}>
                        주문하기
                </button>
            </div>
        </div>
    );
};