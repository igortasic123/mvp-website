
'use client'

import Link from "next/link";
import { InlineWidget } from "react-calendly";
import { LuBird } from "react-icons/lu";


const Demo = () => {



    return (
      <div className="h-screen justify-center items-center bg-blue-100">
        <div className="flex flex-col justify-center items-center pt-10">
        <Link href="/">
          <LuBird className="text-6xl " />
        </Link>
          <h1 className="text-3xl font-bold text-center p-5">Demo</h1>
          <p className="text-center">
            Schedule a demo with us to see how we can help your business.
          </p>
        </div>
      <InlineWidget url="https://calendly.com/birdsoftware/30min" />
    </div>

    );
}
 
export default Demo;
