import { Protocol } from '@uniswap/router-sdk'
import { ChainId, V3SubgraphProvider, V2SubgraphProvider } from '@tokamak-network/tokamak-smart-order-router'

export const chainProtocols = [
  // V3.
  // {
  //   protocol: Protocol.V3,
  //   chainId: ChainId.TOKAMAK,
  //   timeout: 90000,
  //   provider: new V3SubgraphProvider(ChainId.TOKAMAK, 3, 90000),
  // },
  {
    protocol: Protocol.V3,
    chainId: ChainId.MAINNET,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.MAINNET, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.TOKAMAK_GOERLI,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.TOKAMAK_GOERLI, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.TITAN,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.TITAN, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.GÖRLI,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.GÖRLI, 3, 90000),
  },
  // {
  //   protocol: Protocol.V3,
  //   chainId: ChainId.CELO,
  //   timeout: 90000,
  //   provider: new V3SubgraphProvider(ChainId.CELO, 3, 90000),
  // },
  // Currently there is no working V3 subgraph for Optimism so we use a static provider.
  // V2.

  {
    protocol: Protocol.V2,
    chainId: ChainId.MAINNET,
    timeout: 840000,
    provider: new V2SubgraphProvider(ChainId.MAINNET, 3, 900000, true, 1000), // 1000 is the largest page size supported by thegraph
  },
]
