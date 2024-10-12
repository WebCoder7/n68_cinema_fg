import MainLayout from "../layouts/Main_layout";
import icon from "../assets/profile.svg";
import logout from "../assets/logout.svg";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

import "../style_page/Profile.css"; 


function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate("/");
  const handleLogout = () => {
    dispatch({ type: "logout" });
    localStorage.removeItem("Token");
    const Token = localStorage.getItem("Token");

    if (!Token) {
      toast.loading("Akkountdan chiqilmoqda");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  const telNumber = localStorage.getItem("telNumber");
  return (
    <MainLayout>
      <ToastContainer />

      <div className="profile-container">
        <div className="profile-header">
          <img src={icon} alt="" />
          Мои данные
        </div>
        <div className="profile-details">
          <div className="profile-item">
            <p className="profile-label">Имя пользователя</p>
            <div className="profile-data">Abdulaziz Abdujalilov</div>
          </div>
          <div className="profile-item">
            <p className="profile-label">Номер телефона</p>
            <div className="profile-data">+998 {telNumber}</div>
          </div>
          <div className="profile-item">
            <p className="profile-label">Адрес электронной почты</p>
            <div className="profile-data">abdulaziz@tickets.uz</div>
          </div>
        </div>

        <button onClick={handleLogout} className="logout-button">
          <img src={logout} alt="" />
          Выйти из аккаунта
        </button>
      </div>
    </MainLayout>
  );
}

export default ProfilePage;
