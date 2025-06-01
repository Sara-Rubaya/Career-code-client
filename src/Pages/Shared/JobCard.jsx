import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const JobCard = ({job}) => {
    const {_id ,title, location,  category,salaryRange, applicationDeadline,  description, company, requirements,status, company_logo } = job;
    return (
       <div className="card bg-base-300 w-96 shadow-lg p-6">
  
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
    <div className="card-actions ">
     {
        requirements.map((skill, index) =>  <div key={index} className="badge badge-outline">{skill}</div>)
     }
     
    </div>
     <div className="card-actions justify-end">
      <Link to={`/jobs/${job._id}`}><button className="btn btn-primary">Show Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default JobCard;