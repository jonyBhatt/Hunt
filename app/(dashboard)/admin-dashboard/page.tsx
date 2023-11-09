import CardSections from "@/components/sections/admindashboard/sections/CardSections";
import ChartSection from "@/components/sections/admindashboard/sections/ChartSection";
import Posts from "@/components/sections/admindashboard/sections/Posts";
import RightSidebar from "@/components/sections/admindashboard/sections/RightSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex_3">
        <CardSections />
        <Posts />
        <ChartSection />
      </div>
      <div className="flex-1 lg:flex xs:hidden">
        <RightSidebar />
      </div>
    </div>
  );
};

export default AdminDashboard;
