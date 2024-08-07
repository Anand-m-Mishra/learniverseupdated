import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="public\logo3.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Welcome to Learniverse!
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Welcome to Learniverse, your gateway to mastering coding and technology. 
                        At Learniverse, we are passionate about empowering learners of all levels to unlock their full potential in programming.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Whether you're a beginner looking to take your first steps or an experienced coder aiming to refine your skills, our platform offers comprehensive resources and interactive learning experiences. Join our community and embark on a journey of continuous growth and innovation in the world of coding.
                         Let's code the future together with Learniverse!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}