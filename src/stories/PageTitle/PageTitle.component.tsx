import React from 'react'
import ButtonComponent from '../ButtonComponent'
import { PageTitleStyle } from './PageTitle.styled'

type Pagetitleporp = {
    logindate: string,
    pagename: 'Leaves' | 'Manage Leave Request' | 'Leave Reason',
    innerpage: string
}

function PageTitle({ logindate, pagename, innerpage }: Pagetitleporp) {
    return (
        <PageTitleStyle>
            <div>
                <span className="logindate">
                    Last logged in: <span className="text-style-1">{logindate}</span>
                </span>
                <div>
                    <span className="nameofpage">{pagename}</span>
                    {pagename === 'Leaves' && <span className='childpage'> &lt; {innerpage}</span>}
                </div>
            </div>

            {pagename === 'Leave Reason' && <ButtonComponent label='Add Reason' borderRadius={false} color='#fff' size='20px' />}
        </PageTitleStyle >
    )
}

export default PageTitle
