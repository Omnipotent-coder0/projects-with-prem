import React from "react";

const Subscribe = () => {
  return (
    <div className=" m-16 my-28 p-10 py-12 rounded-3xl bg-zinc-900 text-white duration-200">
      <div className="w-1/2 text-center m-auto flex flex-col gap-10">
        <h2 className="text-5xl font-bold">
          Get the Latest Notifications and Info from Us
        </h2>
        <p className=" font-sans text-lg leading-8 ">
          We are Hub for Geek Reader Having Latest News All Around The World!.
          If you want to be a part of that community and wants to shine among
          your peers, Subscirbe Our news letter Now! Click the Subscribe
          button.
        </p>
        <div>
          <button className="text-lg text-black font-semibold bg-slate-100  p-2 px-4 rounded-full duration-200 hover:scale-110">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
