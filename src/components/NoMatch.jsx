import React from 'react'
import { Translate } from 'react-redux-i18n'

const NoMatch = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h3><Translate value="no_match.oops" /></h3>
                    <h1 className="text-timnak"><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2><Translate value="no_match.detailed" /></h2>
            </div>
        </div>
    )
}

export default NoMatch
