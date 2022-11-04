const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const stringInput = /^[a-zA-Z]+$/;
const phoneNumber = /^\d{10}$/;
const stringInputWithSpace = /^[a-zA-Z_ ]+$/;

const required = (value: string) => (value ? undefined : "Required");
const mustBePhoneNo = (value: string) =>
  !phoneNumber.test(value) ? "Enter valid Mobile No." : undefined;
const mustBeEmail = (value: string) =>
  !mailformat.test(value) ? "Enter a valid email" : undefined;
const mustBeString = (value: string) =>
  !stringInput.test(value) ? "Enter a valid Name" : undefined;
const mustBeDesignation = (value: string) =>
  !stringInputWithSpace.test(value) ? "Enter a valid designation." : undefined;
const enterDateRequired = (value: string) =>
  value ? undefined : "Please Enter Date";

const composeValidators =
  (...validators) =>
  (value: string) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export {
  required,
  mustBeEmail,
  mustBeString,
  mustBePhoneNo,
  mustBeDesignation,
  composeValidators,
  enterDateRequired,
};
