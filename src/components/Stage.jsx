import ParallelCategories from './ParallelCategories';
import Sunburst from './Sunburst';
import TreeMap from './TreeMap';

function Stage() {
  return (
    <div className="stage">
      <div className="presentation">
        <TreeMap />
      </div>
      <div className="toolbar">
        <ParallelCategories />
        <Sunburst />
      </div>
    </div>
  );
}

export default Stage;
