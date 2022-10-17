import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { getLeaveData } from '../../APIs';
import { DataTable, Input, PageTitle } from '../../stories'
import { dummyData } from '../../Util/Constants';
import { getData } from '../../Util/Helper';
import { responseDataType } from '../../Types/globalTypes';
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


function PendingLeave({ logindate }: pendingLeavePropType) {

    const [pendingLeaveData, setpendingLeaveData] = useState<responseDataType[]>([]);

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
            errors.startdate = 'Start date must be higher than enddate';
            errors.enddate = 'End date must be lesser than startdate';
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

        getLeaveData(config, 'Pending').then((res) => {
            let intermidate = res.data.payload.data;

            intermidate = intermidate.map((pendingleave: responseDataType) => {
                const leaveObj = {
                    id: pendingleave.id,
                    type: pendingleave.type,
                    reason: pendingleave.reason,
                    date: `${pendingleave.startDate}${(pendingleave.endDate !== pendingleave.startDate) ? `to ${pendingleave.startDate}` : ''} `,
                    appliedOn: pendingleave.created_at?.split(' ')[0]
                };
                return { ...pendingleave, ...leaveObj }
            })
            setpendingLeaveData(intermidate);
        });

    }, []);


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
                    rows={pendingLeaveData.length === 0 ? dummyData : pendingLeaveData}
                />
            </div>
        </>
    )
}

export default PendingLeave
