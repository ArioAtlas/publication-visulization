import { useState } from 'react';
import { DataService } from '../services/data-service';
import Footer from './Footer';
import Header from './Header';
import Stage from './Stage';

const service = DataService.getInstance();

function Dashboard() {
  const [filters, setFilters] = useState([]);
  return (
    <div className="dashboard">
      <Header service={service} filter={filters}></Header>
      <Stage service={service} filter={filters}></Stage>
      <Footer />
    </div>
  );
}

export default Dashboard;
