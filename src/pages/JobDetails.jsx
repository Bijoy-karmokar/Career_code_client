import React from "react";
import { Link, useLoaderData } from "react-router";
import company_Img from '../assets/company_Img.jpg'

const JobDetails = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  const {
    _id,
    title,
    company,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company_logo,
  } = jobs;

  return (
    <div className="max-w-6xl mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 my-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={company_logo || company_Img}
            alt="Image not found"
            className=" object-fill w-full rounded-md h-72 dark:bg-gray-500"
          />

          <div className="flex items-center text-lg">
            <span>Deadline:{applicationDeadline}</span>
          </div>
        </div>
         <div className="space-y-3">
            <p className="text-lg font-light">Company:{company}</p>
            <p className="text-lg font-light">Category:{category}</p>
            <p>SalaryRange:{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
            <p>JobType:{jobType}</p>
         </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-violet-600">
             {title}
            </h3>
          </a>
          <p className="leading-snug dark:text-gray-600">
            {description}
          </p>
           <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
