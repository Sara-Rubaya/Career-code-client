import React, { Suspense } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../API/JobsApi';


const MyPostedJobs = () => {

    const {user} = UseAuth();


    return (
        <div>
            <h2 className='text-4xl text-center'>My posted jobs: </h2>
            <Suspense>
                <JobLists 
                jobsCreatedByPromise={jobsCreatedByPromise(user.email)}>

                </JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;