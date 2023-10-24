"use client";
import React from "react";
// import Link from "next/link";
import { ScreenWrap, Desc, Moviename } from "@/components/Screen/Screen.styled";
// import Screen from "@/components/Screen";
export default function Screen() {
    return(
        <ScreenWrap>
            <img src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdEOXFCAWmYX1pmQf1VSgr9W1u04ieqf1rLhadXmqlWSFEiBcjk3NpZFzN0XfsfsSVIhUOC9VFr4ekKiK4EpAwQYcehMh2rTjoQl.webp?r=a2a"></img>
            <Desc>
                <Moviename>슈츠</Moviename>
                <p>명석한 두뇌로 능수능란한 변호사의 마음을 사로잡은 대학 중퇴 청년. 변호사 자격도 없이 거대 로펌의 보조 변호사로 일하게 된다.</p>
                <button>재생</button>
                <button>상세정보</button>
            </Desc>
        </ScreenWrap>
    )
};
