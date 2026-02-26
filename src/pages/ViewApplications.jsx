import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatus = (e, app_id) => {
    // console.log(e.target.value,app_id);

    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your application status has been modified",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h3>
        {applications.length}Applications for:{job_id}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <select
                  onChange={(e) => handleStatus(e, application._id)}
                  defaultValue={application.status}
                  className="select"
                >
                  <option disabled={true}>Update Status</option>
                  <option>Pending</option>
                  <option>Review</option>
                  <option>Hired</option>
                  <option>Reject</option>
                </select>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
