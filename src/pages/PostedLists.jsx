import React, { use } from "react";

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
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {jobs.map((job,index) => 
                
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>Blue</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostedLists;
