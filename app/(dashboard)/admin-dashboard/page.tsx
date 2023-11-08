import CardSections from "@/components/sections/admindashboard/sections/CardSections";
import Posts from "@/components/sections/admindashboard/sections/Posts";

const AdminDashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex_3">
        <CardSections />
        <Posts / >
      </div>
      <div className="flex-1">Right Side Bar</div>
    </div>
  );
};

export default AdminDashboard;
