"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import UserMenuItem from "./UserMenuItem";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleUserUserMenuItemOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text- font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    숙소 등록
                </div>
                <div
                    onClick={toggleUserUserMenuItemOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px]
                border-neutral-200 flex flex-row items-center rounded-full cursor-pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu size={20} />
                    <div className="hidden md:block">
                        <BiUser size={30} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <UserMenuItem
                                onClick={toggleUserUserMenuItemOpen}
                                label="Login"
                            />
                            <UserMenuItem
                                onClick={toggleUserUserMenuItemOpen}
                                label="Sign Up"
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
