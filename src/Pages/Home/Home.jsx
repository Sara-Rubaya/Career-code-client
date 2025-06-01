import React, { Suspense, useEffect, useState } from 'react';
import Baneer from './Baneer';
import HotJobs from './HotJobs';

const Home = () => {

    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error('Failed to fetch jobs:', err));
  }, []);

    return (
        <div>
            <Baneer></Baneer>
             <Suspense fallback={'Loading hot jobs  '}>
                   <HotJobs jobs={jobs}></HotJobs>
             </Suspense>
        </div>
    );
};

export default Home;