const PageNotFound = () => {
  return (
    <div
      className="page-not-found"
      style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        fontFamily: 'inherit',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 — Page Not Found</h1>
      <p style={{ fontSize: '1.1rem' }}>
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <a
        href={import.meta.env.BASE_URL}
        style={{ display: 'inline-block', marginTop: '2rem', color: '#007acc' }}
      >
        Go back home
      </a>
    </div>
  );
};

export default PageNotFound;
