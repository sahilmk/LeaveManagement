import React from 'react'
import ButtonComponent from '../ButtonComponent'
import { PageTitleStyle } from './PageTitle.styled'

export type Pagetitleporp = {
    logindate: string,
    pagename: string,
    innerPageNames?: string[],
    buttonName?: string
    isinnerPage: boolean,
    isButton: boolean
}

function PageTitle({ logindate, pagename, innerPageNames, buttonName, isinnerPage, isButton }: Pagetitleporp) {
    return (
        <PageTitleStyle>
            <div>
                <span className="logindate">
                    Last logged in: <span className="text-style-1">{logindate}</span>
                </span>
                <div>
                    <span className="nameofpage">{pagename}</span>
                    {isinnerPage &&
                        innerPageNames?.map((innerPage) =>
                            <span className='childpage'> &lt; {innerPage}</span>
                        )
                    }
                </div>
            </div>

            {isButton && <ButtonComponent label={buttonName!} borderRadius={false} color='#fff' size='2rem' />}
        </PageTitleStyle >
    )
}

export default PageTitle
