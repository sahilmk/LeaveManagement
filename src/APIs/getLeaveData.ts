import { get, post } from "../Util/ApiManager";
import { HostEndpoint } from "../Util/Endpoint";

type formInputDatatype = {
    startDate: string,
    endDate?: string,
    comments: string,
    leaveTypeId: number,
    leaveReasonId: number,
    type: 'multiple' | 'half' | 'single'
}

export const getLeaveData = (config: { headers: { Authorization: string } }, statuscode: string) => {
    return get(`${HostEndpoint}/leave?status=${statuscode}&pageNumber=1&recordsPerPage=10`, config)
}

export const postNewLeave = (config: { headers: { Authorization: string } }, formdata: formInputDatatype | {}) => {
    return post(`${HostEndpoint}/leave`, formdata, config);
};