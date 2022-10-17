import React from 'react'
import { DataTable, PageTitle } from '../../stories'
import style from './ManageLeaveRequest.module.scss'

export type manageLeaveRequestPropType = {
    logindate: string
}

function ManageLeaveRequest({ logindate }: manageLeaveRequestPropType) {
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
                                                    console.log("eye");
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
                        rows={[
                            {
                                id: "1",
                                name: `John Doe`,
                                reason: "Seek Leave",
                                department: "HRD",
                                date: "12/01/2018 to 14/01/2018",
                                appliedOn: "25/12/2017",
                            },
                            {
                                id: "2",
                                name: "Darvin Lynn",
                                reason: "Seek Leave",
                                department: "HRD",
                                date: "10/01/2018",
                                appliedOn: "25/12/2017",
                            }
                        ]}
                    />
                </div>
            </div>
        </>
    )
}

export default ManageLeaveRequest
