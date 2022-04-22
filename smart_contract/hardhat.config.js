// https://eth-ropsten.alchemyapi.io/v2/xcyyNSmAYzKnbyV60Mp2dEz8RfoRBs8H

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/xcyyNSmAYzKnbyV60Mp2dEz8RfoRBs8H',
      accounts: ['9218ecca5f946080c9c99bfd27a4d05de7c291dd8a3bb3ca4fe766f356fe3ea7'],
    },
  },
};
