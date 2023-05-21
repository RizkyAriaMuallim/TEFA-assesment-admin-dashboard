import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from '../images/sidebar/sidebar-logo.svg'
import { ReactComponent as BoxIcon } from '../images/sidebar/box.svg'
import { ReactComponent as PeopleIcon } from '../images/sidebar/people.svg'
import BasePage from "../components/BasePage";

const Root = () => {
    return (
        <BasePage/>
    )
}

const SideBar = () => {
    return (
        <aside className="absolute left-0 top-0 z-9999 flex h-screen flex-col overflow-y-hidden bg-slate-800">
            {/* SIDEBAR HEADER */}
            <div className="flex items-center gap-2 px-8 py-6 pb-11">
                <LogoIcon/>
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

export default Root;