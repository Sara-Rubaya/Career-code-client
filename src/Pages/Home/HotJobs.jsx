import React from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobs}) => {
   
    return (
        <div>
            <h2 className='text-4xl font-semibold py-8 text-center'>Hot jobs of the day</h2>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                  jobs.map(job => <JobCard key={job._id} job={job}></JobCard> )
                }
            </div>
        </div>
    );
};

export default HotJobs;