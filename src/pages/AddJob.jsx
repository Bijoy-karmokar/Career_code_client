import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();
  // console.log(user);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { minSalary, maxSalary, currency, ...newJob } = Object.fromEntries(
      formData.entries(),
    );
    newJob.salaryRange = { minSalary, maxSalary, currency };
    const newRequirements = newJob.requirements;
    const splitRequirements = newRequirements.split(",");
    const dirtyRequirements = splitRequirements.map((req) => req.trim());
    newJob.requirements = dirtyRequirements;
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    console.log(newJob);

    // save to job in database
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job has been saved",
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
      <h2 className="text-4xl font-bold text-center">Please Add a job</h2>
      <form onSubmit={handleAddJob}>
        {/* basic info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="Job title"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full"
            placeholder="Location"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input input-bordered w-full"
            placeholder="Company"
          />
        </fieldset>
        {/* jobType */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <form className="filter">
            <input
              className="btn btn-square"
              name="jobType"
              type="reset"
              value="×"
            />
            <input
              className="btn"
              type="radio"
              name="JobType"
              aria-label="Full-time"
              value={"Full-time"}
            />
            <input
              className="btn"
              type="radio"
              name="JobType"
              aria-label="Remote"
              value={"Remote"}
            />
            <input
              className="btn"
              type="radio"
              name="JobType"
              aria-label="On-time"
              value={"On-tiem"}
            />
            <input
              className="btn"
              type="radio"
              name="JobType"
              aria-label="Intern"
              value={"Intern"}
            />
            <input
              className="btn"
              type="radio"
              name="JobType"
              aria-label="Hybrid"
              value={"Hybrid"}
            />
          </form>
        </fieldset>
        {/* Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Category</legend>
          <select
            defaultValue="Pick a color"
            name="category"
            className="select appearance-none"
          >
            <option disabled={true}>Pick a category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Design</option>
            <option>Intern</option>
          </select>
        </fieldset>
        {/* applicationDeadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" name="deadline" className="input" />
        </fieldset>
        {/* salaryRange */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">salaryRange</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="minSalary"
                className="input input-bordered w-full"
                placeholder="Minimum salary"
              />
            </div>

            <div>
              <label className="label">Maximum salary</label>
              <input
                type="text"
                name="maxSalary"
                className="input input-bordered w-full"
                placeholder="Maximum salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Pick a color"
                name="currency"
                className="select appearance-none input-bordered w-full"
              >
                <option disabled={true}>salary currency</option>
                <option>BDT</option>
                <option>USB</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* company_logo */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Company_logo</legend>
          <input
            type="url"
            name="companyLogo"
            className="input input-bordered w-full"
            placeholder="Company Logo"
          />
        </fieldset>
        {/* description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Description</legend>
          <textarea
            className="textarea input-bordered w-full"
            name="description"
            placeholder="Enter Description"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Requirements</legend>
          <textarea
            className="textarea input-bordered w-full"
            name="requirements"
            placeholder="Enter requirements(seperate by comma)"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Responsibilities</legend>
          <textarea
            className="textarea input-bordered w-full"
            name="responsibilities"
            placeholder="Enter responsibilities(seperate by comma)"
          ></textarea>
        </fieldset>
        {/* HR info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Info</legend>

          <label className="label">HR name</label>
          <input
            type="text"
            name="hr_name"
            value={user.displayname}
            className="input input-bordered w-full"
            placeholder="HR name"
          />

          <label className="label">HR Email</label>
          <input
            type="text"
            name="hr_email"
            value={user.email}
            className="input input-bordered w-full"
            placeholder="hr_email"
          />
        </fieldset>
        <input
          type="submit"
          className="btn btn-primary w-full my-3"
          value="Add job"
        />
      </form>
    </div>
  );
};

export default AddJob;
