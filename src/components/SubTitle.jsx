'use client';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const SubTitle = () => {
    return (
        <span className="text-white">
        <TypewriterComponent
          options={{
            strings: [`<span>We provide top-notch </span><span style="color: #FFA500;">design</span><span>, </span><span style="color: #FF4500;">development</span><span>, and </span><span style="color: #1E90FF;">digital marketing</span><span> services to help your business thrive.</span>`],
            autoStart: true,
            loop: true,
            deleteSpeed: 'natural',
          }}
        />
      </span>
    );
};

export default SubTitle;