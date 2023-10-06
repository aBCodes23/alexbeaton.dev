export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <header className="z-10 max-w-5xl w-full items-center justify-start lg:flex">
        <img
          className="rounded-full relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mr-10"
          src="1467323_10202082436716067_2108552558_n.jpg"
          alt="Headshot"
          width={180}
          height={37}
        />
        <div>
          <h1 id="Name" className={`mb-3 text-4xl font-semibold`}>
            Alex Beaton
          </h1>
          <h2 id="Title" className={`mb-3 text-2xl`}>
            Junior Developer
          </h2>
        </div>
      </header>
      <div className=" flex-col	z-10 max-w-5xl w-full items-left justify-start lg:flex">
        <h2 className={`mb-3 text-2xl font-semibold`}>About Me </h2>
        <p>
          {" "}
          Welcome to my personal website and thank you for visiting. This is a
          simple place for me to talk about my projects, any structured learning
          I have undertaken and some information about interesting katas I have
          completed.
        </p>
        <br></br>
        <p>
          I finished the{" "}
          <a href="https://northcoders.com/">
            <u>Northcoders</u>
          </a>{" "}
          bootcamp on 29th September 2023. This was an intensive 13-week
          software engineering course which covered the fundamentals of
          JavaScript and both frontend and backend development where we
          regularly employed the concepts of Test Drive Development, Pair
          Programming and Agile working.
        </p>
        <br></br>
        <p>
          The next stage is to get my first job as a Junior Developer. In order
          to stay motivated and to keep learning I am going to split my time
          into four main areas:
        </p>
        <br></br>
        <ul className="list-decimal list-inside">
          <li className="pl-2">Applying for Jobs</li>
          <li className="pl-2">Projects</li>
          <li className="pl-2">Structured Learning</li>
          <li className="pl-2">Katas</li>
        </ul>
        <br />
        <p>See below for more details.</p>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Projects</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about my past and current projects here.
          </p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Learning</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find details of the courses I have completed here.
          </p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Katas</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            More information about katas I have completed can be found here.
          </p>
        </div>
      </div>
    </main>
  );
}
