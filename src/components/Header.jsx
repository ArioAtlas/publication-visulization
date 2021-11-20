import Histogram from './Histogram';

function Header() {
  return (
    <div className="header">
      <h1>Publication Explorer</h1>
      <Histogram
        values={[
          'omid',
          'omid',
          'omid',
          'omid',
          'omid',
          'omid',
          'parna',
          'parna',
          'parna',
          'parna',
        ]}
      />
      <Histogram
        values={[
          'parna',
          'parna',
          'parna',
          'parna',
          'parna',
          'parna',
          'parna',
          'parna',
          'parna',
          'parna',
          'parna',
          'parna',
          'parna',
          'parna',
          'omid',
          'omid',
          'parna',
          'parna',
          'parna',
          'parna',
        ]}
      />
      <Histogram
        values={['omid', 'omid', 'parna', 'parna', 'parna', 'parna']}
      />
    </div>
  );
}

export default Header;
