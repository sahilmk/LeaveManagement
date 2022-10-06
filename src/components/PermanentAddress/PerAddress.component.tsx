import { Form, Field } from "react-final-form";
import { Input, ButtonComponent } from '../../stories';
import PageStyle from './PerAddress.module.scss';

type perAddType = {
    perAddress?: string,
    perAddress2?: string,
    pincode?: string,
    state?: string,
    city?: string
}

const initialValues = {
    perAddress: 'Address Line 1',
    perAddress2: 'Address Line 2',
    pincode: '360015',
    state: 'Gujarat',
    city: 'Ahmedabad'
}

const PermanentAddress = () => {

    const onSubmit = (e: perAddType) => {

    }

    const validate = (e: perAddType) => {
        const errors: perAddType = {};
        return errors;
    }

    return (
        <div className={PageStyle.perAddress}>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                initialValues={initialValues}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={PageStyle.perAddress__flex}>
                            <div>
                                <Field name="perAddress">
                                    {(e) => (
                                        <div className={PageStyle.perAddress__input}>
                                            <label htmlFor="perAddress"> Permanent Address 1</label>
                                            <Input id="perAddress" type="text" placeholder="Enter Permanent Address Line 1" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={900} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="perAddress2">
                                    {(e) => (
                                        <div className={PageStyle.perAddress__input}>
                                            <label htmlFor="perAddress2"> Permanent Address 2</label>
                                            <Input id="perAddress2" type="text" placeholder="Enter Permanent Address Line 2" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={900} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <div className={PageStyle.perAddress__innerflex}>
                                    <div>
                                        <Field name="pincode">
                                            {(e) => (
                                                <div className={PageStyle.perAddress__input}>
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
                                    <div className={PageStyle.perAddress__button}>
                                        <ButtonComponent label={'Update Address'} bgColor={'#173346'} color={'#fff'} size={'1.8rem'} borderRadius={false} onClick={(e) => { console.log(e) }} type={'submit'} />
                                        <ButtonComponent label={'Cancel'} bgColor={'#fafafa'} color={'#173346'} size={'2rem'} borderRadius={false} border={'solid 2px #ebebeb'} onClick={(e) => { console.log(e) }} type={'button'} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Field name="state">
                                    {(e) => (
                                        <div className={PageStyle.perAddress__input}>
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
                                        <div className={PageStyle.perAddress__input}>
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

export default PermanentAddress;