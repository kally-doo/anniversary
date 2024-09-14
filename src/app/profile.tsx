import Image from "next/image";
import { FC } from "react";

type Props = {
    imgUrl: string,
    name: string,
    dob: string
}

const UserProfile: FC<Props> = ({
    imgUrl,
    name,
    dob
}) => {
    return (
        <div className="bg-[#FFF] flex flex-col justify-center items-center p-4 lg:p-12 rounded-xl m-2 font-[family-name:var(--font-jetBrainsMono)]">
            <Image className="rounded-full w-32 h-32 lg:w-250px lg:h-250px"
                src={imgUrl}
                alt={""}
                style={{objectFit: "cover"}}
                width={4032}
                height={3024} />

            <p className="text-[#333333] p-4 font-bold text-xl">{name}</p>
            <p className="text-[#333333]">{dob}</p>
        </div>
    );
}

export default UserProfile;