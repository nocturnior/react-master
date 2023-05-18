// Fetcher Function => json 데이터의 promise return 무족권

/** Fetcher Function
   * useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, [coinId]); // coinId가 변한다면 그떄 실행, 근데 안변함ㅋ */

export function fetchCoins() {
  return fetch('https://api.coinpaprika.com/v1/coins').then((res) => res.json());
}
