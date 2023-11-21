import LatestProducts from "@/app/(store)/_components/latest-products";
import AddStore from "@/components/form/add-forem-store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const ForemStore = () => {
  return (
    <div className="my-16 container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-Rale text-4xl font-medium">
          Welcome to the Forem Store
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="font-bold font-Kanit">
              Add products
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add to store</DialogTitle>
            </DialogHeader>
            <div className="">
              <AddStore />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <LatestProducts />
    </div>
  );
};

export default ForemStore;
