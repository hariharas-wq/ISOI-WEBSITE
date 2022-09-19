import Image from "next/future/image";

const BoardCard = ({ src, alt, name, designation }) => {
  return (
    <>
      <section className="w-[13rem] h-[15rem] flex flex-col justify-center items-center">
        <div className="w-[10rem] h-[10rem] rounded-[50%] mb-2">
          <Image
            src={src}
            alt={alt}
            className="w-[10rem] h-[10rem] rounded-[50%]"
          />
        </div>
        <h1 className="font-primary text-tert text-base text-center">{name}</h1>
        <h2 className="font-primary text-tert text-sm text-center">
          {designation}
        </h2>
      </section>
    </>
  );
};

export default BoardCard;
