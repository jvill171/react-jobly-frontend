import React from "react";
import { commaWholeNum } from "../../helpers/numberFormatting";
import "./JobCard.css"

const JobCard = ({data}) =>{
    const {title, companyName, salary, equity, id}= data

    const handleApply = () =>{
        console.log("APPLIED FOR JOB WITH ID", id)
    }

    return(
        <div className="JobCard">
            <p><b>{title}</b></p>
            {companyName ?
                <p>{companyName}</p>
                : "" 
            }
            <div className="job-details">
                <p><b>Salary</b>: {commaWholeNum(salary) || "N/A"}</p>
                <p><b>Equity</b>: {equity || "N/A"}</p>
            </div>
            <p><b>ID</b>: {id}</p>
            <div className="job-apply">
                <button onClick={handleApply}>APPLY</button>
            </div>
        </div>
    )
}
export default JobCard;