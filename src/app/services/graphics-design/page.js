import React from 'react';
import GraphicDesignService from './GraphicDesignService';

export const metadata = {
    title: "Graphic Design Services || Web-briks",
    description: "Discover top-notch graphic design services at affordable pricing. Web Briks offers tailored design solutions including logo design, branding, and more.",
  };
  

const page = () => {
    return (
        <div>
            <GraphicDesignService/>
        </div>
    );
};

export default page;