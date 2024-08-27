import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";

const TeamMember = ({ imgSrc, title, position, fb, twitter, instagram }) => {
  return (
    <Card className='hover:shadow hover:shadow-blue-gray-400'>
      <CardHeader floated={false} className="">
        <img
          src={imgSrc}
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {position}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-2 pt-2">
        <Tooltip content="Facebook">
            <Link href={fb}><FaFacebook className='text-3xl hover:text-orange-400' /></Link>
        </Tooltip>
        <Tooltip content="Twitter">
            <Link href={twitter}><AiFillTwitterCircle className='text-3xl hover:text-orange-400' /></Link>
        </Tooltip>
        <Tooltip content="Instagram">
            <Link href={instagram}><FaInstagram className='text-3xl hover:text-orange-400' /></Link>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default TeamMember;
