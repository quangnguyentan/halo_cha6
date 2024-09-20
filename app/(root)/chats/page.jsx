import ChatList from "@components/ChatList";
import Contacts from "@components/Contacts";
import DashboardLayoutBranding from "@components/DashBoard";

const Chats = () => {
  return (
    <div className="main-container">
      {/* <div className="w-1/3 max-lg:w-1/2 max-md:w-full">
        <ChatList />
      </div> */}
      {/* <DashboardLayoutBranding /> */}
      <div className="w-full max-lg:w-full max-md:hidden flex-col ">
        <Contacts />
      </div>
    </div>
  );
};

export default Chats;
