import NavbarContainer from "./NavbarContainer";
import Search from "./Search";
import { AiOutlineHome } from "react-icons/ai";
import UserMenu from "./UserMenu";

const NavBar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <NavbarContainer>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <div className="flex items-center gap-2 text-rose-500 text-3xl font-semibold">
                            <AiOutlineHome size={34} />
                            <p>AirBnb</p>
                        </div>
                        <Search />
                        <UserMenu />
                    </div>
                </NavbarContainer>
            </div>
        </div>
    );
};

export default NavBar;
