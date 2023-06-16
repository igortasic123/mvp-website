const DashboardHome = () => {
  return (
    <div
      className="
    
        w-full
        
        items-center
        flex
        flex-col
        h-screen
        

        "
    >
      <div className="flex flex-row ">
        <div className="flex flex-col items-center ">
          <div className="">
            <div className="flex flex-col items-center justify-center p-5">
              <h1 className="text-3xl font-semibold">Welcome back, business</h1>
              <p className="text-gray-500">
                Here's what's happening with your projects today
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row gap-5">
                <div className="flex flex-col items-center justify-center rounded-xl border-[1px] p-5">
                  <h1 className="text-3xl font-semibold">3</h1>
                  <p className="text-gray-500">Active Projects</p>
                </div>

                <div className="flex flex-col items-center justify-center rounded-xl border-[1px] p-5">
                  <h1 className="text-3xl font-semibold">1</h1>
                  <p className="text-gray-500">Pending Projects</p>
                </div>

                <div className="flex flex-col items-center justify-center rounded-xl border-[1px] p-5">
                  <h1 className="text-3xl font-semibold">2</h1>
                  <p className="text-gray-500">Completed Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
