import React from "react";
import useAuth from "../hooks/useAuth";
import { useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  console.log(jobId);

  const { user } = useAuth();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { github, linkedIn, resume } = Object.fromEntries(formData.entries());

    const application = {
      jobId,
      applicant: user.email,
      github,
      linkedIn,
      resume,
    };
    // console.log(application);
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your application has been saved",
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
    <form
      onSubmit={handleApply}
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4"
    >
      <label className="label">Github</label>
      <input
        type="url"
        name="github"
        className="input"
        placeholder="Enter your github Link"
      />

      <label className="label">LinkedIn</label>
      <input
        type="url"
        name="linkedIn"
        className="input"
        placeholder="Enter your LinkedIn link"
      />

      <label className="label">Resume</label>
      <input
        type="url"
        name="resume"
        className="input"
        placeholder="Enter your Resume Linked"
      />
      <input className="btn btn-primary" type="submit" value="Submit" />
    </form>
  );
};

export default JobApply;
