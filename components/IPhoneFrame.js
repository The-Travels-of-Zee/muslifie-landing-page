function IPhoneFrame({ src, className }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute top-[6px] bottom-[8px] left-[12px]">
        {/* <div className="absolute top-1.5 right-1.5 lg:right-18.5 z-0"> */}
        <img
          src={src}
          alt="screenshot"
          className={
            className ? className : "h-[312px] lg:h-[372px] w-full object-cover rounded-[1rem] 2xs:rounded-[2rem]"
          }
        />
      </div>
      <img src="/misc/iphone-frame.webp" alt="iphone-frame" className="relative z-10 w-full h-full object-contain" />
    </div>
  );
}

export default IPhoneFrame;
