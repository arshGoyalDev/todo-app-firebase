const PageTransition = () => {
  return (
    <>
      <div className="slide-in fixed w-[33%] h-full  bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-80 backdrop-blur-xl top-0 left-0 z-[100000] origin-bottom"></div>
      <div className="slide-in fixed w-[33%] h-full  bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-80 backdrop-blur-xl top-0 left-[33%] z-[100000] origin-bottom delay-150"></div>
      <div className="slide-in fixed w-[33%] h-full  bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-80 backdrop-blur-xl top-0 left-[66%] z-[100000] origin-bottom delay-300"></div>

      <div className="slide-out fixed w-[33%] h-full  bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-80 backdrop-blur-xl top-0 left-0 z-[100000] origin-top"></div>
      <div className="slide-out fixed w-[33%] h-full  bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-80 backdrop-blur-xl top-0 left-[33%] z-[100000] origin-top delay-150"></div>
      <div className="slide-out fixed w-[33%] h-full  bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-80 backdrop-blur-xl top-0 left-[66%] z-[100000] origin-top delay-300"></div>
    </>
  );
};
export default PageTransition;
