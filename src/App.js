import './App.css';
import Tab from './components/Tab';
import React, {useState} from 'react';


function App() {
    
    const tabs = [
        {tabTitle :"Food", description: "Cook, dine, and retreat at Francis Mallman's private island in Patagonia"},
        {tabTitle: "Explore", description: "Go whale watching by sail"},
        {tabTitle:"Body", description: "Meditate at lakeside retreat with different bodywork experiences everyday."}
    ];

    const [allData, setAllData] = useState("")


    return (
    <div className="d-flex mx-auto">
        <Tab tabCollection= {tabs} data= {allData} setData= {setAllData}  />
    </div>
    );
}

export default App;
