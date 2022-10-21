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

export const getLeaveData = (statuscode: string, recordNumber: { pageNumber: number, recordsPerPage: number }) => {
  return get(`${HostEndpoint}/leave?status=${statuscode}&pageNumber=${recordNumber.pageNumber}&recordsPerPage=${recordNumber.recordsPerPage}`)
}

export const postNewLeave = (formdata: formInputDatatype | {}) => {
  return post(`${HostEndpoint}/leave`, formdata);
};