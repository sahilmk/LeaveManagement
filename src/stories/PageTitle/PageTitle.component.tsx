import React from 'react'
import ButtonComponent from '../ButtonComponent'
import { PageTitleStyle } from './PageTitle.styled'

type Pagetitleporp = {
    logindate: string,
    pagename: string,
    innerPageName?: string,
    buttonName?: string
    isinnerPage: boolean,
    isButton: boolean
}

function PageTitle({ logindate, pagename, innerPageName, buttonName, isinnerPage, isButton }: Pagetitleporp) {
    return (
        <PageTitleStyle>
            <div>
                <span className="logindate">
                    Last logged in: <span className="text-style-1">{logindate}</span>
                </span>
                <div>
                    <span className="nameofpage">{pagename}</span>
                    {isinnerPage && <span className='childpage'> &lt; {innerPageName}</span>}
                </div>
            </div>

            {isButton && <ButtonComponent label={buttonName!} borderRadius={false} color='#fff' size='2rem' />}
        </PageTitleStyle >
    )
}

export default PageTitle
