"use client";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function Stats() {

    const [ref1, inView1] = useInView({
        triggerOnce: false,
        threshold: 0.0
    });

    const [ref2, inView2] = useInView({
        triggerOnce: false,
        threshold: 0.0
    });

    const [ref3, inView3] = useInView({
        triggerOnce: false,
        threshold: 0.0
    });

    function NumRender(max: number) {
        const [num, setNum] = useState(0);
        useEffect(() => {
            let intervalId: NodeJS.Timeout;

            if (inView1) {
                intervalId = setInterval(() => {
                    if (num < max) {
                        setNum((prevNum) => prevNum + 1);
                    }
                }, 10);
            }
            return () => clearInterval(intervalId);
        }, [num, inView1]);

        return <>{num}</>;
    }

    return (
        <div data-aos="fade-up" className="max-w-[1440px] flex-col m-auto py-8">
            <div className="px-40" >
                <div ref={ref1} className={`pt-10 pb-5 font-bold ${inView1 ? 'animate-fade-up animate-duration-2000 animate-ease-in-out' : 'opacity-0'}`}>M I L E S T O N E S</div>
                <div ref={ref2} className={`text-7xl ${inView2 ? 'animate-fade-up animate-duration-2000 animate-ease-in-out' : 'opacity-0'}`}>Stand aware of accomplishments, stay awake to achieve more.</div>
            </div>
            <div className={`flex justify-between px-40 ${inView3 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>
                <div className="flex flex-col items-start max-w-[300px] my-20">
                    <dt ref={ref3} className="mb-2 text-7xl">{NumRender(86)}<span className="text-4xl px-1">M+</span></dt>
                    <dd className="text-2xl mb-2">Users</dd>
                    <dd>Join a vibrant community, choosing our platform for engaging connections.</dd>
                </div>
                <div className="flex flex-col items-start max-w-[300px] my-20">
                    <dt className="mb-2 text-7xl">{NumRender(120)}<span className="text-4xl px-1">M+</span></dt>
                    <dd className="text-2xl mb-2">Video Calls</dd>
                    <dd>Seamless video calls connecting you with friends, family, and colleagues.</dd>
                </div>
                <div className="flex flex-col items-start max-w-[300px] my-20">
                    <dt className="mb-2 text-7xl">{NumRender(61)}<span className="text-4xl px-1">M+</span></dt>
                    <dd className="text-2xl mb-2">Positive Reviews</dd>
                    <dd>Rave reviews highlight our platform`s reliability and user-friendly experiences.</dd>
                </div>
            </div>
        </div >
    )
}