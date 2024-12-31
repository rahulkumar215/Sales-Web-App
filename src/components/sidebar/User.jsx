function User() {
  return (
    <div className="mb-8 grid grid-cols-[max-content_1fr] grid-rows-2 items-center justify-center">
      <img
        src="https://i.imgur.com/oYoOuct.png"
        alt="user image"
        className="col-start-1 col-end-2 row-start-1 row-end-3 mr-4 size-[6.4rem] rounded-full border-blue-500 bg-white object-contain"
      />
      <h3 className="self-end text-[1.6rem] font-normal">Emma Wattson</h3>
      <h4 className="self-baseline text-[1.1rem] font-medium opacity-80">
        Inside Sales Executive
      </h4>
    </div>
  );
}

export default User;
