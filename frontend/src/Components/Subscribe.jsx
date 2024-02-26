import React from "react";

const Subscribe = () => {
  return (
    <div className=" mb-6 w-full h-96 border-4 border-white-950 rounded-md bg-slate-900 overflow-x-hidden">
      <div className="m-14 h-2/3  flex flex-col  items-center gap-16 text-yellow-50">
        <div className="">
          <h2 className="text-4xl">
            Get the Latest Notifications and Info from Us
          </h2>
        </div>
        <div>
          <p className="text-center">
            We are Hub for Geek Reader Having Latest News All Around The World!.
            If you want to be a part of that community and wants to shine among
            your peers, Subscirbe Our news letter Now! Click the Subscribe
            button.
          </p>
        </div>
        <button className="border-solid border-2 bg-slate-500 p-2 rounded-md hover:text-black">
          SubsCribe Now
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
