import Calendar from "./calendar";
import DayCount from "./day_count";
import UserProfile from "./profile";

export default function Home() {
  return (
    // <div className="flex justify-center">
    //   <div className="flex flex-col lg:hidden">
    //     <Calendar />
    //     <div className="flex flex-row">
    //       <UserProfile imgUrl="/image/banh.jpeg" />
    //       <UserProfile imgUrl="/image/vu.jpeg" />
    //     </div>
    //   </div>
    //   <div className="hidden lg:flex lg:flex-row">
    //     <UserProfile imgUrl="/image/banh.jpeg" />
    //     <Calendar />
    //     <UserProfile imgUrl="/image/vu.jpeg" />
    //   </div>
    // </div>
    <div className="flex flex-col justify-center bg-white bg-[url('/image/background.jpg')] bg-cover bg-center lg:px-72 px-2">
      <div className="min-h-screen w-full flex justify-center items-center">
        <Calendar />
      </div>
      <div className="min-h-screen w-full lg:flex items-center justify-between hidden">
        <UserProfile
          name="Zũ"
          dob="20/12/1999"
          imgUrl="/image/vu.jpeg" />
        <DayCount />
        <UserProfile
          name="Bánh"
          dob="16/11/2002"
          imgUrl="/image/banh.jpeg" />
      </div>
      <div className="min-h-screen w-full flex flex-col items-center lg:hidden">
        <DayCount />
        <div className="flex flex-row">
          <UserProfile
            name="Zũ"
            dob="20/12/1999"
            imgUrl="/image/vu.jpeg" />
          <UserProfile
            name="Bánh"
            dob="16/11/2002"
            imgUrl="/image/banh.jpeg" />
        </div>
      </div>
    </div>
  );
}
