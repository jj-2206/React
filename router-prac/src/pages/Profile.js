import { useParams } from 'react-router-dom';

const data = {
  0: {
    id: 'jj2206',
    status: '공부중',
  },
  1: {
    id: 'yw2207',
    status: '연애중',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.number];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.id}</h2>
          <p>{profile.status}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
