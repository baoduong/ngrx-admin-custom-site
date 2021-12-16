/**
 * https://infodation.atlassian.net/wiki/spaces/IFDUSA/pages/2478178451/Dialogue+Studio+BioRad#2.1.-agent-presence-stats
 */
export interface SLAModel {
    dailyAnswered: number;
    dailyAbandoned: number;
    mtdAnswered: number;
    mtdAbandoned: number;
    wtdAnswered: number;
    wtdAbandoned: number;
    inboundPicked: number;
}
