import Image from "next/image";

const SkillCard = ({ title, img }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 m-2 w-64">
            <div className="text-center mb-2">
                <Image
                    src={img}
                    alt={title}
                    width={50}
                    height={50}
                    className="rounded-full"
                />
            </div>
            <div className="text-center">
                <em className="text-lg font-semibold">{title}</em>
            </div>
        </div>
    );
}

export default SkillCard;
