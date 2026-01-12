export const Header = () => {
  return (
    <header className="w-full flex">
      <div className="w-full flex max-w-6xl px-16 ">
        <nav className="w-full py-2">
          <ul className="w-full flex gap-2">
            <li className="mr-auto">
              <a href="." target="_self" rel="home" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="./publications.html">Publications</a>
            </li>
            <li>
              <a href="./research-projects.html">Research projects</a>
            </li>
            <li>
              <a href="./teaching.html">Teaching</a>
            </li>
            <li>
              <a href="./cv.html">CV</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
