import styled from "styled-components"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchCoins } from "../api.ts";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms.ts";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: transparent;
  border: 1px solid white;
  color: ${props => props.theme.textColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
    font-weight: 500;
  }
  &:hover{
    a {
      color: ${props => props.theme.accentColor}
    }
  }
`;

const Title = styled.h1`
font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface Icoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

interface ICoinProps{
}

function Coins({}: ICoinProps) {
  const setDarkAtom = useSetRecoilState(isDarkAtom); // RecoilState가져오는 부분
  const toggleDarkAtom = () => setDarkAtom((e) => !e);
  const {isLoading,data} = useQuery<Icoin[]>("allCoins", fetchCoins);
  return(
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
        {/* 버튼 클릭해서 테마 변경 */}
        <button onClick={toggleDarkAtom}>Toggle Mode</button>
      </Header>
      <CoinsList>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : data?.slice(0,100).map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`} state={{ name:coin.name, rank:coin.rank }}>
              <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt="Coin" />
              {coin.name} &rarr;
            </Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  ) 
}

export default Coins;