import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Container, Header, Title } from "./Coins";

interface RouteParams {
    coinId: string;
    [key: string]: string | undefined;
}

interface infoType {
    id : string
}

function Coin() {
    const [loading, setLoading] = useState(true);
    // const [info, setInfo] = useState({});
    const [info, setInfo] = useState({} as infoType);
    const [priceInfo, setPriceInfo] = useState({});

    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation();
    const state2 = useLocation();
    const stateValue = state2?.state;


    useEffect(() => {
        (async () => {
            const infoData = await (
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
            ).json();
            const priceData = await (
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json();
            setInfo(infoData)
            setPriceInfo(priceData)
            setLoading(false)
        })();
    }, [])


    return (
        <>
            <Container>
                <Header>
                    <Title>{stateValue ? (stateValue) : (<Link to={"/"}>Back to home</Link>)}</Title>
                </Header>
                {loading 
                ? 
                <p>Loading...</p> 
                : 
                <span>{info.id}</span>
                // null
                }
            </Container>
        </>
    );
}

export default Coin;