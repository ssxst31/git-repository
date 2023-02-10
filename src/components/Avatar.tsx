interface AvatarProps {
  src: string;
}

function Avatar({ src }: AvatarProps) {
  return (
    <img
      src={src}
      alt="avatar"
      className="w-8 h-8 rounded-[50%] mr-2 shadow-xl"
    />
  );
}

export default Avatar;
