import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { rale } from '@/lib/fonts/font';
import { cn } from '@/lib/utils';
import { FindTypes } from '@/types';

const FindCard = ({ title, content, url}:FindTypes) => {
  return (
    <div className="my-8">
      <Card className="w-[350px] flex flex-col items-center justify-center shadow-lg py-8">
        <div className="relative w-[200px] h-[200px] mt-4">
          <Image src={url} alt="Find" fill className="object-cover" />
        </div>
        {/* <Image src="" /> */}
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>{title}</CardTitle>
        </CardHeader>
        <CardContent className={cn(rale.className, "text-center")}>
          <p className="text-xs text-[#666666]">
            {content}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default FindCard