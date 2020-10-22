require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index release mad hospital give praise army gaze'; 
let testAccounts = [
"0x14e1fec229f5f809b67ed9ad60e5a1d63f1718e1a7f2a858484864e45a56fc71",
"0x1fba6b7c20c8b9d0caf415720b03339567b939498a0c9a7be43d18e3d06b5061",
"0xcb32cb29ffb65e75ad3355342feb0cfa41ddcf9f9d1f7f82611bd875538f0606",
"0xc3bc14dc49db83aeb34dedd5d49641dcf17e2efa20dce4b9c8622c6ed3997cad",
"0xc8c8d5e32cbb4544ded8404dce509485b5b3695845847da70de05f9dff94886a",
"0x38075132cb3e5e11bac1610df7062eb77234527be8448a4eb23bfe3662247082",
"0x4dc11fa8e9ef3f90da75be8a2bf5c1b5198eb333ac59bc9340b508d6356f2c23",
"0x74ca628004d496e687328a3b61fc90b1aaf7446067465a18103847224b5cf8b4",
"0x9673658d1b41c6d5470dee10c5d0ac647218871ca26b352c86b39c3e3d345a6f",
"0x6519cecada2b3e719ae5b69b8b3728af07a6ecbf39c2f4b14c9491ace89ba0a5"
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
            version: '^0.5.11'
        }
    }
};
