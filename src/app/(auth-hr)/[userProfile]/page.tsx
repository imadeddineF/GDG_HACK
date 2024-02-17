import React from "react";

const Profile = ({ params }: any) => {
  return (
    <div>
      <h1>User profile</h1>
      <p>My name is {params.id}</p>
    </div>
  );
};

export default Profile;
