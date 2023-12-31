import React from "react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-500"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function TestimonialCard() {
  return (
    <div className="w-full max-w-[26rem] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <div className="flex items-center gap-4 pt-4 pb-8 px-6 text-start">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h5 className="text-blue-gray text-lg font-semibold">
              Tania Andrew
            </h5>
            <div className="flex items-center gap-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <p className="text-blue-gray text-sm">Frontend Lead @ Google</p>
        </div>
      </div>
      <div className="mb-6 p-6">
        <p className="text-gray-700">
          &quot;I found a solution to all my design needs from Creative Tim. I
          use them as a freelancer in my hobby projects for fun! And it's
          really affordable, very humble guys !!!&quot;
        </p>
      </div>
    </div>
  );
}
