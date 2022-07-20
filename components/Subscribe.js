import { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Image from 'next/image';
import riven from '../public/riven.png';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { data } = useSWR('/api/subscribers', fetcher);
  const subscriberCount = data?.count;
  
  const { data: issueData } = useSWR('/api/issues', fetcher);
  const issues = issueData?.issues;

  const subscribeMe = async (event) => {
    event.preventDefault();
    console.log(email);
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: email }),
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
    });

    const { error, message } = await res.json();
    setError(error);
    setSuccess(message);
  };

  const changeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  }

  return (
    <>
      <div className="sm:flex items-center">
        <Image
          src={riven}
          alt="Picture of the author"
          width="350px"
          height="500px"/>

        <div className="pt-20">
            <iframe src="https://harpriya.substack.com/embed" width="480" height="320" frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
    </>
  );
};

export default Subscribe;