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
    SY: '0xd7df7e085214743530aff339afc420c7c720bfa7',
    YT: '0x323da63d354c9d79df927fd21ce5b97add3a50d9',
    LP: '0x6c269dfc142259c52773430b3c78503cc994a93e',
    MULTICALL: '0xca11bde05977b3631167028862be2a173976ca11',
    START_BLOCK: 20158640,
    TREASURY: '0x8270400d528c34e1596ef367eedec99080a1b592',
    EQB_STAKING: '0x518ba876c34c688dd7a3d161602973a7705bbff2',
    PENPIE_RECEIPT_TOKEN: '0x5ed63a582533ad98bf15bc8669607eea5a61398b',
    STAKEDAO_RECEIPT_TOKEN: '0x396725b23e59d43588c8077ae4cc3cd31d51b7fb',
    LIQUID_LOCKERS: [
      {
        // Penpie
        address: '0x6e799758cee75dae3d84e09d40dc416ecf713652',
        receiptToken: '0x5ed63a582533ad98bf15bc8669607eea5a61398b',
      },
      {
        // EQB
        address: '0x64627901dadb46ed7f275fd4fc87d086cff1e6e3',
        receiptToken: '0x518ba876c34c688dd7a3d161602973a7705bbff2',
      },
      // {   // STAKEDAO
      //     address: '0xd8fa8dc5adec503acc5e026a98f32ca5c1fa289a',
      //     receiptToken: '0x396725b23e59d43588c8077ae4cc3cd31d51b7fb',
      // }
    ],
  };
  