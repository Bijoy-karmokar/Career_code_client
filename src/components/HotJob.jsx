import React, { use } from 'react';
import JobCard from './JobCard';

const HotJob = ({jobPromise}) => {
    const jobs = use(jobPromise);
    return (
        <div>
            <h3 className='text-4xl font-bold text-center'>All Jobs {jobs.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJob;