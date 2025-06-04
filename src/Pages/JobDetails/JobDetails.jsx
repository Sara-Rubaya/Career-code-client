import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const {_id,title, company, company_logo, salaryRange, description, applicationDeadline, category, jobType,hr_email,hr_name,location, responsibilities,status, requirements} = useLoaderData();
   
    return (
        <div>
            
           <h2 className='text-6xl'>Job details of: {title}</h2>
            <div className="card bg-base-300 w-150 shadow-lg p-6 mx-auto my-10">
          
                <div className='flex gap-5'>
                    <figure>
                      <img
                         src={company_logo}
                         className='w-16'
                         alt="Shoes" />
                     </figure>
                     <div>
                  <h3 className='text-4xl'>{company}</h3>
                  <p className='flex gap-3 items-center'> <FaLocationDot /> {location}</p>
                </div>
                </div>
                
        
        
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">{status}</div>
            </h2>
            <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
            <p>Description: {description}</p>
            <p>Application Deadline: {applicationDeadline}</p>
            <p>Category: {category}</p>
            <p>Job Type: {jobType}</p>
             <p><strong>HR email: </strong>{hr_email}</p>
             <p><strong>HR name: </strong>{hr_name}</p>
            <strong>Responsibilities:</strong>
           {
           responsibilities.map((responsibility, index) => <div key={index} className="badge badge-outline">{responsibility}</div>)
           
           }
           <br />
            <div className="card-actions ">
                 <strong>Requirements:</strong>
             {
                requirements.map((skill, index) =>  <div key={index} className="badge badge-outline">{skill}</div>)
             }
            
             
            </div>
            <br />
             <Link to={`/jobApply/${_id}`}>
           
            <button className='btn btn-primary w-full'>Apply Now</button>
           </Link>
            
          </div>
        </div>
            
       
          
        </div>
    );
};

export default JobDetails;
