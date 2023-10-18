import styles from "../styles";

const NewFeatures = ({imgUrl, title, subtitle}) => (
  <div className={`flex-1 flex flex-col sm;max-w-[250px] min-w-[210px]`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}>
      <img src={imgUrl} alt="title" className="w-1/2 h-1/2 object-contain" />
    </div>
      <h1 className=" mt-4 font-bold text-lg text-white">Title: {title}</h1>
      <p className="text-[#b0b0b0] font-normal flex-1 mt-3 text-lg ">{subtitle}</p>
  </div>
);

export default NewFeatures;
