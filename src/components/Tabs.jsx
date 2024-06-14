import React, { useState } from 'react';
import Popup from './Popup';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("List 1");
    const [showPopUp, setShowPopUp] = useState(false);
    const tabsList  = ["List 1", "List 2", "List 3", "List 4"];

    return (
        <>
            <div>
                <div>
                    {tabsList.map((tab) => (
                        <button
                            key={tab}
                            className={`border rounded-lg p-3 m-0 mb-4 ${activeTab === tab ? 'bg-pink-800 text-white px-6' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div>
                    {activeTab === "List 1" && (<div>this is List 1</div>)}
                    {activeTab === "List 2" && (<Popup showPopUp={showPopUp} setShowPopUp={setShowPopUp} />)}
                    {activeTab === "List 3" && (<div>this is List 3</div>)}
                    {activeTab === "List 4" && (<div>this is List 4</div>)}
                </div>
            </div>
        </>
    );
}

export default Tabs;
