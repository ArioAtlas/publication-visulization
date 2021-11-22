import ParallelCategories from './ParallelCategories';
import TreeMap from './TreeMap';

function Stage({ service, filter }) {
  const dimensions = service.getDimensions(
    ['year', 'department', 'faculty'],
    true
  );
  const grouped = service.getGroupedBy([
    'faculty',
    'department',
    'year',
    'name',
  ]);

  return (
    <div className="stage">
      <div className="presentation">
        <TreeMap data={grouped} />
      </div>
      <div className="toolbar">
        <ParallelCategories dimensions={dimensions} />
      </div>
    </div>
  );
}

export default Stage;
