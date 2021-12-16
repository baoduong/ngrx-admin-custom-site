/**
 * offline = number of documents where: agent_precense.presenceState in [“Offline“, “BeRightBack”]
 * available = number of documents where: agent_presence.presenceState in [“Online“, “Away”, “IdleOnline”]
 * break = number of documents where: agent_presenceState in [“DoNotDisturb”]
 * inbound = number of documents where:
 * call_statistics.direction = “Inbound”
 * and call_statistics.currentStatus <> “ENDED” and call_statistics.agentSipUri.length > 0
 * outbound = number of documents where:
 * call_statistics.direction = “Outbound”
 * and call_statistics.currentStatus <> “ENDED” and call_statistics.agentSipUri.length > 0
 */
export interface AgentPresenceStatsModel {
    offline: number;
    available: number;
    break: number;
    inboud: number;
    outbound: number;
}
