import ParallelCategories from './ParallelCategories';
import TreeMap from './TreeMap';

function Stage() {
  return (
    <div className="stage">
      <div className="presentation">
        <TreeMap />
      </div>
      <div className="toolbar">
        <ParallelCategories />
      </div>
    </div>
  );
}

export default Stage;
