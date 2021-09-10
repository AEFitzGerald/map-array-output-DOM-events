import React from 'react';

const Tab = (props) => {


    const onClickHandler = (e,value) => {
        console.log("click function active", e.target.name, e.target.value)
        props.setData(e.target.value) 
    }
    

    return (
        <div className = "container mt-5">
            <div className ="d-flex justify-content-around mx-auto">
            {
                props.tabCollection.map((tab, i) => {
                return <button onClick={ (e) => {onClickHandler(e)
                }}  
                key={i} 
                value={tab.description} 
                name= {tab.tabTitle} 
                className="btn btn-secondary btn-lg"
                >
                {tab.tabTitle}
                </button>
                })
            }
            </div>
            <div>
                <blockquote className="blockquote text-center">
                    <p className="my-5">This upcoming year we have booked your trip to:
                    <strong> {props.data} </strong>
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">Experience and Learn More</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
        );
    }
    
    export default Tab;
    