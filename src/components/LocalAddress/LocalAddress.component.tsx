import { Form, Field } from "react-final-form";
import { Input, ButtonComponent } from '../../stories';
import PageStyle from './LocalAddress.module.scss';

type localAddType = {
    localAddress?: string,
    localAddress2?: string,
    pincode?: string,
    state?: string,
    city?: string
}

const initialValues = {
    localAddress: 'Address Line 1',
    localAddress2: 'Address Line 2',
    pincode: '360015',
    state: 'Gujarat',
    city: 'Ahmedabad'
}

const LocalAddress = () => {

    const onSubmit = (e: localAddType) => {

    }

    const validate = (e: localAddType) => {
        const errors: localAddType = {};
        return errors;
    }

    return (
        <div className={PageStyle.localAddress}>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                initialValues={initialValues}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={PageStyle.localAddress__flex}>
                            <div>
                                <Field name="localAddress">
                                    {(e) => (
                                        <div className={PageStyle.localAddress__input}>
                                            <label htmlFor="localAddress"> Local Address 1</label>
                                            <Input id="localAddress" type="text" placeholder="Enter Local Address Line 1" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={900} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="localAddress2">
                                    {(e) => (
                                        <div className={PageStyle.localAddress__input}>
                                            <label htmlFor="localAddress2"> Local Address 2</label>
                                            <Input id="localAddress2" type="text" placeholder="Enter Local Address Line 2" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={900} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <div className={PageStyle.localAddress__innerflex}>
                                    <div>
                                        <Field name="pincode">
                                            {(e) => (
                                                <div className={PageStyle.localAddress__input}>
                                                    <label htmlFor="pincode"> Pincode </label>
                                                    <Input id="pincode" type="text" placeholder="Enter Pincode" inputtype=""
                                                        padding={"14px 18px 14px 19px"} width={440} value={e.input.value}
                                                        onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                                    />
                                                    {e.meta.error && e.meta.touched && (
                                                        <span> {e.meta.error} </span>
                                                    )}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div className={PageStyle.localAddress__button}>
                                        <ButtonComponent label={'Update Address'} bgColor={'#173346'} color={'#fff'} size={'1.8rem'} borderRadius={false} onClick={(e) => { console.log(e) }} type={'submit'} />
                                        <ButtonComponent label={'Cancel'} bgColor={'#fafafa'} color={'#173346'} size={'2rem'} borderRadius={false} border={'solid 2px #ebebeb'} onClick={(e) => { console.log(e) }} type={'button'} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Field name="state">
                                    {(e) => (
                                        <div className={PageStyle.localAddress__input}>
                                            <label htmlFor="state"> State</label>
                                            <Input id="state" type="text" placeholder="Enter State" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={420} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="city">
                                    {(e) => (
                                        <div className={PageStyle.localAddress__input}>
                                            <label htmlFor="city"> City</label>
                                            <Input id="city" type="text" placeholder="Enter city" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={420} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>
                    </form>
                )}
            />
        </div>
    );
}

export default LocalAddress;