import Image from "next/image";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-negroni font-sans dark:bg-orange-950 ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 gap-4 sm:items-start sm:flex-row">
        <div className="">
          <h1 className="h1">
            I’m Grace Brown, a researcher and educator working towards a future
            where communities control the systems that shape our world.
          </h1>

          <h3 className="--font-rubik text-sm font-light uppercase">
            Postdoctoral Researcher in Global Remunicipalisation, University of
            Glasgow
          </h3>

          <p>
            {" "}
            passionate about reshaping energy futures and ensuring communities
            can transform the systems that shape their lives.
          </p>

          <p>
            I’m passionate about building more just, sustainable, and equitable
            futures through bold ideas and collective action.
          </p>

          <p>My research TKTK. </p>

          <p>
            I’m a postdoctoral researcher specialising in energy politics, with
            a focus on energy justice, democracy, and transitions. I’m
            passionate about critical scholarship and collaborative projects,
            also exploring themes of municipalism, social movements, and
            sustainable futures through teaching, writing, and community
            engagement.
          </p>

          <p>
            I am an Advisory Board member for{" "}
            <a href="https://www.publicgrids.org/">Public Grids</a>, the
            organisation bringing grassroots organising and sector-leading
            expertise together&nbsp;to expand public power across the United
            States, from campaign to implementation.
          </p>
        </div>
        <div className="flex">
          <div className="h-40 w-40 overflow-hidden">
            <Image
              src="/images/photobooth-cropped.png"
              alt="grace brown photobooth"
              height={160}
              width={160}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
