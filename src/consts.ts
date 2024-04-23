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
    SY: "0x730a5e2acebccaa5e9095723b3cb862739da793c",
    YT: "0x0ed3a1d45dfdcf85bcc6c7bafdc0170a357b974c",
    LP: "0x4f43c77872db6ba177c270986cd30c3381af37ee",
    START_BLOCK: 19059129,
    TREASURY: "0x8270400d528c34e1596ef367eedec99080a1b592",
    EQB_STAKING: "0xaab4b380b88f4a08acf8d8f74183a717b552fd6c",
    PENPIE_RECEIPT_TOKEN: "0x12ed306b2b46272157434fb17e2e721d65d9fbb3",
    STAKEDAO_RECEIPT_TOKEN: "0xbbfe1d391b80c759073711520b3aaca796437585",
    LIQUID_LOCKERS: [
        {
            // Penpie
            address: "0x6e799758cee75dae3d84e09d40dc416ecf713652",
            receiptToken: "0x12ed306b2b46272157434fb17e2e721d65d9fbb3",
        },
        {
            // EQB
            address: '0x64627901dadb46ed7f275fd4fc87d086cff1e6e3',
            receiptToken: "0xaab4b380b88f4a08acf8d8f74183a717b552fd6c",
        },
        {   // STAKEDAO
            address: '0xd8fa8dc5adec503acc5e026a98f32ca5c1fa289a',
            receiptToken: '0xbbfe1d391b80c759073711520b3aaca796437585',
        }
    ]
}