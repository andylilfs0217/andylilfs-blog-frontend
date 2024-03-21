type Props = {
  name?: string;
  picture?: string;
};

const AuthorAvatar = ({ name, picture = "assets/user-icon.png" }: Props) => {
  return (
    <div className="flex items-center">
      {picture.trim() !== "" && (
        <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      )}
      {name && name.trim() !== "" && (
        <div className="text-xl font-bold">{name}</div>
      )}
    </div>
  );
};

export default AuthorAvatar;
