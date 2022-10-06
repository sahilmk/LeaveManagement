import React from 'react'
import { Form, Field } from 'react-final-form'
import { ButtonComponent, DataTable, Input, PageTitle } from '../../stories'
import style from './ApprovedLeaves.module.scss';
import '../../Icons/css/material-design-iconic-font.css'

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


    return (
        <>
            <PageTitle logindate={logindate} pagename={'Leaves'} innerPageNames={['Approved Leaves']} isinnerPage={true} isButton={false} />

            {/* Form to take the input for the filtering the table row. */}
            <div className={style.py3} >
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

                                    <div className={style.inputcontrol}>
                                        <label htmlFor="type">Type</label>
                                        <Field name="type" component="select" className={style.dropdown}>
                                            <option>Paid</option>
                                            <option>Unpaid</option>
                                        </Field>
                                    </div>

                                    <div className={style.inputcontrol}>
                                        <ButtonComponent label='Clear' type='reset' borderRadius={false} color='#173346' bgColor='#fafafa' border='solid 2px #ebebeb' />
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
                            }
                        ]}
                    />
                </div>
            </div>
        </>
    )
}

export default ApprovedLeave
