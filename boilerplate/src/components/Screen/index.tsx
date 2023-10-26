"use client";
import React from "react";
import axios from 'axios';
import { ScreenWrap, BackgroudnImage, MetaData, Title, Desc, Button } from "@/components/Screen/Screen.styled";
type Repo = {
  name: 'string'
  stargazers_count: number
}

const Screen = () => {
    load();
    return(
        
        <ScreenWrap>
            <BackgroudnImage></BackgroudnImage>
            <MetaData>
                <Title>슈츠</Title>
                <Desc>명석한 두뇌로 능수능란한 변호사의 마음을 사로잡은 대학 중퇴 청년. 변호사 자격도 없이 거대 로펌의 보조 변호사로 일하게 된다.</Desc>
                <div className="flexBox">
                    <Button $primary>재생</Button>
                    <Button>상세정보</Button>
                </div>
            </MetaData>
        </ScreenWrap>
    )
    
};
// Screen.getInitialProps = async function() {
//     const res = await axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/soap/boxoffice')
//     const data = await res.data;

//     console.log(`Show data fetched. Count: ${data.length}`);

//     return {
//         data: data
//     }
// };

const load = async () => {
    try {
      const response = await axios.get("http://www.kobis.or.kr/kobisopenapi/webservice/soap/boxoffice");
    //   setList(response.data);
    console.log(response)
    } catch (error) {
      alert('조회 에러');
    }
  }
export default Screen