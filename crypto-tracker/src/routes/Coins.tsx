import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinsList = styled.ul``;

const Coin = styled.li`
    
  color: ${(props) => props.theme.bgColor};
  background-color: white;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex; align-items: center; gap: 5px;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.pointColor};
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.pointColor};
`;

const Img = styled.img`
    width: 25px;
    aspect-ratio: 1/1;
`


interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            SetLoading(false)
        })();
    }, [])
    console.log(coins);

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading
                ?
                (<p>Loading...</p>)
                :
                <CoinsList>
                    {coins.map((coin) => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`} state={coin.name}>
                                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.id} />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            }
        </Container>
    );
}
export default Coins;