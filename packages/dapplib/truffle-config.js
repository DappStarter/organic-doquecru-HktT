require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note museum until install climb symptom twin'; 
let testAccounts = [
"0xdd102f34ff94ad52515cbcb839ec6fca869e5baf0fc651890fff2591568f0c29",
"0xbb4fbfbaafc33e0916aaae94a46dd35178ad09e50a04fbaca3ca0e31e1edf921",
"0x9d463be9d14551a432e7ec24847006d32d38e48d26d0befd1c7ace0e67c71a61",
"0xa9611e195a5bba1565a61d176fae11100531a37e4675bb5626db24a5726fe530",
"0xa816b54e3f27a2ea5acd5aa96b6fec2831d96fc622589254e54fec65774c5bda",
"0xe911ce117d1bdc67361ac22984ddf793c6ed08200f18624d38b3bbbab47d472d",
"0xb833d9f1c18e2f95dd127242dae4ce52d7c08606bda97fcfac3d95a4ebc2a78c",
"0x7f4f17bedbeb85f364f58c9fdffdb247f6ec6b00c8aeeb5f618500626a2c7861",
"0xc7245e2428cfdbd49d6965781a4227cb2ffead66cdf6ec19ffe5c65af3d1954a",
"0xd900e057309c8f5e76bc3ddb82d0aa665a2f9a6c928e3dbf8d6a0ca2cd3c4b2c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

