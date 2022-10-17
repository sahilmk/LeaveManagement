import React, { useEffect, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { Button, DataTable, Input, PageTitle } from '../../stories'
import { getLeaveData } from '../../APIs'
import { dummyData } from '../../Util/Constants'
import { getData } from '../../Util/Helper'
import { responseDataType } from '../../Types/globalTypes'
import style from './RejectedLeave.module.scss'

export type rejectedLeavePropType = {
    logindate: string
}

export type formInputTypes = {
    startdate?: string,
    enddate?: string,
    search?: string,
    type?: 'Paid' | 'Unpaid'
}

function RejectedLeave({ logindate }: rejectedLeavePropType) {

    const [rejectedLeaveData, setrejectedLeaveData] = useState<responseDataType[]>([]);

    const onSubmit = (e: formInputTypes) => { console.log(e) };

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

        getLeaveData(config, 'Rejected').then((res) => {
            let intermidate = res.data.payload.data;

            intermidate = intermidate.map((rejectedleave: responseDataType) => {
                const leaveObj = {
                    id: rejectedleave.id,
                    type: rejectedleave.type,
                    reason: rejectedleave.reason,
                    date: `${rejectedleave.startDate}${(rejectedleave.endDate !== rejectedleave.startDate) ? `to ${rejectedleave.startDate}` : ''} `,
                    appliedOn: rejectedleave.created_at?.split(' ')[0]
                };
                return { ...rejectedleave, ...leaveObj }
            })
            setrejectedLeaveData(intermidate);
        });

    }, []);



    return (
        <>
            <PageTitle logindate={logindate} pagename={'Leaves'} innerPageNames={['Rejected Leaves']} isinnerPage={true} isButton={false} />

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
                                                    padding={'14px 18px 14px 19px'}
                                                    width='300px'
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
                                                    width='300px'
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
                                                    padding={'14px 18px 14px 19px'}
                                                    width='300px'
                                                    onChange={e.input.onChange}
                                                    onBlur={e.input.onBlur}
                                                    onFocus={e.input.onFocus} />
                                                {e.meta.error && e.meta.touched && <span className={style.error}>{e.meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>

                                <div className={style.inputcontrol}>
                                    <Button label='Clear' type='reset' borderRadius={false} color='#173346' bgColor='#fafafa' border='solid 2px #ebebeb' />
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
                                    </div>
                                );
                            },
                            flex: 1,
                        },
                    ]}
                    rows={rejectedLeaveData.length === 0 ? dummyData : rejectedLeaveData}
                />
            </div>
        </>
    )
}

export default RejectedLeave
