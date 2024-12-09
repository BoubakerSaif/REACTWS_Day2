import SousProfile from "./SousProfile";

/* eslint-disable react/prop-types */
const Profile = ({ Data }) => {
  const { userName, age } = Data;
  return (
    <div>
      <h3>
        Hello {userName}, Your age is {age}
      </h3>

      <SousProfile Data={Data} />
    </div>
  );
};

export default Profile;
