import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { getLeaveData } from '../../APIs';
import { DataTable, Input, PageTitle } from '../../stories'
import { dummyData } from '../../Util/Constants';
import { getData } from '../../Util/Helper';
import style from './PendingLeave.module.scss';

export type pendingLeavePropType = {
    logindate: string
}

export type formInputTypes = {
    startdate?: string,
    enddate?: string,
    search?: string,
    type?: 'Paid' | 'Unpaid'
}

type responseDataType = {
    comments?: string,
    created_at?: string,
    department?: string,
    employeeId?: number,
    endDate?: string,
    firstName?: string,
    image?: string,
    isHalfDay?: number,
    isStartDateGone?: number,
    lastName?: string,
    reportedDate?: null | string,
    reportingComments?: null | string,
    reportingStatus?: string,
    startDate?: string,
    id: number,
    reason: string,
    type: string,
    date?: string,
    appliedOn?: string

}

function PendingLeave({ logindate }: pendingLeavePropType) {

    const onSubmit = (e: formInputTypes) => { console.log(e) };

    const [pendingLeaveData, setapprovedLeaveData] = useState<responseDataType[]>([]);

    const validate = (e: formInputTypes) => {
        const errors: formInputTypes = {};

        if (!e.startdate) {
            errors.startdate = 'Please enter data';
        }
        if (!e.enddate) {
            errors.enddate = 'Please enter data';
        }
        if (e.startdate! > e.enddate!) {
            errors.startdate = 'Start date must be higher than enddate';
            errors.enddate = 'End date must be lesser than startdate';
        }
        if (!e.search) {
            errors.search = 'Please enter value you want to search';
        }

        return errors;
    };

    useEffect(() => {
        const loginData = getData("LoginData");

        const config = {
            headers: { Authorization: `Bearer ${loginData.token} ` }
        };

        getLeaveData(config, 'Pending').then((res) => {
            let intermidate = res.data.payload.data;

            intermidate = intermidate.map((approvedleave: responseDataType) => {
                const leaveObj = {
                    id: approvedleave.id,
                    type: approvedleave.type,
                    reason: approvedleave.reason,
                    date: `${approvedleave.startDate}${(approvedleave.endDate !== approvedleave.startDate) ? `to ${approvedleave.startDate}` : ''} `,
                    appliedOn: approvedleave.created_at?.split(' ')[0]
                };
                return { ...approvedleave, ...leaveObj }
            })
            setapprovedLeaveData(intermidate);
        });

    }, [])


    return (
        <>
            <PageTitle logindate={logindate} pagename={'Leaves'} innerPageNames={['Pending Leaves']} isinnerPage={true} isButton={false} />

            {/* Form to take the input for the filtering the table row. */}
            <div className={style.approvedpage}>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={{ type: 'Paid' }}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div className={style.displayflex}>
                                <div className={style.inputcontrol}>
                                    <Field name="startdate">
                                        {(e) => (
                                            <div>
                                                <label htmlFor="startdate">Start Date</label>
                                                <Input
                                                    id='startdate'
                                                    type='date'
                                                    placeholder='Select Date'
                                                    inputtype=''
                                                    padding={'14px 18px 14px 19px'}
                                                    width={300}
                                                    onChange={e.input.onChange}
                                                    onBlur={e.input.onBlur}
                                                    onFocus={e.input.onFocus}
                                                />
                                                {e.meta.error && e.meta.touched && <span className={style.error}>{e.meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>

                                <div className={style.inputcontrol}>
                                    <Field name="enddate">
                                        {(e) => (
                                            <div>
                                                <label htmlFor="enddate">End Date</label>
                                                <Input
                                                    id='enddate'
                                                    type='date'
                                                    placeholder='Select Date'
                                                    inputtype=''
                                                    padding={'14px 18px 14px 19px'}
                                                    width={300}
                                                    onChange={e.input.onChange}
                                                    onBlur={e.input.onBlur}
                                                    onFocus={e.input.onFocus} />
                                                {e.meta.error && e.meta.touched && <span className={style.error}>{e.meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>

                                <div className={style.inputcontrol}>
                                    <Field name="search">
                                        {(e) => (
                                            <div>
                                                <label htmlFor="search">Search</label>
                                                <Input
                                                    id='search'
                                                    type='text'
                                                    placeholder='Search here...'
                                                    inputtype=''
                                                    padding={'14px 18px 14px 19px'}
                                                    width={300}
                                                    onChange={e.input.onChange}
                                                    onBlur={e.input.onBlur}
                                                    onFocus={e.input.onFocus} />
                                                {e.meta.error && e.meta.touched && <span className={style.error}>{e.meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </form>
                    )}
                />

                {/* Table */}
                <DataTable width={'100%'}
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
                    rows={pendingLeaveData.length === 0 ? dummyData : pendingLeaveData}
                />
            </div>
        </>
    )
}

export default PendingLeave
