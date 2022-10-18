import { useEffect, useState } from 'react'
import { DataTable, PageTitle } from '../../stories'
import { getLeaveData } from '../../APIs'
import { responseDataType } from '../../Types/globalTypes'
import { getData } from '../../Util/Helper'
import { dummyData } from '../../Util/Constants'
import style from './ManageLeaveRequest.module.scss'

export type manageLeaveRequestPropType = {
    logindate: string
}

function ManageLeaveRequest({ logindate }: manageLeaveRequestPropType) {

    const [pendingLeaveData, setpendingLeaveData] = useState<responseDataType[]>([]);

    useEffect(() => {
        const loginData = getData("loginData");

        const config = {
            headers: { Authorization: `Bearer ${loginData.token} ` }
        };

        getLeaveData(config, 'Pending').then((res) => {
            let intermidate = res.data.payload.data;

            intermidate = intermidate.map((pendingleave: responseDataType) => {
                const leaveObj = {
                    id: pendingleave.id,
                    department: pendingleave.department,
                    reason: pendingleave.reason,
                    name: `${pendingleave.firstName} ${pendingleave.lastName}`,
                    date: `${pendingleave.startDate}${(pendingleave.endDate !== pendingleave.startDate) ? ` to ${pendingleave.endDate}` : ''} `
                };
                return { ...pendingleave, ...leaveObj }
            })
            setpendingLeaveData(intermidate);
        });

    }, []);

    return (
        <>
            <PageTitle logindate={logindate} pagename={'Manage Leave Request'} isinnerPage={false} isButton={false} />

            <div className={style.py3} >
                <div className={style.tablecontent}>
                    {/* Table */}
                    <DataTable width={'100%'}
                        columns={[
                            {
                                field: "name",
                                headerName: "Name",
                                sortable: true,
                                renderCell: (params) => {
                                    return (
                                        <a href='/#'>{params.row.name}</a>
                                    );
                                },
                                flex: 1,
                            },
                            { field: "department", headerName: "Department", flex: 1 },
                            { field: "date", headerName: "Date", flex: 1 },
                            { field: "reason", headerName: "Reason", flex: 1 },
                            {
                                field: "actions",
                                headerName: "Action",
                                sortable: false,
                                renderCell: (params) => {
                                    return (
                                        <div>
                                            <i
                                                onClick={() => {

                                                }}
                                                style={{ cursor: "pointer" }}
                                                className="zmdi zmdi-eye"
                                            >
                                            </i>
                                        </div>
                                    );
                                },
                                flex: 1,
                            }
                        ]}
                        rows={pendingLeaveData.length === 0 ? dummyData : pendingLeaveData}
                    />
                </div>
            </div>
        </>
    )
}

export default ManageLeaveRequest
