import React, { Suspense} from 'react';
import { jobAddressEmail } from './../api/jobsApi';
import PostedLists from './PostedLists';
import useAuth from '../hooks/useAuth';

const MyPostedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            <Suspense fallback={<p>jobEmails loading......</p>}>
                <PostedLists jobAddressEmail={jobAddressEmail(user.email)}></PostedLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;