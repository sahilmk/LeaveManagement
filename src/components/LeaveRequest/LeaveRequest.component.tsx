import React, { useState } from 'react'
import { Input, PageTitle, ButtonComponent } from '../../stories'
import { Form, Field } from 'react-final-form'
import * as style from './LeaveRequest.module.scss'

function LeaveRequest() {

    const onSubmit = () => { };
    const validate = () => { };

    const [radioValue, setRadioValue] = useState('multiday');

    return (
        <div >
            <PageTitle logindate='12-10-1989' pagename={'Leaves'} innerpage='Leave Request' />
            <div className={style.py30}>
                <div className={style.leaverequestform}>
                    <h2>Apply Leave</h2>
                    <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className={style.leavetypeselector}>
                                    <div className={style.radioinputs}>
                                        <Field
                                            name="leavetype"
                                            component="input"
                                            type="radio"
                                            value="Multiple Day"
                                            checked
                                            onClick={() => setRadioValue('multiday')}
                                        />
                                        <label>
                                            Multiple Day
                                        </label>
                                    </div>
                                    <div className={style.radioinputs}>
                                        <Field
                                            name="leavetype"
                                            component="input"
                                            type="radio"
                                            value="Single Day"
                                            onClick={() => setRadioValue('singleday')}
                                        />
                                        <label>
                                            Single Day
                                        </label>
                                    </div>
                                    <div className={style.radioinputs}>
                                        <Field
                                            name="leavetype"
                                            component="input"
                                            type="radio"
                                            value="Half Day"
                                            onClick={() => setRadioValue('halfday')}
                                        />
                                        <label>
                                            Half Day
                                        </label>
                                    </div>
                                </div>

                                <div className={style.inputfields}>
                                    {radioValue === 'multiday' ?
                                        <div className={style.displayflex}>
                                            <div className={style.displayinnerflex}>
                                                <div className="input">
                                                    <Field name="username">
                                                        {({ input, meta }) => (
                                                            <div>
                                                                <label htmlFor="leavefrom">Leave From</label>
                                                                <Input
                                                                    id='leavefrom'
                                                                    type='date'
                                                                    placeholder='Select Date'
                                                                    inputtype=''
                                                                    padding={'14px 18px 14px 19px'}
                                                                    width={440} />
                                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                                <div className="input">
                                                    <Field name="username">
                                                        {({ input, meta }) => (
                                                            <div>
                                                                <label htmlFor="leaveto">Leave To</label>
                                                                <Input
                                                                    id='leaveto'
                                                                    type='date'
                                                                    placeholder='Select Date'
                                                                    inputtype=''
                                                                    padding={'14px 18px 14px 19px'}
                                                                    width={440} />
                                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>

                                                <div className="input">
                                                    <Field name="username">
                                                        {({ input, meta }) => (
                                                            <div>
                                                                <label htmlFor="reason">Reason</label>
                                                                <Input
                                                                    id='reason'
                                                                    type='select'
                                                                    placeholder='Select Date'
                                                                    inputtype=''
                                                                    padding={'14px 18px 14px 19px'}
                                                                    width={440} />
                                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className={style.displayinnerflex}>
                                                <div className="input">
                                                    <label htmlFor="reason">Reason</label>
                                                    <Field name="reason" component="select" className={style.dropdown}>
                                                        <option>Sick Leave</option>
                                                        <option>Other</option>
                                                    </Field>
                                                </div>

                                                <div className="input">
                                                    <Field name="username">
                                                        {({ input, meta }) => (
                                                            <div>
                                                                <label htmlFor="otherremark">Other Remark</label>
                                                                <Input
                                                                    id='otherremark'
                                                                    type='text'
                                                                    placeholder='Select Date'
                                                                    inputtype=''
                                                                    padding={'14px 18px 14px 19px'}
                                                                    width={910} />
                                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className={style.displayflex}>
                                            <div className={style.displayinnerflex}>
                                                <div className="input">
                                                    <Field name="leavedate">
                                                        {({ input, meta }) => (
                                                            <div>
                                                                <label htmlFor="leavedate">Leave Date</label>
                                                                <Input
                                                                    id='leavedate'
                                                                    type='date'
                                                                    placeholder='Select Date'
                                                                    inputtype=''
                                                                    padding={'14px 18px 14px 19px'}
                                                                    width={440} />
                                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>

                                                <div className="input">
                                                    <Field name="username">
                                                        {({ input, meta }) => (
                                                            <div>
                                                                <label htmlFor="leavetype">Leave Type</label>
                                                                <Input
                                                                    id='leavetype'
                                                                    type='select'
                                                                    placeholder='Select Date'
                                                                    inputtype=''
                                                                    padding={'14px 18px 14px 19px'}
                                                                    width={440} />
                                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>

                                                <div className="input">
                                                    <label htmlFor="reason">Reason</label>
                                                    <Field name="favoriteColor" component="select" className={style.dropdown}>
                                                        <option>Paid</option>
                                                        <option>Unpaid</option>
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="input">
                                                <Field name="username">
                                                    {({ input, meta }) => (
                                                        <div>
                                                            <label htmlFor="otherremark">Other Remark</label>
                                                            <Input
                                                                id='otherremark'
                                                                type='text'
                                                                placeholder='Select Date'
                                                                inputtype=''
                                                                padding={'14px 18px 14px 19px'}
                                                                width={910} />
                                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <ButtonComponent label='Submit' type='submit' borderRadius={false} color='#fff' />
                                <ButtonComponent label='Cancel' type='reset' borderRadius={false} color='#173346' bgColor='#fafafa' border='solid 2px #ebebeb' />
                            </form>
                        )}
                    />
                </div>
            </div >
        </div >
    )
}

export default LeaveRequest
