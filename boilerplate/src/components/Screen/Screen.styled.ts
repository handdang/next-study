import styled from "styled-components";
export const ScreenWrap = styled.div`
    position: relative;max-width:1440px;margin:0 auto;
`;
export const BackgroudnImage = styled.div`
    background:url("https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdEOXFCAWmYX1pmQf1VSgr9W1u04ieqf1rLhadXmqlWSFEiBcjk3NpZFzN0XfsfsSVIhUOC9VFr4ekKiK4EpAwQYcehMh2rTjoQl.webp?r=a2a") no-repeat 50%/cover;min-height: 500px;height: 100%;width: 100%;padding-top: 50%;
`;
export const MetaData = styled.div`
    position: absoulte;position: absolute;top: 50%;padding:24px;
`;
export const Title = styled.p`
    color: ${({theme}) => theme.colors.white};font-size:52px;font-weight:bold;margin-bottom: 24px;line-height:18px;
`;
export const Desc = styled.p`
	color: ${({theme}) => theme.colors.white};
    font-size:16px;line-height:18px;margin-bottom: 24px;
`;
export const Button = styled.button<{ $primary?: boolean; }>`
  background-color: ${props => props.$primary ? "rgb(255, 255, 255)" : "rgb(128, 128, 128, 0.7)"};
  color: ${props => props.$primary ? "black" : "white"};
  font-size: 1em;
  margin-left: ${props => props.$primary ? "0" : "24px"};
  padding:12px 24px;
  border-radius: 4px;
`;