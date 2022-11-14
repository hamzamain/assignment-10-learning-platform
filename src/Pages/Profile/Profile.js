import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user, verify, loading } = useContext(AuthContext);

  const handleVerify = () => {
    verify().then(() => {
      toast.success(
        "A verification Email has ben send to Your Inbox. Please Verify Now"
      );
    });
  };

  if (loading) {
    <p>Loading.............</p>;
    return;
  }
  if (user?.uid) {
    return (
      <div className="my-5 mx-20 w-full">
        <img src={user?.photoURL} alt="" />
        <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
        <p>{user?.email}</p>
        {user?.emailVerified === true ? (
          <p className="text-green-500">Verified</p>
        ) : (
          <p>
            Not Verified{" "}
            <Link className="btn btn-sm ml-5" onClick={handleVerify}>
              Verify Now
            </Link>
          </p>
        )}
        {/* <Link to={"/settings"}>
          <button className="btn btn-success mt-5">Settings</button>
        </Link> */}
      </div>
    );
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default Profile;
