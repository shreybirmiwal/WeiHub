import React from "react";

export default function Sidebar({setTab, tab}) {

    const setTab0 = () => {
        setTab(0);
    };
    const setTab1 = () => {
        setTab(1);
    };
    const setTab2 = () => {
        setTab(2);
    };

    return (
        <div className='h-screen'>
            <div className="flex h-screen w-screen">
                <div className="flex flex-col p-5 bg-white shadow w-60">
                    <div className="space-y-3">

                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">

                                <li className="rounded-sm">
                                    <div className="flex p-2 justify-center space-x-3 rounded-md hover:font-bold"  onClick={setTab0}>
                                        <p className="text-2xl text-center">The Locker</p>
                                    </div>
                                </li>

                                <li className="rounded-sm">
                                    <div className="flex items-center justify-center p-2 space-x-3 rounded-md hover:font-bold"  onClick={setTab1}>
                                        <p className="text-2xl">Inventory</p>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}