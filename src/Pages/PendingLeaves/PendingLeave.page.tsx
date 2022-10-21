import { useEffect, useRef, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { DataTable, Input, PageTitle } from '../../stories'
import { getLeaveData } from '../../APIs';
import { responseDataType } from '../../Types/globalTypes';
import { dummyData } from '../../Util/Constants';
import style from './PendingLeave.module.scss';

export type pendingLeavePropType = {
    logindate: string
}

export type formInputTypes = {
    startdate?: string,
    endDate?: string,
    search?: string,
    type?: 'Paid' | 'Unpaid'
}

function PendingLeave({ logindate }: pendingLeavePropType) {

    const [pendingLeaveData, setpendingLeaveData] = useState<responseDataType[]>([]);
    const [unchangedData, setUnchangedData] = useState<responseDataType[]>([]);
    const searchInput = useRef('');

    const onSubmit = (e: formInputTypes) => {
        let newPendingLeaveData: responseDataType[] = [];

        if (e.startdate || e.endDate) {
            if (e.startdate) {

                (unchangedData.filter((leave) => {
                    return leave.startDate! >= e.startdate!;
                })).map((filterData) => {
                    newPendingLeaveData.push(filterData)
                });

                if (newPendingLeaveData.length === 0) {
                    alert('No Data Found');
                    setpendingLeaveData([{
                        id: 0,
                        type: '',
                        reason: '',
                        date: '',
                        appliedOn: ''
                    }]);
                } else {
                    setpendingLeaveData(newPendingLeaveData);
                }
            }

            if (e.endDate) {

                newPendingLeaveData = ((newPendingLeaveData.length === 0 ? unchangedData : newPendingLeaveData).filter((leave) => {
                    return leave.endDate! <= e.endDate!;
                }))

                if (newPendingLeaveData.length === 0) {
                    alert('No Data Found');
                    setpendingLeaveData([{
                        id: 0,
                        type: '',
                        reason: '',
                        date: '',
                        appliedOn: ''
                    }]);
                } else {
                    setpendingLeaveData(newPendingLeaveData)
                }
            }
        } else {
            setpendingLeaveData(unchangedData);
        }

        if (e.search) {
            newPendingLeaveData = (newPendingLeaveData.length === 0 ? unchangedData : newPendingLeaveData).filter((leave) => {
                return leave.reason.includes(e.search!);
            })

            if (newPendingLeaveData.length === 0) {
                alert(`${searchInput.current.value} not found`);
                searchInput.current.value = '';
                setpendingLeaveData([{
                    id: 0,
                    type: '',
                    reason: '',
                    date: '',
                    appliedOn: ''
                }]);
            } else {
                setpendingLeaveData(newPendingLeaveData)
            }
        }
    };

    const validate = (e: formInputTypes) => {
        const errors: formInputTypes = {};

        if (e.endDate! < e.startdate!) {
            errors.endDate = 'Enddate must be less than start date';
        }

        return errors;
    }

    useEffect(() => {
        getLeaveData('Pending', { pageNumber: 1, recordsPerPage: 10 }).then((res) => {
            let intermidate = res.data.payload.data;

            intermidate = intermidate.map((pendingleave: responseDataType) => {
                const leaveObj = {
                    id: pendingleave.id,
                    type: pendingleave.type,
                    reason: pendingleave.reason,
                    date: `${pendingleave.startDate}${(pendingleave.endDate !== pendingleave.startDate) ? ` to ${pendingleave.endDate}` : ''} `,
                    appliedOn: pendingleave.created_at?.split(' ')[0]
                };
                return { ...pendingleave, ...leaveObj }
            })
            setpendingLeaveData(intermidate);
            setUnchangedData(intermidate.length === 0 ? dummyData : intermidate);
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
                        <form onChange={handleSubmit} >
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
                                    <Field name="endDate">
                                        {(e) => (
                                            <div>
                                                <label htmlFor="endDate">End Date</label>
                                                <Input
                                                    id='endDate'
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
                                                    onFocus={e.input.onFocus}
                                                    reference={searchInput} />
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
