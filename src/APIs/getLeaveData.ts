import { HostEndpoint, post, get } from "../Util";

export const getLeaveData = (config: { headers: { Authorization: string } }, statuscode: string) => {
    return get(`${HostEndpoint}/leave?status=${statuscode}&pageNumber=1&recordsPerPage=10`, config)
}