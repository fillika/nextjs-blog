import Image from "next/image";

export default function AvatarImage() {
  return (
    <Image src="/images/me.jpg" alt="My avatar" height={144} width={144} />
  );
}
