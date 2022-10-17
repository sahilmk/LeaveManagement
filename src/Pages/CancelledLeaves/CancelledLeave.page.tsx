import React, { useEffect, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { getLeaveData } from '../../APIs'
import { DataTable, Input, PageTitle } from '../../stories'
import { responseDataType } from '../../Types/globalTypes'
import { dummyData } from '../../Util/Constants'
import { getData } from '../../Util/Helper'
import style from './CancelledLeave.module.scss'

export type cancelledLeavePropType = {
    logindate: string
}

export type formInputTypes = {
    startdate?: string | undefined,
    enddate?: string | undefined,
    search?: string,
    type?: 'Paid' | 'Unpaid'
}


function CancelledLeave({ logindate }: cancelledLeavePropType) {

    const [cancelledLeaveData, setcancelledLeaveData] = useState<responseDataType[]>([]);

    const onSubmit = (e: formInputTypes) => { };

    const validate = (e: formInputTypes) => {
        const errors: formInputTypes = {};

        if (!e.startdate) {
            errors.startdate = 'Please enter data';
        }
        if (!e.enddate) {
            errors.enddate = 'Please enter data';
        }

        if (e.startdate! > e.enddate!) {
            errors.startdate = 'Start date must higher than enddata';
            errors.enddate = 'End date must less than startdata';
        }

        if (!e.search) {
            errors.search = 'Please enter value you want to search';
        }

        return errors;
    };

    useEffect(() => {
        const loginData = getData("loginData");

        const config = {
            headers: { Authorization: `Bearer ${loginData.token} ` }
        };

        getLeaveData(config, 'Cancelled').then((res) => {
            let intermidate = res.data.payload.data;

            intermidate = intermidate.map((cencelledleave: responseDataType) => {
                const leaveObj = {
                    id: cencelledleave.id,
                    type: cencelledleave.type,
                    reason: cencelledleave.reason,
                    date: `${cencelledleave.startDate}${(cencelledleave.endDate !== cencelledleave.startDate) ? `to ${cencelledleave.startDate}` : ''} `,
                    appliedOn: cencelledleave.created_at?.split(' ')[0]
                };
                return { ...cencelledleave, ...leaveObj }
            })
            setcancelledLeaveData(intermidate);
        });

    }, [])

    return (
        <>
            <PageTitle logindate={logindate} pagename={'Leaves'} innerPageNames={['Cancelled Leaves']} isinnerPage={true} isButton={false} />

            <div className={style.approvedpage}>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
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
                                                    placeholder='Search here... '
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
                                    </div>
                                );
                            },
                            flex: 1,
                        },
                    ]}
                    rows={cancelledLeaveData.length === 0 ? dummyData : cancelledLeaveData}
                />
            </div>
        </>
    )
}

export default CancelledLeave
