import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { setLocale } from 'react-redux-i18n'
import { useDispatch, useSelector } from 'react-redux'

const LanguageSwitcher = () => {

    const locale = useSelector(state => state.i18n.locale)
    const languages = [{ title: "English", code: 1 }, { title: "پارسی", code: 2 }]
    const dispatch = useDispatch();

    const handleLocaleChange = (e, targetLocale) => {

        e.preventDefault();

        if (targetLocale === 1)
            dispatch(setLocale('en'))
        else if (targetLocale === 2)
            dispatch(setLocale('fa'))
        else
            dispatch(setLocale('fa'))

    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" className="nav-link">
                {locale === "fa" ? "پارسی" : "English"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {languages.map((l, i) =>
                    <Dropdown.Item href="#" key={i} onClick={(e) => handleLocaleChange(e, l.code)} className={locale === 'en' ? 'nav-link vazir' : 'nav-link'}>
                        {l.title}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown >
    )
}

export default LanguageSwitcher
