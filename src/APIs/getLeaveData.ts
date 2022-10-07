import { HostEndpoint, get, getData } from "../Util";
import { post } from "../Util/ApiManager";

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

export const postNewLeave = (formdata: formInputDatatype | {}) => {

    const loginData = getData("LoginData");

    const config = {
        headers: { Authorization: `Bearer ${loginData.token}` }
    };

    return post(`${HostEndpoint}/leave`, formdata, config);
};