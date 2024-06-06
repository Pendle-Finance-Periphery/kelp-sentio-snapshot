import { EthChainId } from "@sentio/sdk/eth";

export const MISC_CONSTS = {
  ONE_E18: BigInt("1000000000000000000"),
  ONE_DAY_IN_MINUTE: 60 * 24,
  ONE_DAY_IN_SECONDS: 60 * 60 * 24,
  ONE_HOUR_IN_SECONDS: 60 * 60,
  ZERO_ADDRESS: "0x0000000000000000000000000000000000000000",
  MULTICALL: "0xca11bde05977b3631167028862be2a173976ca11",
  AVERAGE_SECOND_PER_BLOCK: 0.35, // It doesn't hurt to make the steps shorter (avg currently is 0.254)
};

export const CONFIG = {
  BLOCKCHAIN: EthChainId.ARBITRUM,
  SNAPSHOT_FREQUENCY: 24 * 60, // 1 day in minute
  TARGETED_TIMESTAMP: 27360,
  MULTICALL_BATCH: 250,
};

export const PENDLE_POOL_ADDRESSES = {
  SY: "0xf176fb51f4eb826136a54fdc71c50fcd2202e272",
  YT: "0x2fdc424946aa72d42e2f897447d7c335e64845f0",
  LP: "0xed99fc8bdb8e9e7b8240f62f69609a125a0fbf14",
  MULTICALL: "0xca11bde05977b3631167028862be2a173976ca11",
  START_BLOCK: 19516902,
  TREASURY: "0x8270400d528c34e1596ef367eedec99080a1b592",
  EQB_STAKING: "0x501cff5df8a307aca27c916d6e1720d41fdf64a5",
  PENPIE_RECEIPT_TOKEN: "0x9e411b97437af296d6c4b482893c63ffd8dfbe6d",
  // STAKEDAO_RECEIPT_TOKEN: '0x396725b23e59d43588c8077ae4cc3cd31d51b7fb',
  LIQUID_LOCKERS: [
    {
      // Penpie
      address: "0x6db96bbeb081d2a85e0954c252f2c1dc108b3f81",
      receiptToken: "0x9e411b97437af296d6c4b482893c63ffd8dfbe6d",
    },
    {
      // EQB
      address: "0x64627901dadb46ed7f275fd4fc87d086cff1e6e3",
      receiptToken: "0x501cff5df8a307aca27c916d6e1720d41fdf64a5",
    },
    // {   // STAKEDAO
    //     address: '0xd8fa8dc5adec503acc5e026a98f32ca5c1fa289a',
    //     receiptToken: '0x396725b23e59d43588c8077ae4cc3cd31d51b7fb',
    // }
  ],
};
