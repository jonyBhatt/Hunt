import Image from "next/image";

const LatestProductCard = () => {
  return (
    <div className="my-12 flex flex-col items-center">
      {/* Wrapper div for the card */}
      <div className="w-[300px] h-[300px] bg-gray-400 flex justify-center items-center">
        {/* Image component from Next.js for displaying the image */}
        <Image
          src="/forem/e1.jpg"
          alt="e1"
          width={200}
          height={200}
          className="object-cover rounded-sm"
        />
      </div>
      <div className="my-2 cursor-pointer text-center group">
        <h3 className="font-Rale font-semibold group-hover:border-b-4 group-hover:border-b-gray-500">
          DEV Pride Mug
        </h3>
        <span className="text-lg font-light font-Rale">125 &#2547;</span>
      </div>
    </div>
  );
};

export default LatestProductCard;

//
//In this code, we have a functional component called `LatestProductCard`. It returns a JSX structure that represents a card with an image inside.
//
//The card is wrapped in a `div` with a fixed width and height. The `bg-gray-400` class sets the background color to a light gray.
//
//The `Image` component is used to display the image. It takes the `src` attribute to specify the image source, the `alt` attribute to provide a description for the image, and the `width` and `height` attributes to set the dimensions of the image. The `className` attribute is used to apply the `object-cover` class, which ensures that the image maintains its aspect ratio while filling the available space.
//
//The component
