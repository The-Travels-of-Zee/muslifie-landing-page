function IPhoneVideoFrame({ src }) {
  return (
    <div className="relative overflow-hidden rounded-4xl">
      {/* Video or Image inside screen */}
      <div className="absolute h-full w-full aspect-[9/19.5] z-0 rounded-[5rem] overflow-hidden">{src}</div>

      {/* Frame Image */}
      <img src="/misc/iphone-frame.webp" alt="iphone-frame" className="relative z-10 pointer-events-none" />
    </div>
  );
}

export default IPhoneVideoFrame;
