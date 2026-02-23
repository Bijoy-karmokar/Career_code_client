import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import HotJob from '../components/HotJob';

const fetchJob =async()=>{
    const res = await fetch('http://localhost:3000/jobs');
    return res.json();
}
const Home = () => {
    const jobPromise = fetchJob();
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <Suspense fallback={<p>Jobs are comming.....</p>}>
            <HotJob jobPromise={jobPromise}></HotJob>
          </Suspense>
        </div>
    );
};

export default Home;