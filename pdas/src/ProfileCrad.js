function ProfileCard({ title, handle }) {
  // This is the 3rd method ^

  // 1st method
  // const title = props.title;
  // const handle = props.handle;

  // 2nd method
  // const { title, handle } = props;

  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
