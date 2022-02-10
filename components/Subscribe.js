import { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Image from 'next/image';
import riven from '../public/riven.png';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { data } = useSWR('../pages/api/subscribers.js', fetcher);
  const subscriberCount = data?.count;
  

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

        <div>
          <div className="p-6 my-4 max-w-3xl">
            <p className="text-gray-200 mb-6 text-3xl md:text-6xl font-bold tracking-tight">
              Hi, I'm Harpriya.
            </p>
            <p className="text-gray-200 mb-10 text-sm md:text-base">
              As part of my 2022 resolutions, I've decided to start writing an essay every two weeks. I built this website to 
              hold myself accountable to that goal, and have some fun sharing my thoughts, opinions, and learnings with my all my friends!
              You can subscribe here :)
            </p>
            <form className="relative my-4" onSubmit={subscribeMe}>
              <div className="flex">
                <input
                  onChange={changeEmail}
                  aria-label="Email for newsletter"
                  placeholder="harpriya.bagri@gmail.com"
                  type="email"
                  autoComplete="email"
                  required
                  className="border-b border-cyan-500 bg-transparent text-cyan-500 font-normal text-sm md:text-lg w-9/12 focus:outline-none"
                />
                <button
                  className="flex justify-center px-3 md:px-5 py-2 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 font-bold text-sm md:text-lg rounded-full"
                  type="submit"
                >
                  subscribe
                </button>
              </div>
            </form>
            {success 
              ? <span className="flex items-center text-sm font-bold text-green-600">{success}</span> 
              : <span className="flex items-center text-sm font-bold text-red-600">{error}</span>}
            <p className="text-base text-gray-200">
              { subscriberCount } subscribers. 
            </p>
          
          </div>
          <div>
            <h3 className="p-6 font-bold text-3xl md:text-3xl tracking-tight mb-4 mt-8 text-gray-200">
                  Published Issues
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;