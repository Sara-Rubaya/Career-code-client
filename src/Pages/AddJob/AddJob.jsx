import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const {user} = UseAuth();

    const handleAddJob = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        //process salary range data
        const {min , max, currency, ...newJob} = data;
        newJob.salaryRange = {min, max, currency}

        //process requirements
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',')
        const requirementsClean = requirementsDirty.map(req => req.trim());
        newJob.requirements = requirementsClean;

        //process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())

        newJob.status =" active";

        console.log(newJob, requirementsClean);

        //save job to the database
        axios.post('http://localhost:3000/jobs', newJob)
        .then(res =>{
            console.log(res)
            if(res.data.insertedId){
                Swal.fire({
                    position:"top-right",
                    icon: "success",
                    title: "This new  Job has been saved & published",
                    showConfirmButton: false,
                    timer:1500
                });
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <h2 className='text-5xl text-center p-4'>Please add a job</h2>
           <div className="card bg-base-300 w-240 shadow-lg p-6 mx-auto my-10">
             <form onSubmit={handleAddJob}>
               <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-4xl border p-4 mx-auto">
              <legend className="fieldset-legend">Basic Info</legend>

              <label className="label">Job Title</label>
              <input type="text" name='title' className="input  w-full" placeholder="Job Title" />

             <label className="label">Company</label>
              <input type="text" name='company' className="input  w-full" placeholder="Company name" />

             <label className="label">Location</label>
             <input type="text" name='location' className="input  w-full" placeholder="Company Loaction" />

             <label className="label">Company Logo</label>
              <input type="text" name='company_logo' className="input w-full" placeholder="Company logo URL" />
             </fieldset>


             {/* Job type */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-4xl border p-4 mx-auto ">
              <legend className="fieldset-legend ">Job Type</legend>
                  <div className="filter gap-5 mx-auto">
                   <input className="btn filter-reset " type="radio" name="jobType" aria-label="All"/>
                  <input className="btn " type="radio" name="jobType" value="On-Site" aria-label="On-Site"/>
                  <input className="btn" type="radio" name="jobType" value="Remote" aria-label="Remote"/>
                 <input className="btn" type="radio" name="jobType" value="Hybrid" aria-label="Hybrid"/>
                 </div>
             </fieldset>


             {/*Job Category  */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-4xl border p-4 mx-auto">
              <legend className="fieldset-legend">Job Categroy</legend>
                <select defaultValue="Job Category" name='category' className="select w-full">
                <option disabled={true}>Job Category</option>
                 <option>Engineering</option>
                 <option>Marketing</option>
                 <option>Finance</option>
                 </select>
              
             </fieldset>


             {/* Application deadline */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-4xl border p-4 mx-auto">
              <legend className="fieldset-legend"> Application Deadline </legend>

              <input type="date" name='deadline' className="input w-full" />
             </fieldset>



             {/*Salary Range  */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-4xl border p-4 mx-auto">
              <legend className="fieldset-legend">Salary Range</legend>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
               <div>
                    <label className="label p-2">Minimum Salary</label>
              <input type="text" name='min' className="input" placeholder="Minimum Salary" />
               </div>

            <div>
                 <label className="label p-2">Maximum Salary</label>
             <input type="text" name='max' className="input" placeholder="Maximum Salary" />
            </div>

             <div>
                <label className="label p-2">Currency</label>
              <select defaultValue="Select a Currency" name='currency' className="select">
                <option disabled={true}>Select a Currency</option>
                 <option>BDT</option>
                 <option>Rm</option>
                 <option>USD</option>
                 </select>
             </div>
              </div>
             </fieldset>

              {/* Job Description */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-4xl border p-4 mx-auto">
              <legend className="fieldset-legend">Job Description</legend>
                 <textarea placeholder="Job Description" name='description' className="textarea textarea-info w-full"></textarea>
              
             </fieldset>
             {/* Job Requirements */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-4xl border p-4 mx-auto">
              <legend className="fieldset-legend">Job Requirements</legend>

              <textarea placeholder="Job Requirements (separate by comma)" name='requirements' className="textarea textarea-info w-full"></textarea>

              
             </fieldset>

             {/* Job Responsibilities */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-4xl border p-4 mx-auto">
              <legend className="fieldset-legend">Job Responsibilities</legend>

              <textarea placeholder="Job Responsibilities (separate by comma)" name='responsibilities' className="textarea textarea-info w-full"></textarea>

              
             </fieldset>
             {/*  */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-4xl border p-4 mx-auto">
              <legend className="fieldset-legend">HR related Info</legend>

              <label className="label">HR Name</label>
              <input type="text" name='hr_name' className="input w-full" placeholder="HR Name" />

             <label className="label">HR Email</label>
              <input type="text" name='hr_email' defaultValue={user.email}  className="input w-full" placeholder="HR Email" />

              
             </fieldset>

             <input type="submit" className='btn w-full mt-3' value="Add Job" />
            </form>
           </div>
        </div>
    );
};

export default AddJob;