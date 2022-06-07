//1. Import coingecko-api
import CoinGecko from 'coingecko-api';

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var call = async () => {
  // let data = await CoinGeckoClient.coins.all();
  // let data = await CoinGeckoClient.coins.list();
  // let data = await CoinGeckoClient.global();
  // let data = await CoinGeckoClient.coins.fetch("bitcoin", {
  //   tickers: false,
  //   market_data: true,
  //   community_data: false,
  //   developer_data: false,
  //   localization: false,
  //   sparkline: false
  // });
  // let data = await CoinGeckoClient.coins.fetchTickers('bitcoin');
  // let data = await CoinGeckoClient.coins.fetchMarketChart('bitcoin');
  // let data = await CoinGeckoClient.exchangeRates.all();
  // let data = await CoinGeckoClient.simple.supportedVsCurrencies();

  // let coins = await CoinGeckoClient.coins.list();
  // console.log(await CoinGeckoClient.simple.supportedVsCurrencies());

  // let data = await CoinGeckoClient.simple.price({
  //   ids: ['bitcoin', 'ethereum'],
  //   vs_currencies: ['usd'],
  // });

  // const result = data.data;
  // console.log(result);

  // const fromThisCoin = 'bitcoin';
  // const thisAmount = 1;
  // const toThisCoin = 'ethereum';

  // const exchangeRate = result[fromThisCoin].usd / result[toThisCoin].usd;
  // console.log("Exchange value: " + exchangeRate);
  // const toAmount = thisAmount * exchangeRate;
  // console.log(thisAmount + " " + fromThisCoin + " = " + toAmount + " " +toThisCoin);

  // wallet value calculator
  const wallet = [
    {
      name: 'usd',
      amount: 1000,
      date: new Date().toLocaleDateString()
    },
    {
      name: 'btc',
      amount: 10,
      date: new Date().toLocaleDateString()
    },
    {
      name: 'eth',
      amount: 3,
      date: new Date().toLocaleDateString()
    }
  ];

  // coin list ten coin isimlerini de al
  // ids array ini oluştur
  // kişinin istediği para birimi cinsinden try veya usd olarak
  // çıkan sonuçları topla göster.

};

call();
