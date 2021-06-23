import React, { useState } from "react";
import Tabs from "./Tabs";
import { tablabels } from "./constan";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tablabels.CANCEL_AT_ANY_TIME);
  const onClickTab = (tab) => (
    setActiveTab(tab)
  )
  return (
    <div>
      <Tabs activeTabName={activeTab} onClickTab={onClickTab} />
    </div>
  );
};

export default TabComponent;
