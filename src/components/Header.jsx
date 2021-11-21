import Histogram from './Histogram';

function Header({ service, filter }) {
  return (
    <div className="header">
      <h1>Publication Explorer</h1>
      <Histogram
        values={service.getColumn('year', true)}
        width="250"
        title="Year"
      />
      <Histogram
        values={service.getColumn('faculty')}
        width="280"
        title="Faculty"
      />
      <Histogram
        values={service.getColumn('department')}
        width="475"
        title="Department"
      />
    </div>
  );
}

export default Header;
