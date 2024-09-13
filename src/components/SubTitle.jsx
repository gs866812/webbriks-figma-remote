'use client';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const SubTitle = () => {
  return (
    <div
      className="bg-black bg-opacity-60 p-4 md:p-6 rounded-md inline-block"
      style={{
        border: "2px solid #FFA500",
        backdropFilter: "blur(5px)",
      }}
    >
      <TypewriterComponent
        options={{
          strings: [
            `<span>We provide <span style="color: #FFA500;">top-notch design</span>, <span style="color: #FF4500;">development</span>, and <span style="color: #1E90FF;">digital marketing</span> services to help your business thrive.</span>`,
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: "natural",
        }}
      />
    </div>
  );
};

export default SubTitle;
