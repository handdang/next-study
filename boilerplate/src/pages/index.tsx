import Link from "next/link";
import { styled } from "styled-components";
import Header from "@/components/Header";
import Mainview from "@/components/Mainview";

const LinkWrapper = styled("div")`
    margin-top: 20px;
    padding: 8px;
`;

const LinkBtn = styled(Link)`
    border: 1px solid black;
    padding: 4px;
`;

export default function Home() {
    return (
        <div>
            <Header />
            <Mainview />
        </div>
    )
};
