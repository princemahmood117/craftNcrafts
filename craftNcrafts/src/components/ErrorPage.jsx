const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="py-4 rounded shadow-md md:w-[700px] md:h-[200px] sm:w-80 animate-pulse bg-gray-800 mt-32">
        <div className="flex p-4 space-x-4 sm:px-8">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-700"></div>
          <div className="flex-1 py-2 space-y-4">
            <div className="w-full h-3 rounded bg-gray-700"></div>
            <h2 className="mb-8 font-extrabold text-9xl text-center dark:text-gray-400">
              404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              You sure you're looking for something here? 
            </p>
            <span className=" flex justify-center text-7xl">🤔</span>
            <div className="w-5/6 h-3 rounded bg-gray-700"></div>
          </div>
        </div>
        <div className="p-4 space-y-4 sm:px-8">
          <div className="w-full h-4 rounded bg-gray-700"></div>
          <div className="w-full h-4 rounded bg-gray-700"></div>
          <div className="w-3/4 h-4 rounded bg-gray-700"></div>
        </div>
      </div>


{/* 
      <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800 mt-5">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded dark:bg-default-600 dark:text-gray-50"
            >
              Back to homepage
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ErrorPage;
