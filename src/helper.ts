import { EthContext, getProvider } from "@sentio/sdk/eth";
import { CONFIG, MISC_CONSTS, PENDLE_POOL_ADDRESSES } from "./consts.js";

export type ShareMapping = Record<string, bigint>;

export function isPendleAddress(addr: string) {
    addr = addr.toLowerCase();
    return addr == PENDLE_POOL_ADDRESSES.SY ||
        addr == PENDLE_POOL_ADDRESSES.YT ||
        addr == PENDLE_POOL_ADDRESSES.LP;
}

// @TODO: to modify this when liquid lockers launch
export function isLiquidLockerAddress(addr: string) {
    addr = addr.toLowerCase();
    return PENDLE_POOL_ADDRESSES.LIQUID_LOCKERS.some((liquidLockerInfo) => liquidLockerInfo.address == addr);
}

export function getUnixTimestamp(date: Date) {
    return Math.floor(date.getTime() / 1000);
}

export function getSumShareMapping(...shareMappings: ShareMapping[]): ShareMapping {
    const result: ShareMapping = {};
    for (const shareMapping of shareMappings) {
        for (const [addr, share] of Object.entries(shareMapping)) {
            result[addr] = (result[addr] || 0n) + share;
        }
    }
    return result;
}

export function getTargetedTimestamp(timestamp: number) {
    let targetedTimestamp = (timestamp - timestamp % MISC_CONSTS.ONE_DAY_IN_SECONDS + CONFIG.TARGETED_TIMESTAMP);
    if (targetedTimestamp > timestamp) {
        targetedTimestamp -= MISC_CONSTS.ONE_DAY_IN_SECONDS;
    }
    return targetedTimestamp;
}

export async function getTargetedBlock(ctx: EthContext, targetedTimestamp: number): Promise<number> {
    const provider = getProvider(ctx.chainId)!;
    let curTimestamp = getUnixTimestamp(ctx.timestamp);
    let curBlockNumber = Number(ctx.blockNumber);

    if (curTimestamp < targetedTimestamp) {
        throw new Error("Current timestamp is less than targeted timestamp");
    }
    let l = curBlockNumber - Math.floor((curTimestamp - targetedTimestamp) / MISC_CONSTS.AVERAGE_SECOND_PER_BLOCK) * 2;
    let r = curBlockNumber;
    let ans = l;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        let block = (await provider.getBlock(mid))!;

        if (Number(block.timestamp) < targetedTimestamp) {
            l = mid + 1;
            ans = mid;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}