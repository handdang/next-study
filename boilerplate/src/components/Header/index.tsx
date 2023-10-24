"use client";
import React from "react";
import Link from "next/link";
import { HeaderContainer, TitleName, UlWrapper, List } from "@/components/Header/Header.styled";
export default function Header() {
    return(
        <HeaderContainer>
            <TitleName>NETFLIX</TitleName>
			<UlWrapper>
				<List>
					<Link href="/">Home</Link>
				</List>
				<List>
					<Link href="/">시리즈</Link>
				</List>
			</UlWrapper>
        </HeaderContainer>
    )
};
