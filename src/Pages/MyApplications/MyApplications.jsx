import React, { Suspense } from 'react';
import ApplicationsStats from './ApplicationsStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../Hooks/UseAuth';
import { myApplicationsPromise } from '../../API/ApplicationsApi';



const MyApplications = () => {

    const {user} = UseAuth();
    console.log('token firebase token', user.accessToken)

    return (
        <div>
             <ApplicationsStats></ApplicationsStats>
             <Suspense fallback={'Loading your applications'}>
                <ApplicationList   myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}>
                  
                </ApplicationList>
             </Suspense>
        </div>
    );
};

export default MyApplications;