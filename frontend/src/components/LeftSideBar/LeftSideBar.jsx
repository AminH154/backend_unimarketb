import React, { useEffect } from "react";
import "./LeftSideBar.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from './../../store/useAuthStore';

const LeftSideBar = () => {
  const navigate = useNavigate();
  const { selectedUser, getUsers,users, isUserLoding, setSelectedUser } = useChatStore();
  const { OnLineUsers } = useAuthStore();
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUserLoding) return <div className="loader-rotate">Loading...</div>;

  return (
    <div className="leftSideBar">
      <div className="ls_nav">
        <div className="ls_top">
          <img src={assets.icon} alt="" height={40} width={40} />
          <p>
            <span>U</span>chat_ai
          </p>
        </div>

        <div className="menu">
          <img src={assets.menu} alt="" height={40} width={40} />
          <div className="menu_list">
            <p onClick={() => navigate("/profileUpdate")}>Edit Profile</p>
            <hr />
            <p>Logout</p>
          </div>
        </div>
      </div>
      <div className="ls_search">
        <img src={assets.search} alt="" />
        <input type="text" placeholder="Search ..." />
      </div>
      <div className="ls-list">
        <div className="friends">
          {users?.map((user) => (
            <button key={user._id} onClick={() => setSelectedUser(user)} 
            className={`friend ${selectedUser?._id === user._id ? "active" : ""}`}>
              <img src={user.profilePic || assets.profile} alt="" />
              <div>
                <p>{user.fullName || "User"}</p>
                {OnLineUsers.includes(user._id) ? (
                  <span className="online">En ligne</span>
                ) : (
                  <span className="offline">Hors ligne</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;