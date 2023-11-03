"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Majored, Professor, ProfileForm, SchoolEmail, StudentId } from '../form/onboard-form';
import Profile from './Profile';

const MentorBoarding = () => {
   const [steps, setSteps] = useState(0);
   const questionTitle = [
     "What is your major or field of study?",
     "Do you have a student ID or campus card?",
     "Can you provide the name of your current professors or instructors?",
     "Tell us more about yourself",
     "Do you have a school email address?",
   ];
   return (
     <div className="flex justify-center flex-col gap-10 px-16">
       <div className="flex flex-col gap-8 ">
         <h1 className="font-Kanit text-4xl  font-semibold">
           {questionTitle[steps]}
         </h1>
         {steps === 0 ? (
           <>
             <Majored />
           </>
         ) : steps === 1 ? (
           <>
             <StudentId />
           </>
         ) : steps === 2 ? (
           <>
             <Professor />
           </>
         ) : steps === 3 ? (
           <>
             <ProfileForm />
           </>
         ) : steps === 4 ? (
           <>
             <SchoolEmail />
           </>
         ) : (
           <>{/* <h1>Welcome Page</h1> */}</>
         )}
       </div>

       <div className="flex gap-16 items-center justify-between">
         <Button
           variant="secondary"
           size={"lg"}
           onClick={() => setSteps((prev) => prev - 1)}
           disabled={steps === 0}
         >
           Previous
         </Button>
         {steps !== questionTitle.length - 1 ? (
           <>
             <Button
               variant="secondary"
               size={"lg"}
               onClick={() => setSteps((prev) => prev + 1)}
               disabled={steps === questionTitle.length - 1}
             >
               Next
             </Button>
           </>
         ) : (
           <>
             <button>Finish</button>
           </>
         )}
       </div>
     </div>
   );
}

export default MentorBoarding