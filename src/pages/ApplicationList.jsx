import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  console.log(applications);

  return (
    <div>
      <h3>Applicant : {applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                No
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {
            applications.map((application,index)=><JobApplicationRow key={index} index={index} application={application}></JobApplicationRow>)
           }
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
