import React, { useState } from 'react'

const Tabs = () => {
    const [activeTab, setactiveTab] = useState("list1")
    const tabslist = ["list1", "list2", "list3", "list4"]
    return (
        <>
            <div>
                <div>
                    {tabslist.map((tab) => {
                        return (
                            <button key={tab} className={`border p-3 m-0 mb-2 ${activeTab==tab? 'bg-blue-500 text-white px-6': ""}`} onClick={() => setactiveTab(tab)}>{tab}</button>
                        )

                    })}
                </div>

                <div>
                    {activeTab == "list1" && (<div> this is list1</div>)}
                    {activeTab == "list2" && (<div> this is list2</div>)}
                    {activeTab == "list3" && (<div> this is list3</div>)}
                    {activeTab == "list4" && (<div> this is list4</div>)}
                </div>

            </div>

        </>
    )
}

export default Tabs
