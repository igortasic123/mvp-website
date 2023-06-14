"use client";

const FourthSection = () => {
  return (
    <div
      className="
    flex
    flex-col
    p-20
    
    
    "
    >
      <div
        className="
      flex 
      flex-col
      justify-center
      items-center
      text-5xl
      font-extrabold
      text-gray-800
      "
      >
         Contact

        <div
        className="text-4xl
      font-extrabold
      text-gray-800
        text-center
        p-10
          "
      >
        We're here to help, get in touch with us.
      </div>
        </div>
      <div className="items-center md:p-20 md:w-3/4 self-center">
        <form>
            <div className="flex flex-col gap-10  ">
            <div className="flex flex-col gap-5">
            <label htmlFor="name">Name </label>
            <input type="text" name="name" id="name" required className="border-[1px] border-gray-300 rounded-xl p-5"/>
            </div>
            <div className="flex flex-col gap-5">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required className="border-[1px] border-gray-300 rounded-xl p-5"/>
            </div>
            <div className="flex flex-col gap-5">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" id="phoneNumber" required className="border-[1px] border-gray-300 rounded-xl p-5"/>
            </div>
            <div className="flex flex-col gap-5">
            <label htmlFor="message">Message (optional) </label>
            <textarea name="message" id="message"  className="border-[1px] border-gray-300 rounded-xl p-5"/>
            </div>
            <div className="flex flex-col gap-5">
            <button className="bg-orange-300 rounded-xl p-5">Submit</button>
            </div>
            </div>
        </form>
        </div>
  


        </div>
  );
};

export default FourthSection;
