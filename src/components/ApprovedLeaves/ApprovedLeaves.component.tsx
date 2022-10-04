import React from 'react'
import { DataTable, PageTitle } from '../../stories'
import style from './ApprovedLeaves.module.scss';
import '../../Icons/css/material-design-iconic-font.css'

export type approvedLeavePropType = {
    logindate: string
}

function ApprovedLeave({ logindate }: approvedLeavePropType) {
    return (
        <>
            <PageTitle logindate={logindate} pagename={'Leaves'} innerPageNames={['Approved Leaves']} isinnerPage={true} isButton={false} />

            <div className={style.py3} >
                <div className={style.approvedpage}>


                    <DataTable width={'100%'} height={500}
                        columns={[
                            { field: "type", headerName: "Type", flex: 1 },
                            { field: "reason", headerName: "Reason", flex: 1 },
                            { field: "date", headerName: "Date", flex: 1 },
                            { field: "appliedOn", headerName: "Applied On", flex: 1 },
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
                                            <i
                                                onClick={() => {
                                                    console.log("eye");
                                                }}
                                                style={{ cursor: "pointer" }}
                                                className="zmdi zmdi-close"
                                            >
                                            </i>
                                        </div>
                                    );
                                },
                                flex: 1,
                            },
                        ]}
                        rows={[
                            {
                                id: "1",
                                type: "Paid",
                                reason: "Seek Leave",
                                date: "12/01/2018 to 14/01/2018",
                                appliedOn: "25/12/2017",
                            },
                            {
                                id: "2",
                                type: "Paid",
                                reason: "Seek Leave",
                                date: "10/01/2018",
                                appliedOn: "25/12/2017",
                            },
                        ]}
                    />
                </div>
            </div>
        </>
    )
}

export default ApprovedLeave
