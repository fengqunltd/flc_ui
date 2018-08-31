export const blockTradesAPIs = {
    BASE: "http://api.flashchain.org/v2",
    BASE_OL: "http://ol-api1.flashchain.org/api/v0/ol/support", //https://ol-api1.openledger.info/api/v0/ol/support/coins
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount"
};

export const rudexAPIs = {
    BASE: "https://gateway.rudex.org/api/v0_1",
    COINS_LIST: "/coins",
    NEW_DEPOSIT_ADDRESS: "/new-deposit-address"
};

export const settingsAPIs = {
    DEFAULT_WS_NODE: "ws://127.0.0.1:8090",
    WS_NODE_LIST: [
        {url: "ws://127.0.0.1:8090", location: "ShangHai, China"},
        {url: "ws://47.74.21.162:8090", location: "ShangHai, China"},
        {url: "ws://47.74.41.30:8090", location: "本地 local"}
    ],
    RPC_URL: "http://wallet.flashchain.org/api/",
    DEFAULT_FAUCET: "http://47.74.21.162:3000",
    TESTNET_FAUCET: "http://test.faucet.flashchain.org"
};
