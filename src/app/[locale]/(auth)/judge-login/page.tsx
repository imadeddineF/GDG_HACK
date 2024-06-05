'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blurBlue from '../../../../../public/imgs/blurBlue.png';
import logo from '../../../../../public/imgs/gdgLoginLogo.svg';
import gdg from '../../../../../public/imgs/gdglogo.png';
import redDots from '../../../../../public/svgs/dots.svg';
import blueDots from '../../../../../public/svgs/blueDots.svg';
import orangeDots from '../../../../../public/svgs/orangedots.svg';
import loginImg from '../../../../../public/imgs/loginImg.png';
import vectorOne from '../../../../../public/svgs/vector1.svg';
import vectorTwo from '../../../../../public/svgs/vector2.svg';
import vectorThree from '../../../../../public/svgs/vector3.svg';
// import axios from "axios";
// import TransitionPageEffect from "../../../components/shared/transitionPageEffect";
import { AnimatePresence } from 'framer-motion';
import { useLoginPosition } from '../../../../store/loginPositionSlice';

// const BASE_URL = "http://192.168.8.100:8000/";

const JudgeSignIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let { position } = useLoginPosition();
  if (position === 'left-0') {
    position = 'right-0';
  } else if (position === 'right-0') {
    position = 'left-0';
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    // try {
    //   const response = await axios.post(`${BASE_URL}sign-in`, {
    //     email,
    //     password,
    //   });
    //   console.log("Login Successful", response.data);
    //   setEmail("");
    //   setPassword("");
    // } catch (error) {
    //   console.error("Login Failed", error);
    // }
  };

  return (
    <AnimatePresence mode="wait">
      <div className={`h-full w-full relative`}>
        {/* The page transition */}
        {/* <TransitionPageEffect /> */}
        <div className="flex justify-between items-center h-screen mx-[80px]">
          <div className="absolute top-[100px] left-[100px] w-[150px] h-[150px] rounded-full bg-blue-500 filter blur-[90px]" />
          <div className="absolute bottom-[100px] left-[400px] w-[150px] h-[150px] rounded-full bg-blue-500 filter blur-[90px]" />
          <Image
            className="absolute z-50 top-[100px] left-[200px] w-[180px]"
            src={logo}
            alt="GDG Logo"
          />
          <Image
            className="absolute w-[180px] top-0 right-0"
            src={redDots}
            alt=""
          />
          <Image
            className="absolute w-[180px] bottom-0 left-0"
            src={blueDots}
            alt=""
          />
          <Image
            className="w-[180px] absolute top-[200px] left-[300px]"
            src={orangeDots}
            alt=""
          />
          <Image
            className="w-[160px] absolute bottom-[20px] right-[20px]"
            src={vectorOne}
            alt=""
          />
          <Image
            className="w-[160px] absolute top-[100px] left-[550px]"
            src={vectorTwo}
            alt=""
          />
          <Image
            className="w-[160px] absolute bottom-[10px] left-[200px]"
            src={vectorThree}
            alt=""
          />
          <div className="w-[260px] ml-[30px] mt-[80px] z-50">
            <Image className="w-full" src={loginImg} alt="" />
          </div>

          <div className="flex flex-col items-center justify-center w-[320px]">
            <Image className="w-[240px] z-50  mb-[50px]" src={gdg} alt="" />

            <h2 className="text-[#1976D2] z-50 text-[24px] font-bold">
              Log In as Judge
            </h2>
            <p className="text-[#8a8a8a] z-50 text-center text-[18px] mt-[8px] mb-[30px]">
              Please Fill the Form below to Continue
            </p>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex z-50 flex-col items-center justify-center w-[260px]"
            >
              <input
                type="email"
                placeholder="Enter Email"
                className="border border-[#4285F4] outline-none rounded-[6px] p-2 w-full mb-[10px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-[#4285F4] outline-none rounded-[6px] p-2 w-full mb-[35px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="submit"
                value="Sign In"
                className="w-full py-[8px] rounded-[6px] cursor-pointer duration-300 transition-all hover:bg-[#2a88e6] text-white flex justify-center items-center bg-[#1976D2]"
              />
            </form>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default JudgeSignIn;
