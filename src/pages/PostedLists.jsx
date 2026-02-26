import React, { use } from "react";
import { Link } from "react-router";

const PostedLists = ({ jobAddressEmail }) => {
  const jobs = use(jobAddressEmail);
//   console.log(jobs);
  
  return (
    <div>
      <h2>All Posted jobs :{jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Job category</th>
              <th>Job Count</th>
              <th>View Applicants</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {jobs.map((job,index) => 
                
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>{job.applicationCount}</td>
                <td><Link to={`/applications/${job._id}`}>View Applicants</Link></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostedLists;
