import ChatList from "@components/ChatList";
import Contacts from "@components/Contacts";
import AppProviderBasic from "@components/DashBoard";

const Chats = () => {
  return (
    <div className="main-container">
      {/* <div className="w-1/3 max-lg:w-1/2 max-md:w-full">
        <ChatList />
      </div> */}
      {/* <AppProviderBasic/> */}
      <div className="w-1/3 max-lg:w-full max-md:hidden flex-col  ">
        <Contacts />
      </div>
      <div className="w-2/3 flex items-center justify-center">
        <p className="font-semibold">Chọn hoặc tìm kiếm bạn bè để trò chuyện</p>
      </div>
    </div>
  );
};

export default Chats;
