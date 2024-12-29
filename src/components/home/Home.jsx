import Company from "../company/Company";
import Sidebar from "../sidebar/Sidebar";

function Home() {
  return (
    <div className="grid h-full grid-cols-[26rem_1fr] grid-rows-2">
      <Sidebar />
      <Company />
    </div>
  );
}

export default Home;
