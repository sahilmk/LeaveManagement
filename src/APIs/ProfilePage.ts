import { HostEndpoint } from "../Util/Endpoint";
import { get } from "../Util/ApiManager";

export const callProfilePageGet = (userId: number, config: { headers: { Authorization: string } }) => {
    return get(`${HostEndpoint}/user/${userId}`, config);
}