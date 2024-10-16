import React from 'react'
import PhotoEditingServicePage from './PhotoEditingServicePage'


export const metadata = {
  title: "Photo Editing Services || Web-briks",
  description: "Professional photo editing services at competitive pricing. Web Briks provides background removal, retouching, color correction, and more to enhance your images.",
};



export default function photoEditing() {
  return (
    <div>
        <PhotoEditingServicePage/>
    </div>
  )
}
