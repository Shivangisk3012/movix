import React, { useState } from 'react';

const SwitchTab = ({ data, onTabChanges }) => {
  const [activeTab, setActiveTab] = useState('Day');


  const handleTabChange = (tab,index) => {
    setActiveTab(tab);
    onTabChanges(tab);
    console.log("tab"+tab);
  };

  return (
    <div className="text-black bg-white  w-44 rounded-full flex gap-2 items-center justify-between">
        {
            data.map((tab,index) => {
                return (
                    <span
                        key={index}
                        className={`m-1 cursor-pointer full rounded-full p-3 w-24  ${
                            activeTab === tab ? ' bg-gradient-to-r from-[#da2f68] to-[#f89e00] text-white' : ''
                        }`}
                        onClick={() => handleTabChange(tab,index)}
                    >
                        {tab}
                    </span>
                )
            })
        }
    </div>
  );
};

export default SwitchTab;
