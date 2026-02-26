import React from "react";
import { IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router";

const JobCard = ({ job }) => {
    const navigate = useNavigate();
  const {
    _id,
    title,
    location,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;
//   console.log(_id);
  
  return (
    <div className="card bg-base-100 shadow-sm">
     <div className="flex items-center gap-1 p-6">
        <figure>
        <img
          src={company_logo}
          alt="Shoes"
        />
      </figure>
        <div>
           <h3 className="text-2xl font-semibold">{company}</h3>
            <p className="flex text-lg items-center"><IoLocation size={20}></IoLocation> {location}</p>
        </div>
     </div>
      <div className="card-body space-y-3">
        <h2 className="card-title">
          {
            title
          }
          <div className="badge badge-secondary">NEW</div>
        </h2>
          <p className="text-lg">SalaryRange:{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
        <p>
          {
            description
          }
        </p>
        <div className="card-actions">
         {
           requirements.map((req,index)=><div key={index} className="badge badge-outline">{req}</div>)
         }
        </div>
        <button onClick={()=>navigate(`/jobDetails/${_id}`)} className="btn btn-primary text-lg">Show Details</button>
      </div>
    </div>
  );
};

export default JobCard;
