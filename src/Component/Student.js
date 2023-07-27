import React, { useState } from "react";
import "./Student.css"
import { NavLink } from "react-router-dom";

const Student = ()=>{
    

    const [Data] = useState([
        {
            Name : "John",
            Age : 26,
            Course:"Python",
            Batch :"October",
            change:"Edit"


        },
        {
            Name : "Doe",
            Age : 25,
            Course:"MERN",
            Batch :"November",
            change:"Edit"

        },
        {
            Name : "James",
            Age : 22,
            Course:"Data Science",
            Batch :"September",
            change:"Edit"

        },
        {
            Name : "Brook",
            Age : 22,
            Course:"MEAN",
            Batch :"July",
            change:"Edit"

        },
        {
            Name : "Bridget",
            Age : 21,
            Course:"Acting",
            Batch :"October",
            change:"Edit"

        },
        {
            Name : "Elent",
            Age : 26,
            Course:"MERN",
            Batch :"March",
            change:"Edit"

        }
    ])

    return(
        <>
        <div className="student__main">
            <div className="studentHead">
                <div className="studentText">Student Details</div>
                <button className="studentAddBtn">Add New Student</button>
            </div>
            
            <div>
            <div className="grid__container grid__border">
                <div className="grid__item">Name</div>
                <div className="grid__item">Age</div>
                <div className="grid__item">Course</div>
                <div className="grid__item">Batch</div>
                <div className="grid__item">Change</div>

                </div>
                {
                    Data.map((e)=>{
                        return(
                            <>
                            <div className="grid__container">
                            <div className="grid__item">{e.Name}</div>
                            <div className="grid__item">{e.Age}</div>
                            <div className="grid__item">{e.Course}</div>
                            <div className="grid__item">{e.Batch}</div>
                            <div className="grid__item"><NavLink to="#">{e.change}</NavLink></div>
                            </div>
                            </>
                        )
                    })
                }

        </div>
        </div>
        </>
    )
}

export default Student