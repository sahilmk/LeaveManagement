import React, { useEffect, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { Button, DataTable, Input, PageTitle } from '../../stories';
import { Theme } from '../../Theme';
import { getLeaveData } from '../../APIs';
import { getData } from '../../Util/Helper';
import { dummyData } from '../../Util/Constants';
import { responseDataType } from '../../Types/globalTypes';
import '../../Icons/css/material-design-iconic-font.css'
import style from './ApprovedLeaves.module.scss';

export type approvedLeavePropType = {
    logindate: string
}

export type formInputTypes = {
    startdate?: string,
    enddate?: string,
    search?: string,
    type?: 'Paid' | 'Unpaid'
}

function ApprovedLeave({ logindate }: approvedLeavePropType) {

    const [approvedLeaveData, setapprovedLeaveData] = useState<responseDataType[]>([]);
    const [unchangedData, setUnchangedData] = useState<responseDataType[]>([]);

    const onSubmit = (e: formInputTypes) => {
        if (e.startdate) {
            const newPendingLeaveData = unchangedData.filter((leave) => {
                return leave.startDate === e.startdate;
            })
            if (newPendingLeaveData.length === 0) {
                alert('No Data Found');
            } else {
                setapprovedLeaveData(newPendingLeaveData)
            }
        }

        if (e.enddate) {
            const newPendingLeaveData = unchangedData.filter((leave) => {
                return leave.endDate === e.enddate;
            })
            if (newPendingLeaveData.length === 0) {
                alert('No Data Found');
            } else {
                setapprovedLeaveData(newPendingLeaveData)
            }
        }

        if (e.search) {
            const newPendingLeaveData = unchangedData.filter((leave) => {
                return leave.reason.includes(e.search);
            })
            if (newPendingLeaveData.length === 0) {
                alert('No Data Found');
            } else {
                setapprovedLeaveData(newPendingLeaveData)
            }
        }

        if (e.type) {
            const newPendingLeaveData = unchangedData.filter((leave) => {
                return leave.type === e.type;
            })
            if (newPendingLeaveData.length === 0) {
                alert('No Data Found');
            } else {
                setapprovedLeaveData(newPendingLeaveData)
            }
        }
    };

    useEffect(() => {
        const loginData = getData("loginData");

        const config = {
            headers: { Authorization: `Bearer ${loginData.token} ` }
        };

        getLeaveData(config, 'Approved').then((res) => {
            let intermidate = res.data.payload.data;

            intermidate = intermidate.map((approvedleave: responseDataType) => {
                const leaveObj = {
                    id: approvedleave.id,
                    type: approvedleave.type,
                    reason: approvedleave.reason,
                    date: `${approvedleave.startDate}${(approvedleave.endDate !== approvedleave.startDate) ? ` to ${approvedleave.endDate}` : ''} `,
                    appliedOn: approvedleave.created_at?.split(' ')[0]
                };
                return { ...approvedleave, ...leaveObj }
            })
            setapprovedLeaveData(intermidate.length === 0 ? dummyData : intermidate);
            setUnchangedData(intermidate.length === 0 ? dummyData : intermidate);
        });

    }, []);


    return (
        <>
            <PageTitle logindate={logindate} pagename={'Leaves'} innerPageNames={['Approved Leaves']} isinnerPage={true} isButton={false} />

            {/* Form to take the input for the filtering the table row. */}
            <div className={style.py3} >
                <div className={style.approvedpage}>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={{ type: 'Paid' }}
                        render={({ handleSubmit }) => (
                            <form onChange={handleSubmit}>
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
                                                        padding={'1.4rem 1.8rem 1.4rem 1.9rem'}
                                                        width='30rem'
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
                                                        padding={'1.4rem 1.8rem 1.4rem 1.9rem'}
                                                        width='30rem'
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
                                                        padding={'1.4rem 1.8rem 1.4rem 1.9rem'}
                                                        width='30rem'
                                                        onChange={e.input.onChange}
                                                        onBlur={e.input.onBlur}
                                                        onFocus={e.input.onFocus} />
                                                    {e.meta.error && e.meta.touched && <span className={style.error}>{e.meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className={style.inputcontrol}>
                                        <label htmlFor="type">Type</label>
                                        <Field name="type" component="select" className={style.dropdown}>
                                            <option>Paid</option>
                                            <option>Unpaid</option>
                                            <option>extra2</option>
                                        </Field>
                                    </div>

                                    <div className={style.inputcontrol}>
                                        <Button label='Clear' type='reset' borderRadius={false} color={Theme.colors.yankeesBlueColor} bgColor={Theme.colors.lotionColor} border={`solid 0.2rem ${Theme.colors.brightGrayColor}`} />
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

                                                }}
                                                style={{ cursor: "pointer" }}
                                                className="zmdi zmdi-eye"
                                            >
                                            </i>
                                            <i
                                                onClick={() => {

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
                        rows={approvedLeaveData}
                    />
                </div>
            </div>
        </>
    )
}

export default ApprovedLeave
