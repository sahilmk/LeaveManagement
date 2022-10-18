import { useEffect, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { Button, DataTable, Input, PageTitle } from '../../stories'
import { getLeaveData } from '../../APIs'
import { responseDataType } from '../../Types/globalTypes'
import { dummyData } from '../../Util/Constants'
import { getData } from '../../Util/Helper'
import style from './RejectedLeave.module.scss'
import { Theme } from '../../Theme'

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
    const [unchangedData, setUnchangedData] = useState<responseDataType[]>([]);

    const onSubmit = (e: formInputTypes) => {
        let newRejectedLeaveData;

        if (e.startdate) {
            newRejectedLeaveData = unchangedData.filter((leave) => {
                return leave.startDate === e.startdate;
            })
            if (newRejectedLeaveData.length === 0) {
                alert('No Data Found');
            } else {
                setrejectedLeaveData(newRejectedLeaveData)
            }
        }

        if (e.enddate) {
            newRejectedLeaveData = unchangedData.filter((leave) => {
                return leave.endDate === e.enddate;
            })
            if (newRejectedLeaveData.length === 0) {
                alert('No Data Found');
            } else {
                setrejectedLeaveData(newRejectedLeaveData)
            }
        }

        if (e.search) {
            newRejectedLeaveData = unchangedData.filter((leave) => {
                return leave.reason.includes(e.search);
            })
            if (newRejectedLeaveData.length === 0) {
                alert('No Data Found');
            } else {
                setrejectedLeaveData(newRejectedLeaveData)
            }
        }

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
                    date: `${rejectedleave.startDate}${(rejectedleave.endDate !== rejectedleave.startDate) ? ` to ${rejectedleave.endDate}` : ''} `,
                    appliedOn: rejectedleave.created_at?.split(' ')[0]
                };
                return { ...rejectedleave, ...leaveObj }
            })
            setrejectedLeaveData(intermidate.length === 0 ? dummyData : intermidate);
            setUnchangedData(intermidate.length === 0 ? dummyData : intermidate);
        });

    }, []);



    return (
        <>
            <PageTitle logindate={logindate} pagename={'Leaves'} innerPageNames={['Rejected Leaves']} isinnerPage={true} isButton={false} />

            <div className={style.approvedpage}>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <form onChange={handleSubmit}>
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

                                <div className={style.inputcontrol}>
                                    <Button label='Clear' type='reset' borderRadius={false} color={Theme.colors.yankeesBlueColor} bgColor={Theme.colors.lotionColor} border={`solid 0.2rem ${Theme.colors.brightGrayColor}`} />
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
                    rows={rejectedLeaveData}
                />
            </div>
        </>
    )
}

export default RejectedLeave
