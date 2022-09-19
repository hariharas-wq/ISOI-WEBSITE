import Image from "next/future/image";

const BoardCard = ({ src, alt, name, designation }) => {
  return (
    <>
      <section>
        <div className="w-[10rem] h-[10rem] rounded-[50%]">
          <Image
            src={src}
            alt={alt}
            width={"160"}
            height={"160"}
            className="rounded-[50%]"
          />
        </div>
        <h1>{name}</h1>
        <h2>{designation}</h2>
      </section>
    </>
  );
};

export default BoardCard;
