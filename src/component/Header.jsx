function Header() {
  const name = "Guy";
  const job = "Software Developer";
  const logo = name.toUpperCase().split("");

  return (
    <>
      <header className="header">
        <div className="logo--containter">
          {logo.map((letter, index) => {
            return (
              <h1 key={index} className="logo">
                {letter}
              </h1>
            );
          })}
        </div>
        <h2 className="job">{job}</h2>
      </header>
    </>
  );
}

export default Header;
