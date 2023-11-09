import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const PostForm = () => {
  return (
    <div className="bg-slate-200 p-4 mt-4 font-Rale rounded-lg">
      <form action="" className="flex flex-wrap justify-between">
        <Input
          type="text"
          placeholder="Enter your title"
          name="title"
          required
          className="p-6 w-[45%] bg-transparent border-gray-300"
        />
        <select
          name="cat"
          id="cat"
          className="p-4 mb-8 bg-transparent border-2 rounded-lg border-gray-300"
        >
          <option value="general">Choose your category</option>
          <option value="FE">Front End Engineer</option>
          <option value="BE">Backend Engineer</option>
          <option value="DevOps">Dev Ops</option>
          <option value="Designer">UI/UX Designer</option>
        </select>
        <Textarea
          placeholder="Enter your description"
          name="desc"
          rows={16}
          className="p-6 bg-transparent  border-gray-300"
        />
        <Button size="lg" className="mt-10">
          Create
        </Button>
      </form>
    </div>
  );
};

export default PostForm;
