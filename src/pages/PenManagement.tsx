import React, { useEffect, useState, Component } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { PlusIcon, Trash2Icon, EditIcon, SaveIcon, XIcon, PackageIcon, DropletIcon, CheckIcon, LayoutGridIcon, ClipboardListIcon, ArrowRightIcon, SearchIcon, FilterIcon, ArrowLeftIcon, InfoIcon, TagIcon, AlertCircleIcon } from 'lucide-react';
// Mock data for pens, pigs, feed, and water
const initialPens = [{
  id: 1,
  name: 'Pen A',
  capacity: 15,
  occupied: 12,
  location: 'North Wing'
}, {
  id: 2,
  name: 'Pen B',
  capacity: 12,
  occupied: 10,
  location: 'North Wing'
}, {
  id: 3,
  name: 'Pen C',
  capacity: 20,
  occupied: 18,
  location: 'South Wing'
}, {
  id: 4,
  name: 'Pen D',
  capacity: 15,
  occupied: 11,
  location: 'South Wing'
}];
const initialPigs = [{
  id: 'P001',
  name: 'Bacon',
  pen: 1,
  tagColor: '#22c55e',
  weight: 78,
  birthDate: '2023-06-15',
  gender: 'Male',
  health: 'Healthy'
}, {
  id: 'P002',
  name: 'Hamlet',
  pen: 1,
  tagColor: '#3b82f6',
  weight: 82,
  birthDate: '2023-06-10',
  gender: 'Male',
  health: 'Healthy'
}, {
  id: 'P003',
  name: 'Peppa',
  pen: 2,
  tagColor: '#ec4899',
  weight: 65,
  birthDate: '2023-07-22',
  gender: 'Female',
  health: 'Healthy'
}, {
  id: 'P004',
  name: 'Wilbur',
  pen: 2,
  tagColor: '#f59e0b',
  weight: 70,
  birthDate: '2023-07-05',
  gender: 'Male',
  health: 'Monitoring'
}, {
  id: 'P005',
  name: 'Porky',
  pen: 3,
  tagColor: '#8b5cf6',
  weight: 85,
  birthDate: '2023-05-30',
  gender: 'Male',
  health: 'Healthy'
}];
const initialResources = {
  feed: [{
    id: 1,
    name: 'Standard Feed',
    quantity: 500,
    unit: 'kg',
    lastRestocked: '2023-11-15',
    type: 'Growth'
  }, {
    id: 2,
    name: 'Premium Feed',
    quantity: 200,
    unit: 'kg',
    lastRestocked: '2023-11-10',
    type: 'Finishing'
  }, {
    id: 3,
    name: 'Starter Feed',
    quantity: 150,
    unit: 'kg',
    lastRestocked: '2023-11-05',
    type: 'Piglet'
  }],
  water: [{
    id: 1,
    name: 'Main Water Tank',
    capacity: 2000,
    current: 1500,
    unit: 'L',
    lastChecked: '2023-11-18'
  }, {
    id: 2,
    name: 'Secondary Water Tank',
    capacity: 1000,
    current: 800,
    unit: 'L',
    lastChecked: '2023-11-18'
  }]
};
const initialConsumption = [{
  id: 1,
  date: '2023-11-18',
  penId: 1,
  feedId: 1,
  feedAmount: 25,
  feedUnit: 'kg',
  waterId: 1,
  waterAmount: 120,
  waterUnit: 'L'
}, {
  id: 2,
  date: '2023-11-18',
  penId: 2,
  feedId: 3,
  feedAmount: 15,
  feedUnit: 'kg',
  waterId: 1,
  waterAmount: 80,
  waterUnit: 'L'
}, {
  id: 3,
  date: '2023-11-18',
  penId: 3,
  feedId: 2,
  feedAmount: 30,
  feedUnit: 'kg',
  waterId: 2,
  waterAmount: 150,
  waterUnit: 'L'
}];
// Pen Management Component
const PenManagement = ({
  theme
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pens');
  const tabItems = [{
    id: 'pens',
    name: 'Pens',
    icon: <LayoutGridIcon size={18} />
  }, {
    id: 'pigs',
    name: 'Pigs',
    icon: <div size={18} />
  }, {
    id: 'resources',
    name: 'Resources',
    icon: <ClipboardListIcon size={18} />
  }];
  return <div className="mb-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Pen Management
        </h2>
      </div>
      {/* Tabs */}
      <div className={`${theme === 'dark' ? 'bg-gray-800/40 backdrop-blur-xl border-gray-700/50' : 'bg-white backdrop-blur-xl border-gray-200/70'} rounded-xl shadow-lg overflow-hidden border transition-colors`}>
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {tabItems.map(tab => <button key={tab.id} className={`flex items-center px-6 py-4 ${activeTab === tab.id ? theme === 'dark' ? 'text-green-400 border-b-2 border-green-500' : 'text-green-600 border-b-2 border-green-500' : theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} transition-colors`} onClick={() => setActiveTab(tab.id)}>
              <span className={`mr-2 ${activeTab === tab.id ? theme === 'dark' ? 'text-green-400' : 'text-green-600' : theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                {tab.icon}
              </span>
              {tab.name}
            </button>)}
        </div>
        <div className="p-6">
          {activeTab === 'pens' && <PensManagement theme={theme} />}
          {activeTab === 'pigs' && <PigsManagement theme={theme} />}
          {activeTab === 'resources' && <ResourcesManagement theme={theme} />}
        </div>
      </div>
    </div>;
};
// Pens Management Component
const PensManagement = ({
  theme
}) => {
  const [pens, setPens] = useState(initialPens);
  const [isAddingPen, setIsAddingPen] = useState(false);
  const [editingPenId, setEditingPenId] = useState(null);
  const [newPen, setNewPen] = useState({
    name: '',
    capacity: 0,
    occupied: 0,
    location: ''
  });
  const handleAddPen = () => {
    if (newPen.name && newPen.capacity > 0) {
      const newPenWithId = {
        ...newPen,
        id: pens.length > 0 ? Math.max(...pens.map(p => p.id)) + 1 : 1
      };
      setPens([...pens, newPenWithId]);
      setNewPen({
        name: '',
        capacity: 0,
        occupied: 0,
        location: ''
      });
      setIsAddingPen(false);
    }
  };
  const handleUpdatePen = id => {
    const updatedPens = pens.map(pen => pen.id === id ? {
      ...newPen,
      id
    } : pen);
    setPens(updatedPens);
    setEditingPenId(null);
  };
  const handleDeletePen = id => {
    setPens(pens.filter(pen => pen.id !== id));
  };
  const startEditPen = pen => {
    setEditingPenId(pen.id);
    setNewPen({
      ...pen
    });
  };
  const cancelEdit = () => {
    setEditingPenId(null);
    setNewPen({
      name: '',
      capacity: 0,
      occupied: 0,
      location: ''
    });
  };
  return <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Manage Pens
        </h3>
        {!isAddingPen && <button className={`flex items-center px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-colors`} onClick={() => setIsAddingPen(true)}>
            <PlusIcon size={16} className="mr-1.5" />
            <span>Add Pen</span>
          </button>}
      </div>
      {/* Add Pen Form */}
      {isAddingPen && <div className={`p-4 mb-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'}`}>
          <h4 className={`text-md font-medium mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Add New Pen
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Pen Name
              </label>
              <input type="text" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Pen Name" value={newPen.name} onChange={e => setNewPen({
            ...newPen,
            name: e.target.value
          })} />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Capacity
              </label>
              <input type="number" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Capacity" value={newPen.capacity} onChange={e => setNewPen({
            ...newPen,
            capacity: parseInt(e.target.value) || 0
          })} />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Current Occupancy
              </label>
              <input type="number" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Current Occupancy" value={newPen.occupied} onChange={e => setNewPen({
            ...newPen,
            occupied: parseInt(e.target.value) || 0
          })} />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Location
              </label>
              <input type="text" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Location" value={newPen.location} onChange={e => setNewPen({
            ...newPen,
            location: e.target.value
          })} />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'} transition-colors`} onClick={() => setIsAddingPen(false)}>
              Cancel
            </button>
            <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-colors`} onClick={handleAddPen}>
              Add Pen
            </button>
          </div>
        </div>}
      {/* Pens List */}
      <div className="overflow-x-auto">
        <table className={`min-w-full ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          <thead>
            <tr className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
              <th className="text-left py-3 px-4">Pen Name</th>
              <th className="text-left py-3 px-4">Location</th>
              <th className="text-left py-3 px-4">Capacity</th>
              <th className="text-left py-3 px-4">Occupancy</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-right py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pens.map(pen => <tr key={pen.id} className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                {editingPenId === pen.id ?
            // Edit mode
            <>
                    <td className="py-3 px-4">
                      <input type="text" className={`w-full px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newPen.name} onChange={e => setNewPen({
                  ...newPen,
                  name: e.target.value
                })} />
                    </td>
                    <td className="py-3 px-4">
                      <input type="text" className={`w-full px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newPen.location} onChange={e => setNewPen({
                  ...newPen,
                  location: e.target.value
                })} />
                    </td>
                    <td className="py-3 px-4">
                      <input type="number" className={`w-full px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newPen.capacity} onChange={e => setNewPen({
                  ...newPen,
                  capacity: parseInt(e.target.value) || 0
                })} />
                    </td>
                    <td className="py-3 px-4">
                      <input type="number" className={`w-full px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newPen.occupied} onChange={e => setNewPen({
                  ...newPen,
                  occupied: parseInt(e.target.value) || 0
                })} />
                    </td>
                    <td className="py-3 px-4">-</td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30' : 'bg-green-100 text-green-600 hover:bg-green-200'}`} onClick={() => handleUpdatePen(pen.id)} title="Save">
                        <SaveIcon size={16} />
                      </button>
                      <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={cancelEdit} title="Cancel">
                        <XIcon size={16} />
                      </button>
                    </td>
                  </> :
            // View mode
            <>
                    <td className="py-3 px-4">{pen.name}</td>
                    <td className="py-3 px-4">{pen.location}</td>
                    <td className="py-3 px-4">{pen.capacity}</td>
                    <td className="py-3 px-4">{pen.occupied}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${pen.occupied < pen.capacity ? theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700' : theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'}`}>
                        {pen.occupied < pen.capacity ? 'Available' : 'Full'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`} onClick={() => startEditPen(pen)} title="Edit">
                        <EditIcon size={16} />
                      </button>
                      <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-red-100 text-red-600 hover:bg-red-200'}`} onClick={() => handleDeletePen(pen.id)} title="Delete">
                        <Trash2Icon size={16} />
                      </button>
                    </td>
                  </>}
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};
// Pigs Management Component
const PigsManagement = ({
  theme
}) => {
  const [pigs, setPigs] = useState(initialPigs);
  const [pens, setPens] = useState(initialPens);
  const [isAddingPig, setIsAddingPig] = useState(false);
  const [editingPigId, setEditingPigId] = useState(null);
  const [newPig, setNewPig] = useState({
    id: '',
    name: '',
    pen: '',
    tagColor: '#22c55e',
    weight: 0,
    birthDate: '',
    gender: 'Male',
    health: 'Healthy'
  });
  const [filters, setFilters] = useState({
    pen: '',
    health: '',
    search: ''
  });
  // Generate a unique ID for new pigs
  const generatePigId = () => {
    const existingIds = pigs.map(pig => parseInt(pig.id.slice(1)));
    const maxId = Math.max(...existingIds, 0);
    return `P${String(maxId + 1).padStart(3, '0')}`;
  };
  // Handle adding a new pig
  const handleAddPig = () => {
    if (newPig.name && newPig.pen) {
      const pigWithId = {
        ...newPig,
        id: generatePigId()
      };
      setPigs([...pigs, pigWithId]);
      setNewPig({
        id: '',
        name: '',
        pen: '',
        tagColor: '#22c55e',
        weight: 0,
        birthDate: '',
        gender: 'Male',
        health: 'Healthy'
      });
      setIsAddingPig(false);
    }
  };
  // Handle updating a pig
  const handleUpdatePig = id => {
    const updatedPigs = pigs.map(pig => pig.id === id ? {
      ...newPig,
      id
    } : pig);
    setPigs(updatedPigs);
    setEditingPigId(null);
  };
  // Handle deleting a pig
  const handleDeletePig = id => {
    setPigs(pigs.filter(pig => pig.id !== id));
  };
  // Start editing a pig
  const startEditPig = pig => {
    setEditingPigId(pig.id);
    setNewPig({
      ...pig
    });
  };
  // Cancel editing
  const cancelEdit = () => {
    setEditingPigId(null);
    setNewPig({
      id: '',
      name: '',
      pen: '',
      tagColor: '#22c55e',
      weight: 0,
      birthDate: '',
      gender: 'Male',
      health: 'Healthy'
    });
  };
  // Filter pigs based on selected filters
  const filteredPigs = pigs.filter(pig => {
    return (filters.pen === '' || pig.pen === parseInt(filters.pen)) && (filters.health === '' || pig.health === filters.health) && (filters.search === '' || pig.name.toLowerCase().includes(filters.search.toLowerCase()) || pig.id.toLowerCase().includes(filters.search.toLowerCase()));
  });
  return <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Manage Pigs
        </h3>
        {!isAddingPig && <button className={`flex items-center px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-colors`} onClick={() => setIsAddingPig(true)}>
            <PlusIcon size={16} className="mr-1.5" />
            <span>Add Pig</span>
          </button>}
      </div>
      {/* Filter Section */}
      <div className={`p-4 mb-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'} flex flex-wrap items-center gap-4`}>
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} />
            </div>
            <input type="text" className={`w-full pl-10 pr-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Search by name or ID" value={filters.search} onChange={e => setFilters({
            ...filters,
            search: e.target.value
          })} />
          </div>
        </div>
        <div>
          <select className={`px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={filters.pen} onChange={e => setFilters({
          ...filters,
          pen: e.target.value
        })}>
            <option value="">All Pens</option>
            {pens.map(pen => <option key={pen.id} value={pen.id}>
                {pen.name}
              </option>)}
          </select>
        </div>
        <div>
          <select className={`px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={filters.health} onChange={e => setFilters({
          ...filters,
          health: e.target.value
        })}>
            <option value="">All Health Status</option>
            <option value="Healthy">Healthy</option>
            <option value="Monitoring">Monitoring</option>
            <option value="Treatment">Treatment</option>
          </select>
        </div>
        <button className={`px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`} onClick={() => setFilters({
        pen: '',
        health: '',
        search: ''
      })}>
          Clear Filters
        </button>
      </div>
      {/* Add Pig Form */}
      {isAddingPig && <div className={`p-4 mb-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'}`}>
          <h4 className={`text-md font-medium mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Add New Pig
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Name
              </label>
              <input type="text" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Pig Name" value={newPig.name} onChange={e => setNewPig({
            ...newPig,
            name: e.target.value
          })} />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Pen
              </label>
              <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.pen} onChange={e => setNewPig({
            ...newPig,
            pen: parseInt(e.target.value) || ''
          })}>
                <option value="">Select Pen</option>
                {pens.map(pen => <option key={pen.id} value={pen.id}>
                    {pen.name}
                  </option>)}
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Tag Color
              </label>
              <div className="flex items-center space-x-2">
                <input type="color" className="h-9 w-9 rounded cursor-pointer" value={newPig.tagColor} onChange={e => setNewPig({
              ...newPig,
              tagColor: e.target.value
            })} />
                <input type="text" className={`flex-1 px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.tagColor} onChange={e => setNewPig({
              ...newPig,
              tagColor: e.target.value
            })} />
              </div>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Weight (kg)
              </label>
              <input type="number" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Weight" value={newPig.weight} onChange={e => setNewPig({
            ...newPig,
            weight: parseFloat(e.target.value) || 0
          })} />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Birth Date
              </label>
              <input type="date" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.birthDate} onChange={e => setNewPig({
            ...newPig,
            birthDate: e.target.value
          })} />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Gender
              </label>
              <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.gender} onChange={e => setNewPig({
            ...newPig,
            gender: e.target.value
          })}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Health Status
              </label>
              <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.health} onChange={e => setNewPig({
            ...newPig,
            health: e.target.value
          })}>
                <option value="Healthy">Healthy</option>
                <option value="Monitoring">Monitoring</option>
                <option value="Treatment">Treatment</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'} transition-colors`} onClick={() => setIsAddingPig(false)}>
              Cancel
            </button>
            <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-colors`} onClick={handleAddPig}>
              Add Pig
            </button>
          </div>
        </div>}
      {/* Pigs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPigs.map(pig => <div key={pig.id} className={`rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-white border border-gray-200'} overflow-hidden`}>
            {editingPigId === pig.id ?
        // Edit mode
        <div className="p-4">
                <div className="flex flex-col space-y-3">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name
                    </label>
                    <input type="text" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.name} onChange={e => setNewPig({
                ...newPig,
                name: e.target.value
              })} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Pen
                    </label>
                    <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.pen} onChange={e => setNewPig({
                ...newPig,
                pen: parseInt(e.target.value) || ''
              })}>
                      <option value="">Select Pen</option>
                      {pens.map(pen => <option key={pen.id} value={pen.id}>
                          {pen.name}
                        </option>)}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Tag Color
                    </label>
                    <div className="flex items-center space-x-2">
                      <input type="color" className="h-9 w-9 rounded cursor-pointer" value={newPig.tagColor} onChange={e => setNewPig({
                  ...newPig,
                  tagColor: e.target.value
                })} />
                      <input type="text" className={`flex-1 px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.tagColor} onChange={e => setNewPig({
                  ...newPig,
                  tagColor: e.target.value
                })} />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Weight (kg)
                    </label>
                    <input type="number" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.weight} onChange={e => setNewPig({
                ...newPig,
                weight: parseFloat(e.target.value) || 0
              })} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Health Status
                    </label>
                    <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.health} onChange={e => setNewPig({
                ...newPig,
                health: e.target.value
              })}>
                      <option value="Healthy">Healthy</option>
                      <option value="Monitoring">Monitoring</option>
                      <option value="Treatment">Treatment</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30' : 'bg-green-100 text-green-600 hover:bg-green-200'}`} onClick={() => handleUpdatePig(pig.id)} title="Save">
                    <SaveIcon size={16} />
                  </button>
                  <button className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={cancelEdit} title="Cancel">
                    <XIcon size={16} />
                  </button>
                </div>
              </div> :
        // View mode
        <>
                <div className="h-3" style={{
            backgroundColor: pig.tagColor
          }}></div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        {pig.name}
                      </h4>
                      <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                        <TagIcon size={14} className="mr-1" /> {pig.id}
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${pig.health === 'Healthy' ? theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700' : pig.health === 'Monitoring' ? theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700' : theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'}`}>
                      {pig.health}
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className={`w-4 h-4 mr-2 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                        <div size={12} />
                      </div>
                      <span className="text-sm">
                        Pen:{' '}
                        {pens.find(pen => pen.id === pig.pen)?.name || 'Unknown'}
                      </span>
                    </div>
                    <div className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className={`w-4 h-4 mr-2 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                        <InfoIcon size={12} />
                      </div>
                      <span className="text-sm">Weight: {pig.weight} kg</span>
                    </div>
                    <div className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className={`w-4 h-4 mr-2 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                        <InfoIcon size={12} />
                      </div>
                      <span className="text-sm">Gender: {pig.gender}</span>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-4">
                    <button className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`} onClick={() => startEditPig(pig)} title="Edit">
                      <EditIcon size={16} />
                    </button>
                    <button className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-red-100 text-red-600 hover:bg-red-200'}`} onClick={() => handleDeletePig(pig.id)} title="Delete">
                      <Trash2Icon size={16} />
                    </button>
                  </div>
                </div>
              </>}
          </div>)}
      </div>
      {filteredPigs.length === 0 && <div className={`py-8 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          <AlertCircleIcon size={40} className="mx-auto mb-3 opacity-50" />
          <p className="text-lg font-medium">No pigs found</p>
          <p className="text-sm">Try adjusting your filters or add a new pig</p>
        </div>}
    </div>;
};
// Resources Management Component
const ResourcesManagement = ({
  theme
}) => {
  const [activeResourceTab, setActiveResourceTab] = useState('feed');
  const [resources, setResources] = useState(initialResources);
  const [consumption, setConsumption] = useState(initialConsumption);
  const [pens, setPens] = useState(initialPens);
  // State for adding/editing feed
  const [isAddingFeed, setIsAddingFeed] = useState(false);
  const [editingFeedId, setEditingFeedId] = useState(null);
  const [newFeed, setNewFeed] = useState({
    name: '',
    quantity: 0,
    unit: 'kg',
    lastRestocked: new Date().toISOString().split('T')[0],
    type: ''
  });
  // State for adding/editing water
  const [isAddingWater, setIsAddingWater] = useState(false);
  const [editingWaterId, setEditingWaterId] = useState(null);
  const [newWater, setNewWater] = useState({
    name: '',
    capacity: 0,
    current: 0,
    unit: 'L',
    lastChecked: new Date().toISOString().split('T')[0]
  });
  // State for assigning resources
  const [isAssigning, setIsAssigning] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    date: new Date().toISOString().split('T')[0],
    penId: '',
    feedId: '',
    feedAmount: 0,
    feedUnit: 'kg',
    waterId: '',
    waterAmount: 0,
    waterUnit: 'L'
  });
  // Handle adding feed
  const handleAddFeed = () => {
    if (newFeed.name && newFeed.quantity > 0) {
      const feedWithId = {
        ...newFeed,
        id: resources.feed.length > 0 ? Math.max(...resources.feed.map(f => f.id)) + 1 : 1
      };
      setResources({
        ...resources,
        feed: [...resources.feed, feedWithId]
      });
      setNewFeed({
        name: '',
        quantity: 0,
        unit: 'kg',
        lastRestocked: new Date().toISOString().split('T')[0],
        type: ''
      });
      setIsAddingFeed(false);
    }
  };
  // Handle updating feed
  const handleUpdateFeed = id => {
    const updatedFeed = resources.feed.map(feed => feed.id === id ? {
      ...newFeed,
      id
    } : feed);
    setResources({
      ...resources,
      feed: updatedFeed
    });
    setEditingFeedId(null);
  };
  // Handle deleting feed
  const handleDeleteFeed = id => {
    setResources({
      ...resources,
      feed: resources.feed.filter(feed => feed.id !== id)
    });
  };
  // Start editing feed
  const startEditFeed = feed => {
    setEditingFeedId(feed.id);
    setNewFeed({
      ...feed
    });
  };
  // Cancel editing feed
  const cancelEditFeed = () => {
    setEditingFeedId(null);
    setNewFeed({
      name: '',
      quantity: 0,
      unit: 'kg',
      lastRestocked: new Date().toISOString().split('T')[0],
      type: ''
    });
  };
  // Handle adding water
  const handleAddWater = () => {
    if (newWater.name && newWater.capacity > 0) {
      const waterWithId = {
        ...newWater,
        id: resources.water.length > 0 ? Math.max(...resources.water.map(w => w.id)) + 1 : 1
      };
      setResources({
        ...resources,
        water: [...resources.water, waterWithId]
      });
      setNewWater({
        name: '',
        capacity: 0,
        current: 0,
        unit: 'L',
        lastChecked: new Date().toISOString().split('T')[0]
      });
      setIsAddingWater(false);
    }
  };
  // Handle updating water
  const handleUpdateWater = id => {
    const updatedWater = resources.water.map(water => water.id === id ? {
      ...newWater,
      id
    } : water);
    setResources({
      ...resources,
      water: updatedWater
    });
    setEditingWaterId(null);
  };
  // Handle deleting water
  const handleDeleteWater = id => {
    setResources({
      ...resources,
      water: resources.water.filter(water => water.id !== id)
    });
  };
  // Start editing water
  const startEditWater = water => {
    setEditingWaterId(water.id);
    setNewWater({
      ...water
    });
  };
  // Cancel editing water
  const cancelEditWater = () => {
    setEditingWaterId(null);
    setNewWater({
      name: '',
      capacity: 0,
      current: 0,
      unit: 'L',
      lastChecked: new Date().toISOString().split('T')[0]
    });
  };
  // Handle assigning resources
  const handleAssignResources = () => {
    if (newAssignment.penId && (newAssignment.feedId && newAssignment.feedAmount > 0 || newAssignment.waterId && newAssignment.waterAmount > 0)) {
      const assignmentWithId = {
        ...newAssignment,
        id: consumption.length > 0 ? Math.max(...consumption.map(c => c.id)) + 1 : 1
      };
      // Update consumption records
      setConsumption([...consumption, assignmentWithId]);
      // Update resource quantities
      if (newAssignment.feedId && newAssignment.feedAmount > 0) {
        const updatedFeed = resources.feed.map(feed => {
          if (feed.id === parseInt(newAssignment.feedId)) {
            return {
              ...feed,
              quantity: Math.max(0, feed.quantity - newAssignment.feedAmount)
            };
          }
          return feed;
        });
        setResources({
          ...resources,
          feed: updatedFeed
        });
      }
      if (newAssignment.waterId && newAssignment.waterAmount > 0) {
        const updatedWater = resources.water.map(water => {
          if (water.id === parseInt(newAssignment.waterId)) {
            return {
              ...water,
              current: Math.max(0, water.current - newAssignment.waterAmount)
            };
          }
          return water;
        });
        setResources({
          ...resources,
          water: updatedWater
        });
      }
      // Reset form
      setNewAssignment({
        date: new Date().toISOString().split('T')[0],
        penId: '',
        feedId: '',
        feedAmount: 0,
        feedUnit: 'kg',
        waterId: '',
        waterAmount: 0,
        waterUnit: 'L'
      });
      setIsAssigning(false);
    }
  };
  return <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Manage Resources
        </h3>
        <div className="flex space-x-2">
          <button className={`px-3 py-1.5 text-sm rounded-lg ${activeResourceTab === 'feed' ? theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-600 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} transition-colors`} onClick={() => setActiveResourceTab('feed')}>
            <span>Feed</span>
          </button>
          <button className={`px-3 py-1.5 text-sm rounded-lg ${activeResourceTab === 'water' ? theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} transition-colors`} onClick={() => setActiveResourceTab('water')}>
            <span>Water</span>
          </button>
          <button className={`px-3 py-1.5 text-sm rounded-lg ${activeResourceTab === 'assignment' ? theme === 'dark' ? 'bg-purple-600 text-white' : 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} transition-colors`} onClick={() => setActiveResourceTab('assignment')}>
            <span>Usage</span>
          </button>
        </div>
      </div>
      {/* Feed Management */}
      {activeResourceTab === 'feed' && <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className={`text-md font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Feed Stock
            </h4>
            {!isAddingFeed && <button className={`flex items-center px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-colors`} onClick={() => setIsAddingFeed(true)}>
                <PlusIcon size={16} className="mr-1.5" />
                <span>Add Feed</span>
              </button>}
          </div>
          {/* Add Feed Form */}
          {isAddingFeed && <div className={`p-4 mb-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'}`}>
              <h4 className={`text-md font-medium mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Add New Feed
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Feed Name
                  </label>
                  <input type="text" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Feed Name" value={newFeed.name} onChange={e => setNewFeed({
              ...newFeed,
              name: e.target.value
            })} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Quantity
                  </label>
                  <div className="flex">
                    <input type="number" className={`flex-1 px-3 py-2 rounded-l-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Quantity" value={newFeed.quantity} onChange={e => setNewFeed({
                ...newFeed,
                quantity: parseFloat(e.target.value) || 0
              })} />
                    <select className={`px-3 py-2 rounded-r-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100 border-l-0' : 'bg-white border-gray-300 text-gray-900 border-l-0'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newFeed.unit} onChange={e => setNewFeed({
                ...newFeed,
                unit: e.target.value
              })}>
                      <option value="kg">kg</option>
                      <option value="lb">lb</option>
                      <option value="ton">ton</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Feed Type
                  </label>
                  <input type="text" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Feed Type (e.g., Starter, Growth)" value={newFeed.type} onChange={e => setNewFeed({
              ...newFeed,
              type: e.target.value
            })} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Last Restocked
                  </label>
                  <input type="date" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newFeed.lastRestocked} onChange={e => setNewFeed({
              ...newFeed,
              lastRestocked: e.target.value
            })} />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'} transition-colors`} onClick={() => setIsAddingFeed(false)}>
                  Cancel
                </button>
                <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-colors`} onClick={handleAddFeed}>
                  Add Feed
                </button>
              </div>
            </div>}
          {/* Feed List */}
          <div className="overflow-x-auto">
            <table className={`min-w-full ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <thead>
                <tr className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Quantity</th>
                  <th className="text-left py-3 px-4">Last Restocked</th>
                  <th className="text-right py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {resources.feed.map(feed => <tr key={feed.id} className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                    {editingFeedId === feed.id ?
              // Edit mode
              <>
                        <td className="py-3 px-4">
                          <input type="text" className={`w-full px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newFeed.name} onChange={e => setNewFeed({
                    ...newFeed,
                    name: e.target.value
                  })} />
                        </td>
                        <td className="py-3 px-4">
                          <input type="text" className={`w-full px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newFeed.type} onChange={e => setNewFeed({
                    ...newFeed,
                    type: e.target.value
                  })} />
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex">
                            <input type="number" className={`w-20 px-2 py-1 rounded-l ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newFeed.quantity} onChange={e => setNewFeed({
                      ...newFeed,
                      quantity: parseFloat(e.target.value) || 0
                    })} />
                            <select className={`px-2 py-1 rounded-r ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100 border-l-0' : 'bg-white border-gray-300 text-gray-900 border-l-0'} border`} value={newFeed.unit} onChange={e => setNewFeed({
                      ...newFeed,
                      unit: e.target.value
                    })}>
                              <option value="kg">kg</option>
                              <option value="lb">lb</option>
                              <option value="ton">ton</option>
                            </select>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <input type="date" className={`w-full px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newFeed.lastRestocked} onChange={e => setNewFeed({
                    ...newFeed,
                    lastRestocked: e.target.value
                  })} />
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30' : 'bg-green-100 text-green-600 hover:bg-green-200'}`} onClick={() => handleUpdateFeed(feed.id)} title="Save">
                            <SaveIcon size={16} />
                          </button>
                          <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={cancelEditFeed} title="Cancel">
                            <XIcon size={16} />
                          </button>
                        </td>
                      </> :
              // View mode
              <>
                        <td className="py-3 px-4">{feed.name}</td>
                        <td className="py-3 px-4">{feed.type}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${feed.quantity < 50 ? theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700' : feed.quantity < 200 ? theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700' : theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}>
                            {feed.quantity} {feed.unit}
                          </span>
                        </td>
                        <td className="py-3 px-4">{feed.lastRestocked}</td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`} onClick={() => startEditFeed(feed)} title="Edit">
                            <EditIcon size={16} />
                          </button>
                          <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-red-100 text-red-600 hover:bg-red-200'}`} onClick={() => handleDeleteFeed(feed.id)} title="Delete">
                            <Trash2Icon size={16} />
                          </button>
                        </td>
                      </>}
                  </tr>)}
              </tbody>
            </table>
          </div>
          {resources.feed.length === 0 && <div className={`py-8 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              <PackageIcon size={40} className="mx-auto mb-3 opacity-50" />
              <p className="text-lg font-medium">No feed stock found</p>
              <p className="text-sm">Add feed stock to get started</p>
            </div>}
        </div>}
      {/* Water Management */}
      {activeResourceTab === 'water' && <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className={`text-md font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Water Supply
            </h4>
            {!isAddingWater && <button className={`flex items-center px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`} onClick={() => setIsAddingWater(true)}>
                <PlusIcon size={16} className="mr-1.5" />
                <span>Add Water Supply</span>
              </button>}
          </div>
          {/* Add Water Form */}
          {isAddingWater && <div className={`p-4 mb-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'}`}>
              <h4 className={`text-md font-medium mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Add New Water Supply
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input type="text" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-blue-500`} placeholder="Water Supply Name" value={newWater.name} onChange={e => setNewWater({
              ...newWater,
              name: e.target.value
            })} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Capacity
                  </label>
                  <div className="flex">
                    <input type="number" className={`flex-1 px-3 py-2 rounded-l-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-blue-500`} placeholder="Capacity" value={newWater.capacity} onChange={e => setNewWater({
                ...newWater,
                capacity: parseFloat(e.target.value) || 0
              })} />
                    <select className={`px-3 py-2 rounded-r-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100 border-l-0' : 'bg-white border-gray-300 text-gray-900 border-l-0'} border focus:outline-none focus:ring-1 focus:ring-blue-500`} value={newWater.unit} onChange={e => setNewWater({
                ...newWater,
                unit: e.target.value
              })}>
                      <option value="L">L</option>
                      <option value="gal">gal</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Current Level
                  </label>
                  <div className="flex">
                    <input type="number" className={`flex-1 px-3 py-2 rounded-l-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-blue-500`} placeholder="Current Level" value={newWater.current} onChange={e => setNewWater({
                ...newWater,
                current: parseFloat(e.target.value) || 0
              })} />
                    <div className={`px-3 py-2 rounded-r-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100 border-l-0' : 'bg-white border-gray-300 text-gray-900 border-l-0'} border`}>
                      {newWater.unit}
                    </div>
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Last Checked
                  </label>
                  <input type="date" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-blue-500`} value={newWater.lastChecked} onChange={e => setNewWater({
              ...newWater,
              lastChecked: e.target.value
            })} />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'} transition-colors`} onClick={() => setIsAddingWater(false)}>
                  Cancel
                </button>
                <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`} onClick={handleAddWater}>
                  Add Water Supply
                </button>
              </div>
            </div>}
          {/* Water Supply List */}
          <div className="overflow-x-auto">
            <table className={`min-w-full ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <thead>
                <tr className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Capacity</th>
                  <th className="text-left py-3 px-4">Current Level</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Last Checked</th>
                  <th className="text-right py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {resources.water.map(water => <tr key={water.id} className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                    {editingWaterId === water.id ?
              // Edit mode
              <>
                        <td className="py-3 px-4">
                          <input type="text" className={`w-full px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newWater.name} onChange={e => setNewWater({
                    ...newWater,
                    name: e.target.value
                  })} />
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex">
                            <input type="number" className={`w-20 px-2 py-1 rounded-l ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newWater.capacity} onChange={e => setNewWater({
                      ...newWater,
                      capacity: parseFloat(e.target.value) || 0
                    })} />
                            <select className={`px-2 py-1 rounded-r ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100 border-l-0' : 'bg-white border-gray-300 text-gray-900 border-l-0'} border`} value={newWater.unit} onChange={e => setNewWater({
                      ...newWater,
                      unit: e.target.value
                    })}>
                              <option value="L">L</option>
                              <option value="gal">gal</option>
                            </select>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex">
                            <input type="number" className={`w-20 px-2 py-1 rounded-l ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newWater.current} onChange={e => setNewWater({
                      ...newWater,
                      current: parseFloat(e.target.value) || 0
                    })} />
                            <div className={`px-2 py-1 rounded-r ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100 border-l-0' : 'bg-white border-gray-300 text-gray-900 border-l-0'} border`}>
                              {newWater.unit}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">-</td>
                        <td className="py-3 px-4">
                          <input type="date" className={`w-full px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border`} value={newWater.lastChecked} onChange={e => setNewWater({
                    ...newWater,
                    lastChecked: e.target.value
                  })} />
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30' : 'bg-green-100 text-green-600 hover:bg-green-200'}`} onClick={() => handleUpdateWater(water.id)} title="Save">
                            <SaveIcon size={16} />
                          </button>
                          <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={cancelEditWater} title="Cancel">
                            <XIcon size={16} />
                          </button>
                        </td>
                      </> :
              // View mode
              <>
                        <td className="py-3 px-4">{water.name}</td>
                        <td className="py-3 px-4">
                          {water.capacity} {water.unit}
                        </td>
                        <td className="py-3 px-4">
                          {water.current} {water.unit}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className={`w-20 h-3 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} mr-2`}>
                              <div className={`h-full rounded-full ${water.current / water.capacity * 100 < 25 ? 'bg-red-500' : water.current / water.capacity * 100 < 50 ? 'bg-yellow-500' : 'bg-blue-500'}`} style={{
                        width: `${Math.min(water.current / water.capacity * 100, 100)}%`
                      }}></div>
                            </div>
                            <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                              {Math.round(water.current / water.capacity * 100)}
                              %
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{water.lastChecked}</td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`} onClick={() => startEditWater(water)} title="Edit">
                            <EditIcon size={16} />
                          </button>
                          <button className={`p-1.5 rounded-lg ${theme === 'dark' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-red-100 text-red-600 hover:bg-red-200'}`} onClick={() => handleDeleteWater(water.id)} title="Delete">
                            <Trash2Icon size={16} />
                          </button>
                        </td>
                      </>}
                  </tr>)}
              </tbody>
            </table>
          </div>
          {resources.water.length === 0 && <div className={`py-8 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              <DropletIcon size={40} className="mx-auto mb-3 opacity-50" />
              <p className="text-lg font-medium">No water supply found</p>
              <p className="text-sm">Add water supply to get started</p>
            </div>}
        </div>}
      {/* Resource Assignment */}
      {activeResourceTab === 'assignment' && <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className={`text-md font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Resource Usage
            </h4>
            {!isAssigning && <button className={`flex items-center px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-600 text-white hover:bg-purple-700'} transition-colors`} onClick={() => setIsAssigning(true)}>
                <PlusIcon size={16} className="mr-1.5" />
                <span>Assign Resources</span>
              </button>}
          </div>
          {/* Assign Resources Form */}
          {isAssigning && <div className={`p-4 mb-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'}`}>
              <h4 className={`text-md font-medium mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Assign Resources to Pen
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Date
                  </label>
                  <input type="date" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-purple-500`} value={newAssignment.date} onChange={e => setNewAssignment({
              ...newAssignment,
              date: e.target.value
            })} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Pen
                  </label>
                  <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-purple-500`} value={newAssignment.penId} onChange={e => setNewAssignment({
              ...newAssignment,
              penId: parseInt(e.target.value) || ''
            })}>
                    <option value="">Select Pen</option>
                    {pens.map(pen => <option key={pen.id} value={pen.id}>
                        {pen.name} ({pen.occupied} pigs)
                      </option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                {/* Feed Assignment */}
                <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200'}`}>
                  <h5 className={`text-sm font-medium mb-2 flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <PackageIcon size={16} className="mr-1.5" />
                    Feed Assignment
                  </h5>
                  <div className="space-y-3">
                    <div>
                      <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Feed Type
                      </label>
                      <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newAssignment.feedId} onChange={e => setNewAssignment({
                  ...newAssignment,
                  feedId: parseInt(e.target.value) || ''
                })}>
                        <option value="">Select Feed</option>
                        {resources.feed.map(feed => <option key={feed.id} value={feed.id}>
                            {feed.name} ({feed.quantity} {feed.unit} available)
                          </option>)}
                      </select>
                    </div>
                    <div>
                      <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Amount
                      </label>
                      <div className="flex">
                        <input type="number" className={`flex-1 px-3 py-2 rounded-l-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} placeholder="Amount" value={newAssignment.feedAmount} onChange={e => setNewAssignment({
                    ...newAssignment,
                    feedAmount: parseFloat(e.target.value) || 0
                  })} />
                        <select className={`px-3 py-2 rounded-r-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100 border-l-0' : 'bg-white border-gray-300 text-gray-900 border-l-0'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newAssignment.feedUnit} onChange={e => setNewAssignment({
                    ...newAssignment,
                    feedUnit: e.target.value
                  })}>
                          <option value="kg">kg</option>
                          <option value="lb">lb</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Water Assignment */}
                <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white border border-gray-200'}`}>
                  <h5 className={`text-sm font-medium mb-2 flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <DropletIcon size={16} className="mr-1.5" />
                    Water Assignment
                  </h5>
                  <div className="space-y-3">
                    <div>
                      <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Water Source
                      </label>
                      <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-blue-500`} value={newAssignment.waterId} onChange={e => setNewAssignment({
                  ...newAssignment,
                  waterId: parseInt(e.target.value) || ''
                })}>
                        <option value="">Select Water Source</option>
                        {resources.water.map(water => <option key={water.id} value={water.id}>
                            {water.name} ({water.current} {water.unit}{' '}
                            available)
                          </option>)}
                      </select>
                    </div>
                    <div>
                      <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Amount
                      </label>
                      <div className="flex">
                        <input type="number" className={`flex-1 px-3 py-2 rounded-l-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-blue-500`} placeholder="Amount" value={newAssignment.waterAmount} onChange={e => setNewAssignment({
                    ...newAssignment,
                    waterAmount: parseFloat(e.target.value) || 0
                  })} />
                        <select className={`px-3 py-2 rounded-r-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100 border-l-0' : 'bg-white border-gray-300 text-gray-900 border-l-0'} border focus:outline-none focus:ring-1 focus:ring-blue-500`} value={newAssignment.waterUnit} onChange={e => setNewAssignment({
                    ...newAssignment,
                    waterUnit: e.target.value
                  })}>
                          <option value="L">L</option>
                          <option value="gal">gal</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'} transition-colors`} onClick={() => setIsAssigning(false)}>
                  Cancel
                </button>
                <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-600 text-white hover:bg-purple-700'} transition-colors`} onClick={handleAssignResources}>
                  Assign Resources
                </button>
              </div>
            </div>}
          {/* Resource Usage History */}
          <div className="overflow-x-auto">
            <table className={`min-w-full ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <thead>
                <tr className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Pen</th>
                  <th className="text-left py-3 px-4">Feed</th>
                  <th className="text-left py-3 px-4">Feed Amount</th>
                  <th className="text-left py-3 px-4">Water</th>
                  <th className="text-left py-3 px-4">Water Amount</th>
                </tr>
              </thead>
              <tbody>
                {consumption.map(record => <tr key={record.id} className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                    <td className="py-3 px-4">{record.date}</td>
                    <td className="py-3 px-4">
                      {pens.find(pen => pen.id === record.penId)?.name || 'Unknown'}
                    </td>
                    <td className="py-3 px-4">
                      {resources.feed.find(feed => feed.id === record.feedId)?.name || 'Unknown'}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}>
                        {record.feedAmount} {record.feedUnit}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {resources.water.find(water => water.id === record.waterId)?.name || 'Unknown'}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        {record.waterAmount} {record.waterUnit}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          {consumption.length === 0 && <div className={`py-8 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              <ClipboardListIcon size={40} className="mx-auto mb-3 opacity-50" />
              <p className="text-lg font-medium">No usage records found</p>
              <p className="text-sm">Assign resources to pens to track usage</p>
            </div>}
        </div>}
    </div>;
};
export default PenManagement;