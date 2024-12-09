/* eslint-disable react/prop-types */
const SousProfile = ({ Data }) => {
  const { hobbies } = Data;
  return (
    <div>
      <h3>
        Your hobbies are {hobbies[0]} and {hobbies[1]}
      </h3>
    </div>
  );
};

export default SousProfile;
