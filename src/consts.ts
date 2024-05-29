import { EthChainId } from '@sentio/sdk/eth'



export const MISC_CONSTS = {
    ONE_E18: BigInt("1000000000000000000"),
    ONE_DAY_IN_MINUTE: 60 * 24,
    ONE_DAY_IN_SECONDS: 60 * 60 * 24,
    ONE_HOUR_IN_SECONDS: 60 * 60,
    ZERO_ADDRESS: "0x0000000000000000000000000000000000000000",
    AVERAGE_SECOND_PER_BLOCK: 12,
    MULTICALL: "0xca11bde05977b3631167028862be2a173976ca11",
}

export const CONFIG = {
    BLOCKCHAIN: EthChainId.ETHEREUM,
    SNAPSHOT_FREQUENCY: 24 * 60, // 1 day in minute
    TARGETED_TIMESTAMP: 27360,
    MULTICALL_BATCH: 250,
}

export const PENDLE_POOL_ADDRESSES = {
    SY: '0x730a5e2acebccaa5e9095723b3cb862739da793c',
    YT: '0xe653e4048620e546afff02d3689678896d22e236',
    LP: '0x6b4740722e46048874d84306b2877600abcea3ae',
    MULTICALL: '0xca11bde05977b3631167028862be2a173976ca11',
    START_BLOCK: 19516902,
    TREASURY: '0x8270400d528c34e1596ef367eedec99080a1b592',
    EQB_STAKING: '0xde3e70bf3ebe177399edd3b0c156141ff24643e1',
    PENPIE_RECEIPT_TOKEN: '0x4120ae0cc32eebf5e201be79390fbb063275987b',
    STAKEDAO_RECEIPT_TOKEN: '0x396725b23e59d43588c8077ae4cc3cd31d51b7fb',
    LIQUID_LOCKERS: [
      {
        // Penpie
        address: '0x6e799758cee75dae3d84e09d40dc416ecf713652',
        receiptToken: '0x4120ae0cc32eebf5e201be79390fbb063275987b',
      },
      {
        // EQB
        address: '0x64627901dadb46ed7f275fd4fc87d086cff1e6e3',
        receiptToken: '0xde3e70bf3ebe177399edd3b0c156141ff24643e1',
      },
      {   // STAKEDAO
          address: '0xd8fa8dc5adec503acc5e026a98f32ca5c1fa289a',
          receiptToken: '0x396725b23e59d43588c8077ae4cc3cd31d51b7fb',
      }
    ],
  };
  