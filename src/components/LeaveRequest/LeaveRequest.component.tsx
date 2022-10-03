import React, { useState } from 'react'
import { Input, PageTitle, ButtonComponent } from '../../stories'
import { Form, Field } from 'react-final-form'
import * as style from './LeaveRequest.module.scss'

type fieldInputType = {
    leavefrom?: Date | undefined,
    leaveto?: Date,
    reason: 'Other' | 'Sick Leave',
    leavetype: 'Unpaid' | 'Paid',
    otherremark: string
}

function LeaveRequest() {

    const onSubmit = (e: fieldInputType) => { console.log(e.leavefrom) };
    const validate = (e: fieldInputType) => {
        const errors = {};
        if (e.leavefrom > e.leaveto) {
            errors.leavefrom = "Leave From date must be less than Leave To date";
            errors.leaveto = "Leave To date must be higher than Leave From date";
        }
    };

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
                        initialValues={{ reason: 'Other', leavetype: 'Paid' }}
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
                                                    <Field name="leavefrom">
                                                        {(e) => (
                                                            <div>
                                                                <label htmlFor="leavefrom">Leave From</label>
                                                                <Input
                                                                    id='leavefrom'
                                                                    type='date'
                                                                    placeholder='Select Date'
                                                                    inputtype=''
                                                                    padding={'14px 18px 14px 19px'}
                                                                    width={440}
                                                                    onChange={e.input.onChange}
                                                                    onBlur={e.input.onBlur}
                                                                    onFocus={e.input.onFocus}
                                                                />
                                                                {e.meta.error && e.meta.touched && <span>{e.meta.error}</span>}
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>
                                                <div className="input">
                                                    <Field name="leaveto">
                                                        {(e) => (
                                                            <div>
                                                                <label htmlFor="leaveto">Leave To</label>
                                                                <Input
                                                                    id='leaveto'
                                                                    type='date'
                                                                    placeholder='Select Date'
                                                                    inputtype=''
                                                                    padding={'14px 18px 14px 19px'}
                                                                    width={440}
                                                                    onChange={e.input.onChange}
                                                                    onBlur={e.input.onBlur}
                                                                    onFocus={e.input.onFocus} />
                                                                {e.meta.error && e.meta.touched && <span>{e.meta.error}</span>}
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>

                                                <div className="input">
                                                    <label htmlFor="reason">Reason</label>
                                                    <Field name="reason" component="select" className={style.dropdown}>
                                                        <option>Sick Leave</option>
                                                        <option>Other</option>
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className={style.displayinnerflex}>
                                                <div className="input">
                                                    <label htmlFor="reason">Leave Type</label>
                                                    <Field name="leavetype" component="select" className={style.dropdown}>
                                                        <option>Paid</option>
                                                        <option>Unpaid</option>
                                                    </Field>
                                                </div>

                                                <div className="input">
                                                    <Field name="otherremark">
                                                        {(e) => (
                                                            <div>
                                                                <label htmlFor="otherremark">Other Remark</label>
                                                                <Input
                                                                    id='otherremark'
                                                                    type='text'
                                                                    placeholder='Remark'
                                                                    inputtype=''
                                                                    padding={'14px 18px 14px 19px'}
                                                                    width={910}
                                                                    onChange={e.input.onChange}
                                                                    onBlur={e.input.onBlur}
                                                                    onFocus={e.input.onFocus} />
                                                                {e.meta.error && e.meta.touched && <span>{e.meta.error}</span>}
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
                                                        {(e) => (
                                                            <div>
                                                                <label htmlFor="leavedate">Leave Date</label>
                                                                <Input
                                                                    id='leavedate'
                                                                    type='date'
                                                                    placeholder='Select Date'
                                                                    inputtype=''
                                                                    padding={'14px 18px 14px 19px'}
                                                                    width={440}
                                                                    onChange={e.input.onChange}
                                                                    onBlur={e.input.onBlur}
                                                                    onFocus={e.input.onFocus} />
                                                                {e.meta.error && e.meta.touched && <span>{e.meta.error}</span>}
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>

                                                <div className="input">
                                                    <label htmlFor="reason">Leave Type</label>
                                                    <Field name="leavetype" component="select" className={style.dropdown}>
                                                        <option>Paid</option>
                                                        <option>Unpaid</option>
                                                    </Field>
                                                </div>

                                                <div className="input">
                                                    <label htmlFor="reason">Reason</label>
                                                    <Field name="reason" component="select" className={style.dropdown}>
                                                        <option>Sick Leave</option>
                                                        <option>Other</option>
                                                    </Field>
                                                </div>
                                            </div>
                                            <div className="input">
                                                <Field name="otherremark">
                                                    {(e) => (
                                                        <div>
                                                            <label htmlFor="otherremark">Other Remark</label>
                                                            <Input
                                                                id='otherremark'
                                                                type='text'
                                                                placeholder='Remark'
                                                                inputtype=''
                                                                padding={'14px 18px 14px 19px'}
                                                                width={910}
                                                                onChange={e.input.onChange}
                                                                onBlur={e.input.onBlur}
                                                                onFocus={e.input.onFocus} />
                                                            {e.meta.error && e.meta.touched && <span>{e.meta.error}</span>}
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
