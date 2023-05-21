import { Link } from "react-router-dom";
import { ReactComponent as LogoSideBarIcon } from '../images/sidebar/sidebar-logo.svg'
import { ReactComponent as BoxIcon } from '../images/sidebar/box.svg'
import { ReactComponent as PeopleIcon } from '../images/sidebar/people.svg'

import { ReactComponent as SearchIcon } from '../images/header/search.svg'
import { ReactComponent as MessageIcon } from '../images/header/message.svg'
import { ReactComponent as WarningIcon } from '../images/header/warning.svg'
import { ReactComponent as LogoHeaderIcon } from '../images/header/logo.svg'

const BasePage = ({namePage}) => {
    return (
        <div className="overflow-hidden">
            <HeaderBar />
            <div className="flex">
                <SideBar />
                <div className="max-w-screen-2xl mx-auto p-4 md:p-6 2xl:p-10">
                    <div className="flex flex-col gap-10">
                        <TestTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}
// belum di check
const SideBar = () => {
    return (
        <aside className="absolute left-0 top-0 z-9999 flex h-screen flex-col overflow-y-hidden bg-slate-800">
            {/* SIDEBAR HEADER */}
            <div className="flex items-center justify-between gap-2 px-8 py-6 pb-11">
                <LogoSideBarIcon/>
            </div>

            <div>
                <nav className="px-4 pr-5">
                    <div>
                        <h3 className="mb-4 ml-4 text-sm text-slate-600 font-bold">PAGES</h3>

                        <ul>
                            <li className="text-white">
                                <Link to={'/products'} className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 pr-32 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-slate-900">
                                    <BoxIcon/>
                                    Products
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link to={'/users'} className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-100 duration-300 ease-in-out hover:bg-slate-900">
                                    <PeopleIcon/>
                                    Users
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    )
}

const HeaderBar = () => {
    return (
        <header className="sticky top-0 z-999 flex w-full drop-shadow-1 bg-slate-100">
            <div className="flex flex-grow items-center justify-end py-4 px-4 shadow-2 md:px-6">

                <div className="flex items-center gap-3">
                    <ul className="flex items-center gap-2">
                        {/* Search Icon */}
                        <li className="relative">
                            <SearchIcon/>
                        </li>

                        {/* Message Icon */}
                        <li className="relative">
                            <MessageIcon/>
                        </li>

                        {/* Warning Icon */}
                        <li className="relative">
                            <WarningIcon/>
                        </li>

                        <hr className="w-px h-6 bg-black mx-3" />
                        
                        {/* Logo Header Icon */}
                        <li className="relative">
                            <LogoHeaderIcon/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

const TestTable = () => {
    
}

export default BasePage;