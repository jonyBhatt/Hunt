"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Onboarding = () => {
  const { push } = useRouter();
  return (
    <div>
      <div className=" flex justify-center flex-col items-center py-5 gap-8">
        <h2 className="font-Kanit text-5xl font-medium mb-8 ml-12">
          How do you <br /> want to use HUNT?
        </h2>
        <div className="flex flex-col gap-6 mb-16">
          <div
            className="flex gap-6 items-center p-4 rounded bg-gray-100 cursor-pointer"
            onClick={() => {
              push("/user-dashboard");
            }}
          >
            <div className="relative">
              <Image src="/student.png" alt="student" width={30} height={30} />
            </div>
            <span className="text-md font-Rale font-medium">
              Do you want to learn from mentor?
            </span>
          </div>
          <div
            className="flex gap-6 items-center p-4 rounded bg-gray-100 cursor-pointer"
            onClick={() => {
              push("/onboard/mentor-onboard");
            }}
          >
            <div className="relative">
              <Image src="/teacher.png" alt="student" width={30} height={30} />
            </div>
            <span className="text-md font-Rale font-medium">
              Do you want to teach others?
            </span>
          </div>
        </div>
        {/* <div className="flex gap-16 items-center justify-between">
          <Button
            variant="secondary"
            size={"lg"}
            onClick={() => setSteps((prev) => prev - 1)}
            disabled={steps === 0}
          >
            Previous
          </Button>
          {steps !== finalStep ? (
            <>
              <Button
                variant="secondary"
                size={"lg"}
                onClick={() => setSteps((prev) => prev + 1)}
                disabled={steps === finalStep}
              >
                Next
              </Button>
            </>
          ) : (
            <>
              <button>Finish</button>
            </>
          )}
        </div> */}
      </div>
    </div>
  );
};

const StudentQuestion = () => {
  return <div>Student</div>;
};
const MentorQuestion = () => {
  return <div>Mentor</div>;
};

export default Onboarding;
