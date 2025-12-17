import React, { useState, Component } from 'react';
import { PlusIcon, Trash2Icon, EditIcon, SaveIcon, XIcon, PackageIcon, DropletIcon, LayoutGridIcon, ClipboardListIcon, SearchIcon, TagIcon, AlertCircleIcon, TrendingUpIcon, DollarSignIcon, CalendarIcon, UserIcon, BrainCircuitIcon, LineChartIcon, ActivityIcon, ThermometerIcon, DropletIcon as WaterIcon, PackageIcon as FeedIcon, AlertTriangleIcon, CheckCircleIcon, InfoIcon, XCircleIcon, TrendingDownIcon, CheckIcon, MoveIcon, UsersIcon, ShieldAlertIcon, ArrowRightIcon, ClockIcon, SyringeIcon, ScaleIcon, MapPinIcon, ShoppingCartIcon, CheckCircle2Icon, Sparkles } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
// Mock data for pens, pigs, feed, and water
const initialPens = [{
  id: 1,
  name: 'Pen A',
  capacity: 15,
  occupied: 14,
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
  health: 'Healthy',
  status: 'Existing',
  buyer: null,
  healthScore: 95,
  weightHistory: [{
    date: '2024-01-01',
    weight: 63
  }, {
    date: '2024-01-15',
    weight: 68
  }, {
    date: '2024-02-01',
    weight: 73
  }, {
    date: '2024-02-15',
    weight: 78
  }],
  activityTimeline: [{
    date: '2023-06-15',
    type: 'added',
    description: 'Added to farm',
    icon: 'plus'
  }, {
    date: '2024-01-01',
    type: 'weight',
    description: 'Weight recorded: 63 kg',
    icon: 'scale'
  }, {
    date: '2024-01-15',
    type: 'health',
    description: 'Health check: Healthy',
    icon: 'check'
  }, {
    date: '2024-02-01',
    type: 'weight',
    description: 'Weight recorded: 73 kg',
    icon: 'scale'
  }, {
    date: '2024-02-15',
    type: 'weight',
    description: 'Weight recorded: 78 kg',
    icon: 'scale'
  }]
}, {
  id: 'P002',
  name: 'Hamlet',
  pen: 1,
  tagColor: '#3b82f6',
  weight: 82,
  birthDate: '2023-06-10',
  gender: 'Male',
  health: 'Healthy',
  status: 'For Sale',
  buyer: null,
  healthScore: 92,
  weightHistory: [{
    date: '2024-01-01',
    weight: 67
  }, {
    date: '2024-01-15',
    weight: 72
  }, {
    date: '2024-02-01',
    weight: 77
  }, {
    date: '2024-02-15',
    weight: 82
  }],
  activityTimeline: [{
    date: '2023-06-10',
    type: 'added',
    description: 'Added to farm',
    icon: 'plus'
  }, {
    date: '2024-01-01',
    type: 'weight',
    description: 'Weight recorded: 67 kg',
    icon: 'scale'
  }, {
    date: '2024-02-01',
    type: 'weight',
    description: 'Weight recorded: 77 kg',
    icon: 'scale'
  }, {
    date: '2024-02-10',
    type: 'status',
    description: 'Marked as For Sale',
    icon: 'tag'
  }, {
    date: '2024-02-15',
    type: 'weight',
    description: 'Weight recorded: 82 kg',
    icon: 'scale'
  }]
}, {
  id: 'P003',
  name: 'Peppa',
  pen: 2,
  tagColor: '#ec4899',
  weight: 65,
  birthDate: '2023-07-22',
  gender: 'Female',
  health: 'Healthy',
  status: 'Reserved',
  buyer: {
    name: 'John Smith',
    pickupDate: '2024-02-15',
    agreedPrice: 8500
  },
  healthScore: 88,
  weightHistory: [{
    date: '2024-01-01',
    weight: 50
  }, {
    date: '2024-01-15',
    weight: 55
  }, {
    date: '2024-02-01',
    weight: 60
  }, {
    date: '2024-02-15',
    weight: 65
  }],
  activityTimeline: [{
    date: '2023-07-22',
    type: 'added',
    description: 'Added to farm',
    icon: 'plus'
  }, {
    date: '2024-01-01',
    type: 'weight',
    description: 'Weight recorded: 50 kg',
    icon: 'scale'
  }, {
    date: '2024-02-01',
    type: 'weight',
    description: 'Weight recorded: 60 kg',
    icon: 'scale'
  }, {
    date: '2024-02-05',
    type: 'buyer',
    description: 'Reserved by John Smith',
    icon: 'user'
  }, {
    date: '2024-02-15',
    type: 'weight',
    description: 'Weight recorded: 65 kg',
    icon: 'scale'
  }]
}, {
  id: 'P004',
  name: 'Wilbur',
  pen: 2,
  tagColor: '#f59e0b',
  weight: 70,
  birthDate: '2023-07-05',
  gender: 'Male',
  health: 'Monitoring',
  status: 'Existing',
  buyer: null,
  healthScore: 72,
  weightHistory: [{
    date: '2024-01-01',
    weight: 68
  }, {
    date: '2024-01-15',
    weight: 69
  }, {
    date: '2024-02-01',
    weight: 68
  }, {
    date: '2024-02-15',
    weight: 70
  }],
  activityTimeline: [{
    date: '2023-07-05',
    type: 'added',
    description: 'Added to farm',
    icon: 'plus'
  }, {
    date: '2024-01-01',
    type: 'weight',
    description: 'Weight recorded: 68 kg',
    icon: 'scale'
  }, {
    date: '2024-01-20',
    type: 'health',
    description: 'Health check: Minor concern',
    icon: 'alert'
  }, {
    date: '2024-02-01',
    type: 'weight',
    description: 'Weight recorded: 68 kg (no gain)',
    icon: 'scale'
  }, {
    date: '2024-02-05',
    type: 'treatment',
    description: 'Vitamin supplement administered',
    icon: 'syringe'
  }, {
    date: '2024-02-15',
    type: 'weight',
    description: 'Weight recorded: 70 kg',
    icon: 'scale'
  }]
}, {
  id: 'P005',
  name: 'Porky',
  pen: 3,
  tagColor: '#8b5cf6',
  weight: 85,
  birthDate: '2023-05-30',
  gender: 'Male',
  health: 'Healthy',
  status: 'For Sale',
  buyer: null,
  healthScore: 96,
  weightHistory: [{
    date: '2024-01-01',
    weight: 70
  }, {
    date: '2024-01-15',
    weight: 75
  }, {
    date: '2024-02-01',
    weight: 80
  }, {
    date: '2024-02-15',
    weight: 85
  }],
  activityTimeline: [{
    date: '2023-05-30',
    type: 'added',
    description: 'Added to farm',
    icon: 'plus'
  }, {
    date: '2024-01-01',
    type: 'weight',
    description: 'Weight recorded: 70 kg',
    icon: 'scale'
  }, {
    date: '2024-02-01',
    type: 'weight',
    description: 'Weight recorded: 80 kg',
    icon: 'scale'
  }, {
    date: '2024-02-10',
    type: 'status',
    description: 'Marked as For Sale',
    icon: 'tag'
  }, {
    date: '2024-02-15',
    type: 'weight',
    description: 'Weight recorded: 85 kg',
    icon: 'scale'
  }]
}, {
  id: 'P006',
  name: 'Babe',
  pen: 3,
  tagColor: '#10b981',
  weight: 45,
  birthDate: '2023-09-12',
  gender: 'Female',
  health: 'Healthy',
  status: 'New',
  buyer: null,
  healthScore: 90,
  weightHistory: [{
    date: '2024-01-01',
    weight: 30
  }, {
    date: '2024-01-15',
    weight: 35
  }, {
    date: '2024-02-01',
    weight: 40
  }, {
    date: '2024-02-15',
    weight: 45
  }],
  activityTimeline: [{
    date: '2023-09-12',
    type: 'added',
    description: 'Added to farm',
    icon: 'plus'
  }, {
    date: '2024-01-01',
    type: 'weight',
    description: 'Weight recorded: 30 kg',
    icon: 'scale'
  }, {
    date: '2024-01-15',
    type: 'health',
    description: 'Health check: Healthy',
    icon: 'check'
  }, {
    date: '2024-02-01',
    type: 'weight',
    description: 'Weight recorded: 40 kg',
    icon: 'scale'
  }, {
    date: '2024-02-15',
    type: 'weight',
    description: 'Weight recorded: 45 kg',
    icon: 'scale'
  }]
}, {
  id: 'P007',
  name: 'Napoleon',
  pen: 4,
  tagColor: '#ef4444',
  weight: 92,
  birthDate: '2023-04-20',
  gender: 'Male',
  health: 'Healthy',
  status: 'Sold',
  buyer: {
    name: 'Maria Garcia',
    pickupDate: '2024-01-10',
    agreedPrice: 9200
  },
  healthScore: 98,
  weightHistory: [{
    date: '2024-01-01',
    weight: 88
  }, {
    date: '2024-01-05',
    weight: 90
  }, {
    date: '2024-01-08',
    weight: 92
  }],
  activityTimeline: [{
    date: '2023-04-20',
    type: 'added',
    description: 'Added to farm',
    icon: 'plus'
  }, {
    date: '2024-01-01',
    type: 'weight',
    description: 'Weight recorded: 88 kg',
    icon: 'scale'
  }, {
    date: '2024-01-05',
    type: 'buyer',
    description: 'Reserved by Maria Garcia',
    icon: 'user'
  }, {
    date: '2024-01-08',
    type: 'weight',
    description: 'Weight recorded: 92 kg',
    icon: 'scale'
  }, {
    date: '2024-01-10',
    type: 'sale',
    description: 'Sale completed - ₱9,200',
    icon: 'check'
  }]
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
// Sparkline Chart Component
const SparklineChart = ({
  data,
  color = '#22c55e',
  height = 40
}) => {
  return <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }}>
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="weight" stroke={color} strokeWidth={2} fill={`url(#gradient-${color})`} dot={false} />
      </AreaChart>
    </ResponsiveContainer>;
};
// Health Score Badge Component
const HealthScoreBadge = ({
  score,
  theme
}) => {
  const getScoreColor = () => {
    if (score >= 90) return theme === 'dark' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-700 border-green-300';
    if (score >= 75) return theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-yellow-100 text-yellow-700 border-yellow-300';
    return theme === 'dark' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-100 text-red-700 border-red-300';
  };
  return <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getScoreColor()}`}>
      <Sparkles size={12} className="mr-1" />
      {score}
    </div>;
};
// Pen Management Component
const PenManagement = ({
  theme
}) => {
  const [activeTab, setActiveTab] = useState('pigs');
  const [pigs, setPigs] = useState(initialPigs);
  const [pens, setPens] = useState(initialPens);
  const [selectedPig, setSelectedPig] = useState(null);
  const [showPigModal, setShowPigModal] = useState(false);
  const [selectedPigs, setSelectedPigs] = useState([]);
  const [showBatchActions, setShowBatchActions] = useState(false);
  const tabItems = [{
    id: 'pens',
    name: 'Pens',
    icon: <LayoutGridIcon size={18} />
  }, {
    id: 'pigs',
    name: 'Pigs',
    icon: <ActivityIcon size={18} />
  }, {
    id: 'resources',
    name: 'Resources',
    icon: <ClipboardListIcon size={18} />
  }, {
    id: 'ai-insights',
    name: 'AI Insights',
    icon: <BrainCircuitIcon size={18} />
  }];
  return <div className="mb-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Pen Management
        </h2>
      </div>

      {/* Tabs */}
      <div className={`${theme === 'dark' ? 'bg-gray-800/40 backdrop-blur-xl border-gray-700/50' : 'bg-white backdrop-blur-xl border-gray-200/70'} rounded-xl shadow-lg overflow-hidden border transition-colors`}>
        <div className={`flex border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} overflow-x-auto`}>
          {tabItems.map(tab => <button key={tab.id} className={`flex items-center px-6 py-4 whitespace-nowrap transition-all ${activeTab === tab.id ? theme === 'dark' ? 'text-green-400 border-b-2 border-green-500 bg-green-500/5' : 'text-green-600 border-b-2 border-green-500 bg-green-50' : theme === 'dark' ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`} onClick={() => setActiveTab(tab.id)}>
              <span className={`mr-2 ${activeTab === tab.id ? theme === 'dark' ? 'text-green-400' : 'text-green-600' : theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                {tab.icon}
              </span>
              {tab.name}
            </button>)}
        </div>

        <div className="p-6">
          {activeTab === 'pens' && <PensManagement theme={theme} pens={pens} setPens={setPens} pigs={pigs} />}
          {activeTab === 'pigs' && <PigsManagement theme={theme} pigs={pigs} setPigs={setPigs} pens={pens} setSelectedPig={setSelectedPig} setShowPigModal={setShowPigModal} selectedPigs={selectedPigs} setSelectedPigs={setSelectedPigs} showBatchActions={showBatchActions} setShowBatchActions={setShowBatchActions} />}
          {activeTab === 'resources' && <ResourcesManagement theme={theme} />}
          {activeTab === 'ai-insights' && <AIInsights theme={theme} pigs={pigs} pens={pens} />}
        </div>
      </div>

      {/* Pig Details Modal */}
      {showPigModal && selectedPig && <PigDetailsModal theme={theme} pig={selectedPig} pigs={pigs} setPigs={setPigs} pens={pens} onClose={() => {
      setShowPigModal(false);
      setSelectedPig(null);
    }} />}

      {/* Batch Actions Modal */}
      {showBatchActions && selectedPigs.length > 0 && <BatchActionsModal theme={theme} selectedPigs={selectedPigs} pigs={pigs} setPigs={setPigs} pens={pens} onClose={() => {
      setShowBatchActions(false);
      setSelectedPigs([]);
    }} />}
    </div>;
};
// Enhanced Pens Management Component with Capacity Warnings
const PensManagement = ({
  theme,
  pens,
  setPens,
  pigs
}) => {
  const [isAddingPen, setIsAddingPen] = useState(false);
  const [editingPenId, setEditingPenId] = useState(null);
  const [newPen, setNewPen] = useState({
    name: '',
    capacity: 0,
    occupied: 0,
    location: ''
  });
  const getPenUtilization = pen => {
    return pen.occupied / pen.capacity * 100;
  };
  const getPenWarning = pen => {
    const utilization = getPenUtilization(pen);
    if (utilization >= 95) return {
      level: 'critical',
      message: 'Critical overcrowding!'
    };
    if (utilization >= 85) return {
      level: 'warning',
      message: 'Near capacity'
    };
    return null;
  };
  const getSuggestedMoves = pen => {
    const utilization = getPenUtilization(pen);
    if (utilization < 85) return null;
    const pigsToMove = Math.ceil((utilization - 75) / 100 * pen.capacity);
    const availablePens = pens.filter(p => p.id !== pen.id && getPenUtilization(p) < 75);
    if (availablePens.length === 0) return null;
    return {
      count: pigsToMove,
      targetPen: availablePens[0]
    };
  };
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

      {/* Pens Grid with Capacity Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pens.map(pen => {
        const utilization = getPenUtilization(pen);
        const warning = getPenWarning(pen);
        const suggestion = getSuggestedMoves(pen);
        return <div key={pen.id} className={`rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border-gray-700/50' : 'bg-white border-gray-200'} border overflow-hidden transition-all`}>
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      {pen.name}
                    </h4>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} flex items-center mt-1`}>
                      <MapPinIcon size={14} className="mr-1" /> {pen.location}
                    </div>
                  </div>
                  {warning && <div className={`px-2 py-1 rounded-full text-xs font-medium ${warning.level === 'critical' ? theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700' : theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`}>
                      <AlertTriangleIcon size={12} className="inline mr-1" />
                      {warning.message}
                    </div>}
                </div>

                {/* Capacity Bar */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Capacity
                    </span>
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {pen.occupied} / {pen.capacity}
                    </span>
                  </div>
                  <div className={`w-full h-3 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                    <div className={`h-full transition-all ${utilization >= 95 ? 'bg-red-500' : utilization >= 85 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{
                  width: `${Math.min(utilization, 100)}%`
                }} />
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                    {utilization.toFixed(0)}% utilized
                  </div>
                </div>

                {/* Suggestion */}
                {suggestion && <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-blue-900/20 border border-blue-700/30' : 'bg-blue-50 border border-blue-200'} mb-3`}>
                    <div className="flex items-start">
                      <InfoIcon size={16} className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mr-2 mt-0.5 flex-shrink-0`} />
                      <div>
                        <div className={`text-xs font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'} mb-1`}>
                          Suggestion
                        </div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>
                          Move {suggestion.count} pig
                          {suggestion.count > 1 ? 's' : ''} to{' '}
                          {suggestion.targetPen.name}
                        </div>
                      </div>
                    </div>
                  </div>}

                <div className="flex justify-end space-x-2">
                  <button className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-colors`} onClick={() => startEditPen(pen)} title="Edit">
                    <EditIcon size={16} />
                  </button>
                  <button className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-red-100 text-red-600 hover:bg-red-200'} transition-colors`} onClick={() => handleDeletePen(pen.id)} title="Delete">
                    <Trash2Icon size={16} />
                  </button>
                </div>
              </div>
            </div>;
      })}
      </div>
    </div>;
};
// Enhanced Pigs Management Component with Batch Actions and Micro Charts
const PigsManagement = ({
  theme,
  pigs,
  setPigs,
  pens,
  setSelectedPig,
  setShowPigModal,
  selectedPigs,
  setSelectedPigs,
  showBatchActions,
  setShowBatchActions
}) => {
  const [isAddingPig, setIsAddingPig] = useState(false);
  const [newPig, setNewPig] = useState({
    id: '',
    name: '',
    pen: '',
    tagColor: '#22c55e',
    weight: 0,
    birthDate: '',
    gender: 'Male',
    health: 'Healthy',
    status: 'New',
    buyer: null,
    healthScore: 90,
    weightHistory: [],
    activityTimeline: []
  });
  const [filters, setFilters] = useState({
    pen: '',
    health: '',
    status: '',
    buyerStatus: '',
    search: ''
  });
  // Calculate statistics
  const stats = {
    total: pigs.length,
    new: pigs.filter(p => p.status === 'New').length,
    forSale: pigs.filter(p => p.status === 'For Sale').length,
    reserved: pigs.filter(p => p.status === 'Reserved').length,
    soldThisMonth: pigs.filter(p => p.status === 'Sold').length,
    aiPredicted: pigs.filter(p => p.weight >= 80 && p.status === 'Existing').length
  };
  const generatePigId = () => {
    const existingIds = pigs.map(pig => parseInt(pig.id.slice(1)));
    const maxId = Math.max(...existingIds, 0);
    return `P${String(maxId + 1).padStart(3, '0')}`;
  };
  const handleAddPig = () => {
    if (newPig.name && newPig.pen) {
      const pigWithId = {
        ...newPig,
        id: generatePigId(),
        activityTimeline: [{
          date: new Date().toISOString().split('T')[0],
          type: 'added',
          description: 'Added to farm',
          icon: 'plus'
        }]
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
        health: 'Healthy',
        status: 'New',
        buyer: null,
        healthScore: 90,
        weightHistory: [],
        activityTimeline: []
      });
      setIsAddingPig(false);
    }
  };
  const handleDeletePig = id => {
    setPigs(pigs.filter(pig => pig.id !== id));
    setSelectedPigs(selectedPigs.filter(pigId => pigId !== id));
  };
  const toggleSelectPig = pigId => {
    if (selectedPigs.includes(pigId)) {
      setSelectedPigs(selectedPigs.filter(id => id !== pigId));
    } else {
      setSelectedPigs([...selectedPigs, pigId]);
    }
  };
  const toggleSelectAll = () => {
    if (selectedPigs.length === filteredPigs.length) {
      setSelectedPigs([]);
    } else {
      setSelectedPigs(filteredPigs.map(p => p.id));
    }
  };
  const filteredPigs = pigs.filter(pig => {
    return (filters.pen === '' || pig.pen === parseInt(filters.pen)) && (filters.health === '' || pig.health === filters.health) && (filters.status === '' || pig.status === filters.status) && (filters.buyerStatus === '' || filters.buyerStatus === 'Has Buyer' && pig.buyer !== null || filters.buyerStatus === 'No Buyer' && pig.buyer === null) && (filters.search === '' || pig.name.toLowerCase().includes(filters.search.toLowerCase()) || pig.id.toLowerCase().includes(filters.search.toLowerCase()));
  });
  const getStatusColor = status => {
    switch (status) {
      case 'New':
        return theme === 'dark' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Existing':
        return theme === 'dark' ? 'bg-gray-500/20 text-gray-400 border-gray-500/30' : 'bg-gray-100 text-gray-700 border-gray-300';
      case 'For Sale':
        return theme === 'dark' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-700 border-green-300';
      case 'Reserved':
        return theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Sold':
        return theme === 'dark' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : 'bg-purple-100 text-purple-700 border-purple-300';
      default:
        return theme === 'dark' ? 'bg-gray-500/20 text-gray-400 border-gray-500/30' : 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };
  const getHealthAlert = pig => {
    // Weight drop detection
    if (pig.weightHistory.length >= 2) {
      const lastTwo = pig.weightHistory.slice(-2);
      if (lastTwo[1].weight < lastTwo[0].weight) {
        return {
          type: 'warning',
          message: 'Weight decreased'
        };
      }
    }
    // Low health score
    if (pig.healthScore < 75) {
      return {
        type: 'critical',
        message: 'Low health score'
      };
    }
    // Monitoring status
    if (pig.health === 'Monitoring') {
      return {
        type: 'info',
        message: 'Under monitoring'
      };
    }
    return null;
  };
  return <div>
      {/* Summary Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <div className={`${theme === 'dark' ? 'bg-gray-900/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg p-4 border`}>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
            Total Pigs
          </div>
          <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {stats.total}
          </div>
        </div>
        <div className={`${theme === 'dark' ? 'bg-blue-900/20 border-blue-700/30' : 'bg-blue-50 border-blue-200'} rounded-lg p-4 border`}>
          <div className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'} mb-1`}>
            New Pigs
          </div>
          <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-900'}`}>
            {stats.new}
          </div>
        </div>
        <div className={`${theme === 'dark' ? 'bg-green-900/20 border-green-700/30' : 'bg-green-50 border-green-200'} rounded-lg p-4 border`}>
          <div className={`text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-700'} mb-1`}>
            For Sale
          </div>
          <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
            {stats.forSale}
          </div>
        </div>
        <div className={`${theme === 'dark' ? 'bg-yellow-900/20 border-yellow-700/30' : 'bg-yellow-50 border-yellow-200'} rounded-lg p-4 border`}>
          <div className={`text-sm ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-700'} mb-1`}>
            Reserved
          </div>
          <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-900'}`}>
            {stats.reserved}
          </div>
        </div>
        <div className={`${theme === 'dark' ? 'bg-purple-900/20 border-purple-700/30' : 'bg-purple-50 border-purple-200'} rounded-lg p-4 border`}>
          <div className={`text-sm ${theme === 'dark' ? 'text-purple-400' : 'text-purple-700'} mb-1`}>
            Sold This Month
          </div>
          <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-900'}`}>
            {stats.soldThisMonth}
          </div>
        </div>
        <div className={`${theme === 'dark' ? 'bg-cyan-900/20 border-cyan-700/30' : 'bg-cyan-50 border-cyan-200'} rounded-lg p-4 border`}>
          <div className={`text-sm ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'} mb-1 flex items-center`}>
            <BrainCircuitIcon size={14} className="mr-1" />
            AI Predicted
          </div>
          <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-900'}`}>
            {stats.aiPredicted}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Manage Pigs
          </h3>
          {selectedPigs.length > 0 && <div className={`flex items-center space-x-2`}>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedPigs.length} selected
              </span>
              <button className={`flex items-center px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`} onClick={() => setShowBatchActions(true)}>
                <UsersIcon size={16} className="mr-1.5" />
                Batch Actions
              </button>
            </div>}
        </div>
        {!isAddingPig && <button className={`flex items-center px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-colors`} onClick={() => setIsAddingPig(true)}>
            <PlusIcon size={16} className="mr-1.5" />
            <span>Add Pig</span>
          </button>}
      </div>

      {/* Enhanced Filter Section */}
      <div className={`p-4 mb-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2">
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
            <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={filters.pen} onChange={e => setFilters({
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
            <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={filters.status} onChange={e => setFilters({
            ...filters,
            status: e.target.value
          })}>
              <option value="">All Status</option>
              <option value="New">New</option>
              <option value="Existing">Existing</option>
              <option value="For Sale">For Sale</option>
              <option value="Reserved">Reserved</option>
              <option value="Sold">Sold</option>
            </select>
          </div>
          <div>
            <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={filters.buyerStatus} onChange={e => setFilters({
            ...filters,
            buyerStatus: e.target.value
          })}>
              <option value="">Buyer Status</option>
              <option value="Has Buyer">Has Buyer</option>
              <option value="No Buyer">No Buyer</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center space-x-3">
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Showing {filteredPigs.length} of {pigs.length} pigs
            </div>
            {filteredPigs.length > 0 && <button className={`text-sm ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`} onClick={toggleSelectAll}>
                {selectedPigs.length === filteredPigs.length ? 'Deselect All' : 'Select All'}
              </button>}
          </div>
          <button className={`px-3 py-1.5 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`} onClick={() => setFilters({
          pen: '',
          health: '',
          status: '',
          buyerStatus: '',
          search: ''
        })}>
            Clear Filters
          </button>
        </div>
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
                Status
              </label>
              <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-1 focus:ring-green-500`} value={newPig.status} onChange={e => setNewPig({
            ...newPig,
            status: e.target.value
          })}>
                <option value="New">New</option>
                <option value="Existing">Existing</option>
                <option value="For Sale">For Sale</option>
                <option value="Reserved">Reserved</option>
                <option value="Sold">Sold</option>
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

      {/* Enhanced Pigs Grid with Micro Charts and Health Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPigs.map(pig => {
        const alert = getHealthAlert(pig);
        const isSelected = selectedPigs.includes(pig.id);
        return <div key={pig.id} className={`rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border-gray-700/50 hover:bg-gray-900/70' : 'bg-white border-gray-200 hover:shadow-lg'} border overflow-hidden transition-all ${isSelected ? 'ring-2 ring-green-500' : ''} flex flex-col h-full`}>
              <div className="h-3" style={{
            backgroundColor: pig.tagColor
          }}></div>
              <div className="p-4 flex flex-col flex-1">
                {/* Selection Checkbox and Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3 flex-1">
                    <input type="checkbox" checked={isSelected} onChange={() => toggleSelectPig(pig.id)} className="mt-1 w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500" onClick={e => e.stopPropagation()} />
                    <div className="flex-1">
                      <h4 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        {pig.name}
                      </h4>
                      <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} flex items-center mt-1`}>
                        <TagIcon size={14} className="mr-1" /> {pig.id}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(pig.status)}`}>
                      {pig.status}
                    </div>
                    <HealthScoreBadge score={pig.healthScore} theme={theme} />
                  </div>
                </div>

                {/* Health Alert */}
                {alert && <div className={`mb-3 p-2 rounded-lg flex items-start ${alert.type === 'critical' ? theme === 'dark' ? 'bg-red-900/20 border border-red-700/30' : 'bg-red-50 border border-red-200' : alert.type === 'warning' ? theme === 'dark' ? 'bg-yellow-900/20 border border-yellow-700/30' : 'bg-yellow-50 border border-yellow-200' : theme === 'dark' ? 'bg-blue-900/20 border border-blue-700/30' : 'bg-blue-50 border border-blue-200'}`}>
                    <AlertTriangleIcon size={16} className={`${alert.type === 'critical' ? theme === 'dark' ? 'text-red-400' : 'text-red-600' : alert.type === 'warning' ? theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600' : theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mr-2 mt-0.5 flex-shrink-0`} />
                    <div>
                      <div className={`text-xs font-medium ${alert.type === 'critical' ? theme === 'dark' ? 'text-red-400' : 'text-red-700' : alert.type === 'warning' ? theme === 'dark' ? 'text-yellow-400' : 'text-yellow-700' : theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>
                        {alert.message}
                      </div>
                    </div>
                  </div>}

                {/* Micro Weight Chart */}
                {pig.weightHistory.length > 0 && <div className="mb-3">
                    <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                      Weight Trend
                    </div>
                    <SparklineChart data={pig.weightHistory} color={pig.tagColor} height={40} />
                  </div>}

                {/* Pig Info - Takes remaining space */}
                <div className="space-y-2 flex-1">
                  <div className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div className={`w-4 h-4 mr-2 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                      <LayoutGridIcon size={12} />
                    </div>
                    <span>
                      Pen:{' '}
                      {pens.find(pen => pen.id === pig.pen)?.name || 'Unknown'}
                    </span>
                  </div>
                  <div className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div className={`w-4 h-4 mr-2 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                      <ScaleIcon size={12} />
                    </div>
                    <span>Weight: {pig.weight} kg</span>
                  </div>
                  <div className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div className={`w-4 h-4 mr-2 rounded-full flex items-center justify-center ${pig.health === 'Healthy' ? theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600' : theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
                      <ActivityIcon size={12} />
                    </div>
                    <span>Health: {pig.health}</span>
                  </div>
                </div>

                {/* Buyer Information */}
                {pig.buyer && <div className={`mt-3 p-2 rounded-lg ${theme === 'dark' ? 'bg-yellow-900/20 border border-yellow-700/30' : 'bg-yellow-50 border border-yellow-200'}`}>
                    <div className="flex items-center mb-1">
                      <UserIcon size={14} className={theme === 'dark' ? 'text-yellow-400 mr-1' : 'text-yellow-700 mr-1'} />
                      <span className={`text-xs font-medium ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-700'}`}>
                        Buyer Info
                      </span>
                    </div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-800'}`}>
                      <div>Name: {pig.buyer.name}</div>
                      <div>Pickup: {pig.buyer.pickupDate}</div>
                      <div>
                        Price: ₱{pig.buyer.agreedPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>}

                {/* Action Buttons - Anchored at bottom with mt-auto */}
                <div className="flex justify-end space-x-2 mt-auto pt-4">
                  <button className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-colors`} onClick={e => {
                e.stopPropagation();
                setSelectedPig(pig);
                setShowPigModal(true);
              }} title="View Details">
                    <InfoIcon size={16} />
                  </button>
                  <button className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-red-100 text-red-600 hover:bg-red-200'} transition-colors`} onClick={e => {
                e.stopPropagation();
                handleDeletePig(pig.id);
              }} title="Delete">
                    <Trash2Icon size={16} />
                  </button>
                </div>
              </div>
            </div>;
      })}
      </div>

      {filteredPigs.length === 0 && <div className={`py-12 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          <AlertCircleIcon size={48} className="mx-auto mb-3 opacity-50" />
          <p className="text-lg font-medium">No pigs found</p>
          <p className="text-sm">Try adjusting your filters or add a new pig</p>
        </div>}
    </div>;
};
// Batch Actions Modal Component
const BatchActionsModal = ({
  theme,
  selectedPigs,
  pigs,
  setPigs,
  pens,
  onClose
}) => {
  const [action, setAction] = useState('');
  const [targetPen, setTargetPen] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    pickupDate: '',
    agreedPrice: 0
  });
  const handleBatchAction = () => {
    let updatedPigs = [...pigs];
    switch (action) {
      case 'move':
        if (targetPen) {
          updatedPigs = updatedPigs.map(pig => selectedPigs.includes(pig.id) ? {
            ...pig,
            pen: parseInt(targetPen)
          } : pig);
        }
        break;
      case 'status':
        if (newStatus) {
          updatedPigs = updatedPigs.map(pig => selectedPigs.includes(pig.id) ? {
            ...pig,
            status: newStatus
          } : pig);
        }
        break;
      case 'buyer':
        if (buyerInfo.name && buyerInfo.pickupDate && buyerInfo.agreedPrice > 0) {
          updatedPigs = updatedPigs.map(pig => selectedPigs.includes(pig.id) ? {
            ...pig,
            buyer: buyerInfo,
            status: 'Reserved'
          } : pig);
        }
        break;
      case 'delete':
        updatedPigs = updatedPigs.filter(pig => !selectedPigs.includes(pig.id));
        break;
    }
    setPigs(updatedPigs);
    onClose();
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={`${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-2xl max-w-2xl w-full`}>
        <div className={`${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b p-6 flex justify-between items-center`}>
          <div>
            <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Batch Actions
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
              {selectedPigs.length} pig{selectedPigs.length > 1 ? 's' : ''}{' '}
              selected
            </p>
          </div>
          <button onClick={onClose} className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}>
            <XIcon size={24} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Select Action
            </label>
            <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={action} onChange={e => setAction(e.target.value)}>
              <option value="">Choose an action...</option>
              <option value="move">Move to Another Pen</option>
              <option value="status">Update Status</option>
              <option value="buyer">Assign Buyer</option>
              <option value="delete">Delete Pigs</option>
            </select>
          </div>

          {action === 'move' && <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Target Pen
              </label>
              <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={targetPen} onChange={e => setTargetPen(e.target.value)}>
                <option value="">Select pen...</option>
                {pens.map(pen => <option key={pen.id} value={pen.id}>
                    {pen.name} ({pen.occupied}/{pen.capacity})
                  </option>)}
              </select>
            </div>}

          {action === 'status' && <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                New Status
              </label>
              <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                <option value="">Select status...</option>
                <option value="New">New</option>
                <option value="Existing">Existing</option>
                <option value="For Sale">For Sale</option>
                <option value="Reserved">Reserved</option>
                <option value="Sold">Sold</option>
              </select>
            </div>}

          {action === 'buyer' && <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Buyer Name
                </label>
                <input type="text" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={buyerInfo.name} onChange={e => setBuyerInfo({
              ...buyerInfo,
              name: e.target.value
            })} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Pickup Date
                </label>
                <input type="date" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={buyerInfo.pickupDate} onChange={e => setBuyerInfo({
              ...buyerInfo,
              pickupDate: e.target.value
            })} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Agreed Price (₱)
                </label>
                <input type="number" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={buyerInfo.agreedPrice} onChange={e => setBuyerInfo({
              ...buyerInfo,
              agreedPrice: parseFloat(e.target.value) || 0
            })} />
              </div>
            </div>}

          {action === 'delete' && <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900/20 border border-red-700/30' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-start">
                <AlertTriangleIcon size={20} className={`${theme === 'dark' ? 'text-red-400' : 'text-red-600'} mr-2 mt-0.5 flex-shrink-0`} />
                <div>
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-red-400' : 'text-red-700'} mb-1`}>
                    Warning
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-red-300' : 'text-red-800'}`}>
                    This will permanently delete {selectedPigs.length} pig
                    {selectedPigs.length > 1 ? 's' : ''}. This action cannot be
                    undone.
                  </div>
                </div>
              </div>
            </div>}
        </div>

        <div className={`${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t p-6 flex justify-end space-x-3`}>
          <button onClick={onClose} className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}>
            Cancel
          </button>
          <button onClick={handleBatchAction} disabled={!action} className={`px-4 py-2 rounded-lg ${action === 'delete' ? theme === 'dark' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-600 text-white hover:bg-red-700' : theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center`}>
            {action === 'delete' ? <Trash2Icon size={16} className="mr-2" /> : <CheckIcon size={16} className="mr-2" />}
            Apply Action
          </button>
        </div>
      </div>
    </div>;
};
// Pig Details Modal with Activity Timeline
const PigDetailsModal = ({
  theme,
  pig,
  pigs,
  setPigs,
  pens,
  onClose
}) => {
  const [editedPig, setEditedPig] = useState({
    ...pig
  });
  const handleSave = () => {
    setPigs(pigs.map(p => p.id === pig.id ? editedPig : p));
    onClose();
  };
  const getTimelineIcon = type => {
    switch (type) {
      case 'added':
        return <PlusIcon size={16} />;
      case 'weight':
        return <ScaleIcon size={16} />;
      case 'health':
        return <ActivityIcon size={16} />;
      case 'treatment':
        return <SyringeIcon size={16} />;
      case 'transfer':
        return <MoveIcon size={16} />;
      case 'buyer':
        return <UserIcon size={16} />;
      case 'sale':
        return <CheckCircle2Icon size={16} />;
      case 'status':
        return <TagIcon size={16} />;
      default:
        return <ClockIcon size={16} />;
    }
  };
  const getTimelineColor = type => {
    switch (type) {
      case 'added':
        return theme === 'dark' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-300';
      case 'weight':
        return theme === 'dark' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-700 border-green-300';
      case 'health':
        return theme === 'dark' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' : 'bg-cyan-100 text-cyan-700 border-cyan-300';
      case 'treatment':
        return theme === 'dark' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : 'bg-purple-100 text-purple-700 border-purple-300';
      case 'transfer':
        return theme === 'dark' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 'bg-orange-100 text-orange-700 border-orange-300';
      case 'buyer':
        return theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'sale':
        return theme === 'dark' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border-emerald-300';
      case 'status':
        return theme === 'dark' ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' : 'bg-indigo-100 text-indigo-700 border-indigo-300';
      default:
        return theme === 'dark' ? 'bg-gray-500/20 text-gray-400 border-gray-500/30' : 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={`${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
        <div className={`sticky top-0 ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b p-6 flex justify-between items-center z-10`}>
          <div>
            <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Pig Details
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
              ID: {pig.id}
            </p>
          </div>
          <button onClick={onClose} className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}>
            <XIcon size={24} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Health Analytics */}
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'}`}>
            <h3 className={`text-lg font-semibold mb-3 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <Sparkles size={20} className="mr-2" />
              Health Analytics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Health Score
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {pig.healthScore}
                  </div>
                  <div className={`text-sm ${pig.healthScore >= 90 ? 'text-green-500' : pig.healthScore >= 75 ? 'text-yellow-500' : 'text-red-500'}`}>
                    {pig.healthScore >= 90 ? 'Excellent' : pig.healthScore >= 75 ? 'Good' : 'Needs Attention'}
                  </div>
                </div>
              </div>
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Weight Gain (30d)
                </div>
                <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {pig.weightHistory.length >= 2 ? (pig.weightHistory[pig.weightHistory.length - 1].weight - pig.weightHistory[0].weight).toFixed(1) : '0.0'}{' '}
                  kg
                </div>
              </div>
              <div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Growth Rate
                </div>
                <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {pig.weightHistory.length >= 2 ? ((pig.weightHistory[pig.weightHistory.length - 1].weight - pig.weightHistory[0].weight) / pig.weightHistory.length * 30).toFixed(1) : '0.0'}{' '}
                  kg/mo
                </div>
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input type="text" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={editedPig.name} onChange={e => setEditedPig({
                ...editedPig,
                name: e.target.value
              })} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Pen
                </label>
                <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={editedPig.pen} onChange={e => setEditedPig({
                ...editedPig,
                pen: parseInt(e.target.value)
              })}>
                  {pens.map(pen => <option key={pen.id} value={pen.id}>
                      {pen.name}
                    </option>)}
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Status
                </label>
                <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={editedPig.status} onChange={e => setEditedPig({
                ...editedPig,
                status: e.target.value
              })}>
                  <option value="New">New</option>
                  <option value="Existing">Existing</option>
                  <option value="For Sale">For Sale</option>
                  <option value="Reserved">Reserved</option>
                  <option value="Sold">Sold</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Health Status
                </label>
                <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={editedPig.health} onChange={e => setEditedPig({
                ...editedPig,
                health: e.target.value
              })}>
                  <option value="Healthy">Healthy</option>
                  <option value="Monitoring">Monitoring</option>
                  <option value="Treatment">Treatment</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Weight (kg)
                </label>
                <input type="number" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={editedPig.weight} onChange={e => setEditedPig({
                ...editedPig,
                weight: parseFloat(e.target.value) || 0
              })} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Gender
                </label>
                <select className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={editedPig.gender} onChange={e => setEditedPig({
                ...editedPig,
                gender: e.target.value
              })}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          {/* Buyer Information */}
          {(editedPig.status === 'Reserved' || editedPig.status === 'Sold') && <div>
              <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Buyer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Buyer Name
                  </label>
                  <input type="text" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={editedPig.buyer?.name || ''} onChange={e => setEditedPig({
                ...editedPig,
                buyer: {
                  ...editedPig.buyer,
                  name: e.target.value
                }
              })} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Pickup Date
                  </label>
                  <input type="date" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={editedPig.buyer?.pickupDate || ''} onChange={e => setEditedPig({
                ...editedPig,
                buyer: {
                  ...editedPig.buyer,
                  pickupDate: e.target.value
                }
              })} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Agreed Price (₱)
                  </label>
                  <input type="number" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} value={editedPig.buyer?.agreedPrice || 0} onChange={e => setEditedPig({
                ...editedPig,
                buyer: {
                  ...editedPig.buyer,
                  agreedPrice: parseFloat(e.target.value) || 0
                }
              })} />
                </div>
              </div>
            </div>}

          {/* Activity Timeline */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <ClockIcon size={20} className="mr-2" />
              Activity Timeline
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

              <div className="space-y-4">
                {pig.activityTimeline.map((event, index) => <div key={index} className="relative flex items-start">
                    <div className={`absolute left-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${getTimelineColor(event.type)}`}>
                      {getTimelineIcon(event.type)}
                    </div>
                    <div className="ml-12 flex-1">
                      <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {event.date}
                      </div>
                      <div className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {event.description}
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Weight History Chart */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Weight History
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={pig.weightHistory}>
                  <defs>
                    <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="date" tick={{
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                  fontSize: 12
                }} />
                  <YAxis tick={{
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                  fontSize: 12
                }} label={{
                  value: 'Weight (kg)',
                  angle: -90,
                  position: 'insideLeft',
                  fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
                }} />
                  <Tooltip contentStyle={{
                  backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                  border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                  borderRadius: '8px'
                }} />
                  <Area type="monotone" dataKey="weight" stroke="#22c55e" strokeWidth={2} fill="url(#weightGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Prediction */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <BrainCircuitIcon size={20} className="mr-2" />
              AI Growth Prediction
            </h3>
            <div className={`${theme === 'dark' ? 'bg-cyan-900/20 border-cyan-700/30' : 'bg-cyan-50 border-cyan-200'} rounded-lg p-4 border`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'} mb-1`}>
                    Predicted Weight (30 days)
                  </div>
                  <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-900'}`}>
                    {(pig.weight + 8).toFixed(1)} kg
                  </div>
                </div>
                <div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'} mb-1`}>
                    Ready for Sale
                  </div>
                  <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-900'}`}>
                    {pig.weight >= 80 ? 'Now' : '45 days'}
                  </div>
                </div>
                <div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-700'} mb-1`}>
                    Estimated Value
                  </div>
                  <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-900'}`}>
                    ₱{(pig.weight * 100).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={`sticky bottom-0 ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t p-6 flex justify-end space-x-3`}>
          <button onClick={onClose} className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}>
            Cancel
          </button>
          <button onClick={handleSave} className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-colors flex items-center`}>
            <SaveIcon size={16} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>;
};
// Expanded AI Insights Component with Charts
const AIInsights = ({
  theme,
  pigs,
  pens
}) => {
  const readyForSale = pigs.filter(p => p.weight >= 80 && p.status === 'Existing');
  const avgWeight = pigs.reduce((sum, p) => sum + p.weight, 0) / pigs.length;
  // AI-Powered Recommendations
  const aiRecommendations = [{
    id: 1,
    type: 'feed',
    priority: 'high',
    title: 'Pen C Feed Optimization',
    description: 'Pen C pigs are gaining weight 15% faster than average. Consider increasing feed by 200g/pig to maintain growth momentum.',
    action: 'Increase Feed',
    impact: '+2kg avg weight gain/month',
    confidence: 92
  }, {
    id: 2,
    type: 'water',
    priority: 'critical',
    title: 'Water Consumption Drop Detected',
    description: 'Pen B water consumption dropped by 12% over the last 3 days. This may indicate health issues or equipment malfunction.',
    action: 'Inspect System',
    impact: 'Prevent health issues',
    confidence: 88
  }, {
    id: 3,
    type: 'health',
    priority: 'medium',
    title: 'Predictive Health Alert',
    description: 'Pig P004 (Wilbur) showing irregular feeding patterns. Weight gain has stalled. Recommend health check within 48 hours.',
    action: 'Schedule Checkup',
    impact: 'Early intervention',
    confidence: 85
  }, {
    id: 4,
    type: 'sale',
    priority: 'low',
    title: 'Optimal Sale Window',
    description: '5 pigs will reach optimal sale weight (85-90kg) in 14-18 days. Market prices are projected to be favorable.',
    action: 'Prepare for Sale',
    impact: '+₱2,500 potential revenue',
    confidence: 78
  }, {
    id: 5,
    type: 'resource',
    priority: 'medium',
    title: 'Feed Efficiency Improvement',
    description: 'Switching to Premium Feed for pigs over 70kg could reduce time-to-market by 8 days with 15% better feed conversion.',
    action: 'Optimize Feed Mix',
    impact: '₱1,200 cost savings',
    confidence: 81
  }];
  // Generate growth projection data
  const growthProjectionData = [{
    month: 'Current',
    avgWeight: avgWeight.toFixed(1)
  }, {
    month: '1 Month',
    avgWeight: (avgWeight + 8).toFixed(1)
  }, {
    month: '2 Months',
    avgWeight: (avgWeight + 16).toFixed(1)
  }, {
    month: '3 Months',
    avgWeight: (avgWeight + 24).toFixed(1)
  }];
  // Generate feed forecast data
  const feedForecastData = [{
    day: 'Day 1',
    consumption: pigs.length * 2.5,
    predicted: pigs.length * 2.5
  }, {
    day: 'Day 7',
    consumption: pigs.length * 2.5 * 7,
    predicted: pigs.length * 2.6 * 7
  }, {
    day: 'Day 14',
    consumption: pigs.length * 2.5 * 14,
    predicted: pigs.length * 2.7 * 14
  }, {
    day: 'Day 21',
    consumption: pigs.length * 2.5 * 21,
    predicted: pigs.length * 2.8 * 21
  }, {
    day: 'Day 30',
    consumption: pigs.length * 2.5 * 30,
    predicted: pigs.length * 2.9 * 30
  }];
  // Generate water forecast data
  const waterForecastData = [{
    day: 'Day 1',
    consumption: pigs.length * 8,
    predicted: pigs.length * 8
  }, {
    day: 'Day 7',
    consumption: pigs.length * 8 * 7,
    predicted: pigs.length * 8.2 * 7
  }, {
    day: 'Day 14',
    consumption: pigs.length * 8 * 14,
    predicted: pigs.length * 8.4 * 14
  }, {
    day: 'Day 21',
    consumption: pigs.length * 8 * 21,
    predicted: pigs.length * 8.6 * 21
  }, {
    day: 'Day 30',
    consumption: pigs.length * 8 * 30,
    predicted: pigs.length * 8.8 * 30
  }];
  // Activity correlation heatmap data (mock)
  const activityCorrelationData = pens.map(pen => {
    const pigsInPen = pigs.filter(p => p.pen === pen.id);
    return {
      pen: pen.name,
      feedEfficiency: 75 + Math.random() * 20,
      waterIntake: 80 + Math.random() * 15,
      weightGain: 70 + Math.random() * 25,
      healthScore: 85 + Math.random() * 10
    };
  });
  const getPriorityColor = priority => {
    switch (priority) {
      case 'critical':
        return theme === 'dark' ? 'bg-red-900/20 border-red-700/30 text-red-400' : 'bg-red-50 border-red-200 text-red-700';
      case 'high':
        return theme === 'dark' ? 'bg-orange-900/20 border-orange-700/30 text-orange-400' : 'bg-orange-50 border-orange-200 text-orange-700';
      case 'medium':
        return theme === 'dark' ? 'bg-yellow-900/20 border-yellow-700/30 text-yellow-400' : 'bg-yellow-50 border-yellow-200 text-yellow-700';
      case 'low':
        return theme === 'dark' ? 'bg-blue-900/20 border-blue-700/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700';
      default:
        return theme === 'dark' ? 'bg-gray-900/20 border-gray-700/30 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };
  const getTypeIcon = type => {
    switch (type) {
      case 'feed':
        return <FeedIcon size={20} />;
      case 'water':
        return <WaterIcon size={20} />;
      case 'health':
        return <ActivityIcon size={20} />;
      case 'sale':
        return <DollarSignIcon size={20} />;
      case 'resource':
        return <PackageIcon size={20} />;
      default:
        return <BrainCircuitIcon size={20} />;
    }
  };
  return <div className="space-y-6">
      <div>
        <h3 className={`text-lg font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <BrainCircuitIcon size={20} className="mr-2" />
          AI-Powered Insights & Recommendations
        </h3>
      </div>

      {/* AI Recommendations */}
      <div className={`${theme === 'dark' ? 'bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border-purple-700/30' : 'bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200'} rounded-lg p-6 border`}>
        <h4 className={`text-lg font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-purple-300' : 'text-purple-900'}`}>
          <Sparkles size={20} className="mr-2" />
          Smart Recommendations
        </h4>
        <div className="space-y-3">
          {aiRecommendations.map(rec => <div key={rec.id} className={`p-4 rounded-lg border ${getPriorityColor(rec.priority)}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className={`p-2 rounded-lg ${rec.priority === 'critical' ? theme === 'dark' ? 'bg-red-500/20' : 'bg-red-100' : rec.priority === 'high' ? theme === 'dark' ? 'bg-orange-500/20' : 'bg-orange-100' : rec.priority === 'medium' ? theme === 'dark' ? 'bg-yellow-500/20' : 'bg-yellow-100' : theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                    {getTypeIcon(rec.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h5 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {rec.title}
                      </h5>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium uppercase ${rec.priority === 'critical' ? 'bg-red-500 text-white' : rec.priority === 'high' ? 'bg-orange-500 text-white' : rec.priority === 'medium' ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'}`}>
                        {rec.priority}
                      </span>
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      {rec.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs">
                      <div className={`flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        <TrendingUpIcon size={14} className="mr-1" />
                        {rec.impact}
                      </div>
                      <div className={`flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        <BrainCircuitIcon size={14} className="mr-1" />
                        {rec.confidence}% confidence
                      </div>
                    </div>
                  </div>
                </div>
                <button className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ml-4 ${rec.priority === 'critical' || rec.priority === 'high' ? theme === 'dark' ? 'bg-white text-gray-900 hover:bg-gray-100 active:scale-95' : 'bg-gray-900 text-white hover:bg-gray-800 active:scale-95' : theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600 active:scale-95' : 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:scale-95'}`}>
                  {rec.action}
                </button>
              </div>
            </div>)}
        </div>
      </div>

      {/* Predictive Analytics - Feed & Water Correlation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg p-6 border`}>
          <h4 className={`text-md font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <LineChartIcon size={18} className="mr-2" />
            Feed Consumption Prediction
          </h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={feedForecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="day" tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} />
                <YAxis tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} />
                <Tooltip contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                borderRadius: '8px'
              }} />
                <Line type="monotone" dataKey="consumption" stroke="#22c55e" strokeWidth={2} name="Actual" dot={{
                fill: '#22c55e',
                r: 4
              }} />
                <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" name="Predicted" dot={{
                fill: '#3b82f6',
                r: 4
              }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className={`mt-3 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            AI predicts 16% increase in feed consumption over next 30 days based
            on growth patterns
          </div>
        </div>

        <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg p-6 border`}>
          <h4 className={`text-md font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <LineChartIcon size={18} className="mr-2" />
            Water Consumption Prediction
          </h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={waterForecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="day" tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} />
                <YAxis tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} />
                <Tooltip contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                borderRadius: '8px'
              }} />
                <Line type="monotone" dataKey="consumption" stroke="#06b6d4" strokeWidth={2} name="Actual" dot={{
                fill: '#06b6d4',
                r: 4
              }} />
                <Line type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" name="Predicted" dot={{
                fill: '#8b5cf6',
                r: 4
              }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className={`mt-3 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            AI predicts 10% increase in water consumption over next 30 days
            based on temperature trends
          </div>
        </div>
      </div>

      {/* Activity Correlation Heatmap */}
      <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg p-6 border`}>
        <h4 className={`text-md font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <ActivityIcon size={18} className="mr-2" />
          Performance Correlation by Pen
        </h4>
        <div className="space-y-4">
          {activityCorrelationData.map((data, index) => <div key={index} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
              <div className={`font-medium mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {data.pen}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Feed Efficiency
                  </div>
                  <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                    <div className="h-full bg-green-500 transition-all" style={{
                  width: `${data.feedEfficiency}%`
                }} />
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                    {data.feedEfficiency.toFixed(0)}%
                  </div>
                </div>
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Water Intake
                  </div>
                  <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                    <div className="h-full bg-cyan-500 transition-all" style={{
                  width: `${data.waterIntake}%`
                }} />
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                    {data.waterIntake.toFixed(0)}%
                  </div>
                </div>
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Weight Gain
                  </div>
                  <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                    <div className="h-full bg-purple-500 transition-all" style={{
                  width: `${data.weightGain}%`
                }} />
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                    {data.weightGain.toFixed(0)}%
                  </div>
                </div>
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                    Health Score
                  </div>
                  <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                    <div className="h-full bg-blue-500 transition-all" style={{
                  width: `${data.healthScore}%`
                }} />
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                    {data.healthScore.toFixed(0)}%
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Predicted pigs ready for sale with chart - Keep existing */}
      <div className={`${theme === 'dark' ? 'bg-green-900/20 border-green-700/30' : 'bg-green-50 border-green-200'} rounded-lg p-6 border`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
              Pigs Ready for Sale
            </h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-700'} mt-1`}>
              Based on weight and growth patterns
            </p>
          </div>
          <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
            {readyForSale.length}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            {readyForSale.map(pig => <div key={pig.id} className={`flex justify-between items-center p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'}`}>
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {pig.name} ({pig.id})
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Weight: {pig.weight} kg
                  </div>
                </div>
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                  Est. ₱{(pig.weight * 100).toLocaleString()}
                </div>
              </div>)}
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={readyForSale.map(p => ({
              name: p.name,
              weight: p.weight,
              value: p.weight * 100
            }))}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="name" tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} />
                <YAxis tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} label={{
                value: 'Est. Value (₱)',
                angle: -90,
                position: 'insideLeft',
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
              }} />
                <Tooltip contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                borderRadius: '8px'
              }} formatter={value => [`₱${value.toLocaleString()}`, 'Est. Value']} />
                <Bar dataKey="value" fill="#22c55e" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Growth Projections - Keep existing */}
      <div className={`${theme === 'dark' ? 'bg-purple-900/20 border-purple-700/30' : 'bg-purple-50 border-purple-200'} rounded-lg p-6 border`}>
        <div className="flex items-center mb-4">
          <LineChartIcon size={20} className={theme === 'dark' ? 'text-purple-400 mr-2' : 'text-purple-700 mr-2'} />
          <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-900'}`}>
            Growth Projections
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthProjectionData}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="month" tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} />
                <YAxis tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} label={{
                value: 'Avg Weight (kg)',
                angle: -90,
                position: 'insideLeft',
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
              }} />
                <Tooltip contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                borderRadius: '8px'
              }} formatter={value => [`${value} kg`, 'Avg Weight']} />
                <Line type="monotone" dataKey="avgWeight" stroke="#a855f7" strokeWidth={3} dot={{
                fill: '#a855f7',
                r: 6
              }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className={`text-sm ${theme === 'dark' ? 'text-purple-400' : 'text-purple-700'} mb-1`}>
                Current Avg Weight
              </div>
              <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-900'}`}>
                {avgWeight.toFixed(1)} kg
              </div>
            </div>
            <div>
              <div className={`text-sm ${theme === 'dark' ? 'text-purple-400' : 'text-purple-700'} mb-1`}>
                30-Day Projection
              </div>
              <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-900'}`}>
                {(avgWeight + 8).toFixed(1)} kg
              </div>
            </div>
            <div>
              <div className={`text-sm ${theme === 'dark' ? 'text-purple-400' : 'text-purple-700'} mb-1`}>
                90-Day Projection
              </div>
              <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-900'}`}>
                {(avgWeight + 24).toFixed(1)} kg
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Anomaly Detection - Keep existing */}
      <div className={`${theme === 'dark' ? 'bg-red-900/20 border-red-700/30' : 'bg-red-50 border-red-200'} rounded-lg p-6 border`}>
        <div className="flex items-center mb-4">
          <AlertTriangleIcon size={20} className={theme === 'dark' ? 'text-red-400 mr-2' : 'text-red-700 mr-2'} />
          <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-red-300' : 'text-red-900'}`}>
            Health Anomaly Detection
          </h4>
        </div>
        <div className="space-y-3">
          {pigs.filter(p => p.health !== 'Healthy' || p.healthScore < 85).map(pig => <div key={pig.id} className={`flex justify-between items-center p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'}`}>
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {pig.name} ({pig.id})
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Status: {pig.health} • Score: {pig.healthScore}
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${pig.healthScore < 75 ? theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700' : theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`}>
                  {pig.healthScore < 75 ? 'Critical' : 'Monitor'}
                </div>
              </div>)}
          {pigs.filter(p => p.health !== 'Healthy' || p.healthScore < 85).length === 0 && <div className={`text-center py-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <CheckCircleIcon size={32} className="mx-auto mb-2 opacity-50" />
              <p>No health anomalies detected</p>
            </div>}
        </div>
      </div>
    </div>;
};
// Resources Management Component - FULLY FUNCTIONAL WITH FEEDING CONTROLS
const ResourcesManagement = ({
  theme
}) => {
  const [activeResourceTab, setActiveResourceTab] = useState('feed');
  const [resources, setResources] = useState(initialResources);
  const [pens] = useState(initialPens);
  const [pigs, setPigs] = useState(initialPigs);
  // Feeding state management - per pig feed settings
  const [pigFeedSettings, setPigFeedSettings] = useState(() => {
    const settings = {};
    pigs.forEach(pig => {
      settings[pig.id] = {
        feedAmount: 2500,
        feedType: 'B-MEG Starter Feed',
        fed: false,
        lastFed: null
      };
    });
    return settings;
  });
  // Philippine feed types
  const FEED_TYPES = ['B-MEG Starter Feed', 'VIEPro Grower Feed', 'Purina Turbo Finisher', 'Rice Bran Mix', 'Soybean Meal Blend'];
  // Feed inventory with Philippine feeds
  const [feedInventory, setFeedInventory] = useState([{
    id: 1,
    name: 'B-MEG Starter Feed',
    quantity: 50,
    unit: 'sacks',
    pricePerUnit: 1200,
    minThreshold: 10
  }, {
    id: 2,
    name: 'VIEPro Grower Feed',
    quantity: 30,
    unit: 'sacks',
    pricePerUnit: 1900,
    minThreshold: 10
  }, {
    id: 3,
    name: 'Purina Turbo Finisher',
    quantity: 25,
    unit: 'sacks',
    pricePerUnit: 1970,
    minThreshold: 10
  }, {
    id: 4,
    name: 'Rice Bran Mix',
    quantity: 100,
    unit: 'kg',
    pricePerUnit: 18,
    minThreshold: 20
  }, {
    id: 5,
    name: 'Soybean Meal Blend',
    quantity: 75,
    unit: 'kg',
    pricePerUnit: 45,
    minThreshold: 20
  }]);
  // Water inventory
  const [waterInventory, setWaterInventory] = useState([{
    id: 1,
    name: 'Water Supply',
    quantity: 2000,
    unit: 'L',
    pricePerUnit: 0.5,
    minThreshold: 500
  }]);
  // Editing states
  const [editingPigFeed, setEditingPigFeed] = useState(null);
  const [editingFeedStock, setEditingFeedStock] = useState(null);
  const [editingWaterStock, setEditingWaterStock] = useState(null);
  const [showAddFeed, setShowAddFeed] = useState(false);
  const [showAddWater, setShowAddWater] = useState(false);
  // New stock forms
  const [newFeedStock, setNewFeedStock] = useState({
    name: '',
    quantity: 0,
    unit: 'sacks',
    pricePerUnit: 0,
    minThreshold: 10
  });
  const [newWaterStock, setNewWaterStock] = useState({
    name: '',
    quantity: 0,
    unit: 'L',
    pricePerUnit: 0,
    minThreshold: 500
  });
  // Mark pig as fed
  const markPigAsFed = pigId => {
    setPigFeedSettings(prev => ({
      ...prev,
      [pigId]: {
        ...prev[pigId],
        fed: true,
        lastFed: new Date().toISOString()
      }
    }));
  };
  // Update pig feed settings
  const updatePigFeedSettings = (pigId, feedAmount, feedType) => {
    setPigFeedSettings(prev => ({
      ...prev,
      [pigId]: {
        ...prev[pigId],
        feedAmount: parseInt(feedAmount) || 0,
        feedType
      }
    }));
    setEditingPigFeed(null);
  };
  // Add feed stock
  const addFeedStock = () => {
    if (newFeedStock.name && newFeedStock.quantity > 0) {
      setFeedInventory(prev => [...prev, {
        ...newFeedStock,
        id: prev.length > 0 ? Math.max(...prev.map(f => f.id)) + 1 : 1
      }]);
      setNewFeedStock({
        name: '',
        quantity: 0,
        unit: 'sacks',
        pricePerUnit: 0,
        minThreshold: 10
      });
      setShowAddFeed(false);
    }
  };
  // Update feed stock
  const updateFeedStock = (id, updates) => {
    setFeedInventory(prev => prev.map(feed => feed.id === id ? {
      ...feed,
      ...updates
    } : feed));
    setEditingFeedStock(null);
  };
  // Delete feed stock
  const deleteFeedStock = id => {
    setFeedInventory(prev => prev.filter(feed => feed.id !== id));
  };
  // Add water stock
  const addWaterStock = () => {
    if (newWaterStock.name && newWaterStock.quantity > 0) {
      setWaterInventory(prev => [...prev, {
        ...newWaterStock,
        id: prev.length > 0 ? Math.max(...prev.map(w => w.id)) + 1 : 1
      }]);
      setNewWaterStock({
        name: '',
        quantity: 0,
        unit: 'L',
        pricePerUnit: 0,
        minThreshold: 500
      });
      setShowAddWater(false);
    }
  };
  // Update water stock
  const updateWaterStock = (id, updates) => {
    setWaterInventory(prev => prev.map(water => water.id === id ? {
      ...water,
      ...updates
    } : water));
    setEditingWaterStock(null);
  };
  // Delete water stock
  const deleteWaterStock = id => {
    setWaterInventory(prev => prev.filter(water => water.id !== id));
  };
  // Calculate monthly costs
  const calculateMonthlyCosts = () => {
    const feedCosts = feedInventory.reduce((sum, feed) => sum + feed.quantity * feed.pricePerUnit, 0);
    const waterCosts = waterInventory.reduce((sum, water) => sum + water.quantity * water.pricePerUnit, 0);
    return {
      feed: feedCosts,
      water: waterCosts,
      total: feedCosts + waterCosts
    };
  };
  // Calculate feeding statistics
  const feedingStats = {
    total: pigs.length,
    fed: Object.values(pigFeedSettings).filter(s => s.fed).length,
    unfed: Object.values(pigFeedSettings).filter(s => !s.fed).length
  };
  const feedingProgress = feedingStats.fed / feedingStats.total * 100;
  const costs = calculateMonthlyCosts();
  // Calculate daily consumption per pen
  const getPenConsumption = penId => {
    const pigsInPen = pigs.filter(p => p.pen === penId);
    return {
      feed: pigsInPen.length * 2.5,
      water: pigsInPen.length * 8 // L per day
    };
  };
  // Generate feed consumption trend data (last 7 days)
  const feedTrendData = [{
    day: 'Mon',
    consumption: pigs.length * 2.5 * 0.95
  }, {
    day: 'Tue',
    consumption: pigs.length * 2.5 * 0.98
  }, {
    day: 'Wed',
    consumption: pigs.length * 2.5 * 1.02
  }, {
    day: 'Thu',
    consumption: pigs.length * 2.5 * 1.0
  }, {
    day: 'Fri',
    consumption: pigs.length * 2.5 * 1.05
  }, {
    day: 'Sat',
    consumption: pigs.length * 2.5 * 0.97
  }, {
    day: 'Sun',
    consumption: pigs.length * 2.5
  }];
  // Generate water consumption trend data (last 7 days)
  const waterTrendData = [{
    day: 'Mon',
    consumption: pigs.length * 8 * 0.92
  }, {
    day: 'Tue',
    consumption: pigs.length * 8 * 0.96
  }, {
    day: 'Wed',
    consumption: pigs.length * 8 * 1.03
  }, {
    day: 'Thu',
    consumption: pigs.length * 8 * 1.01
  }, {
    day: 'Fri',
    consumption: pigs.length * 8 * 1.08
  }, {
    day: 'Sat',
    consumption: pigs.length * 8 * 0.94
  }, {
    day: 'Sun',
    consumption: pigs.length * 8
  }];
  // Calculate total daily consumption
  const totalDailyFeed = Object.values(pigFeedSettings).reduce((sum, settings) => sum + settings.feedAmount / 1000, 0);
  const totalDailyWater = pigs.length * 8;
  // Calculate days until restock needed
  const daysUntilFeedRestock = Math.floor(feedInventory.reduce((sum, f) => sum + f.quantity, 0) / totalDailyFeed);
  const daysUntilWaterRestock = Math.floor(waterInventory.reduce((sum, w) => sum + w.quantity, 0) / totalDailyWater);
  // Check for low stock alerts
  const lowFeedStock = feedInventory.filter(f => f.quantity <= f.minThreshold);
  const lowWaterStock = waterInventory.filter(w => w.quantity <= w.minThreshold);
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Resource Management
        </h3>
        <div className="flex space-x-2">
          <button className={`px-3 py-1.5 text-sm rounded-lg transition-all ${activeResourceTab === 'feed' ? theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-600 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => setActiveResourceTab('feed')}>
            <FeedIcon size={16} className="inline mr-1.5" />
            Feed
          </button>
          <button className={`px-3 py-1.5 text-sm rounded-lg transition-all ${activeResourceTab === 'water' ? theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => setActiveResourceTab('water')}>
            <WaterIcon size={16} className="inline mr-1.5" />
            Water
          </button>
          <button className={`px-3 py-1.5 text-sm rounded-lg transition-all ${activeResourceTab === 'inventory' ? theme === 'dark' ? 'bg-purple-600 text-white' : 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={() => setActiveResourceTab('inventory')}>
            <PackageIcon size={16} className="inline mr-1.5" />
            Inventory
          </button>
        </div>
      </div>

      {/* Feed Section */}
      {activeResourceTab === 'feed' && <div className="space-y-6">
          {/* Feeding Progress */}
          <div className={`${theme === 'dark' ? 'bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-700/30' : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'} rounded-lg p-6 border`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
                  Today's Feeding Progress
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-700'} mt-1`}>
                  {feedingStats.fed} of {feedingStats.total} pigs fed
                </p>
              </div>
              <div className="text-right">
                <div className={`text-4xl font-bold ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
                  {feedingProgress.toFixed(0)}%
                </div>
              </div>
            </div>
            <div className={`w-full h-4 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500 ease-out" style={{
            width: `${feedingProgress}%`
          }} />
            </div>
          </div>

          {/* Alerts */}
          {lowFeedStock.length > 0 && <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900/20 border border-red-700/30' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-start">
                <AlertTriangleIcon size={20} className={`${theme === 'dark' ? 'text-red-400' : 'text-red-600'} mr-2 mt-0.5 flex-shrink-0`} />
                <div>
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-red-400' : 'text-red-700'} mb-1`}>
                    Low Feed Stock Alert
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-red-300' : 'text-red-800'}`}>
                    {lowFeedStock.length} feed type
                    {lowFeedStock.length > 1 ? 's' : ''} below minimum
                    threshold. Consider restocking soon.
                  </div>
                </div>
              </div>
            </div>}

          {/* Per-Pig Feed Settings Table */}
          <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg border overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <tr>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Pig ID
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Name
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Pen
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Feed Type
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Amount (g)
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Status
                    </th>
                    <th className={`px-6 py-3 text-right text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className={`${theme === 'dark' ? 'bg-gray-800/30' : 'bg-white'} divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {pigs.map(pig => {
                const settings = pigFeedSettings[pig.id] || {};
                return <tr key={pig.id} className={`${settings.fed ? theme === 'dark' ? 'bg-green-900/10' : 'bg-green-50/50' : ''} transition-colors`}>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {pig.id}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {pig.name}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {pens.find(p => p.id === pig.pen)?.name || 'Unknown'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {editingPigFeed === pig.id ? <select value={settings.feedType} onChange={e => setPigFeedSettings(prev => ({
                      ...prev,
                      [pig.id]: {
                        ...prev[pig.id],
                        feedType: e.target.value
                      }
                    }))} className={`px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`}>
                              {FEED_TYPES.map(type => <option key={type} value={type}>
                                  {type}
                                </option>)}
                            </select> : <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              {settings.feedType}
                            </span>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {editingPigFeed === pig.id ? <input type="number" value={settings.feedAmount} onChange={e => setPigFeedSettings(prev => ({
                      ...prev,
                      [pig.id]: {
                        ...prev[pig.id],
                        feedAmount: parseInt(e.target.value) || 0
                      }
                    }))} className={`w-24 px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} /> : <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              {settings.feedAmount?.toLocaleString()}g
                            </span>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {settings.fed ? <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
                              <CheckCircleIcon size={14} className="mr-1" />
                              Fed
                            </span> : <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
                              <AlertCircleIcon size={14} className="mr-1" />
                              Pending
                            </span>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            {editingPigFeed === pig.id ? <>
                                <button onClick={() => updatePigFeedSettings(pig.id, settings.feedAmount, settings.feedType)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-all active:scale-95`} title="Save">
                                  <SaveIcon size={16} />
                                </button>
                                <button onClick={() => setEditingPigFeed(null)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-all active:scale-95`} title="Cancel">
                                  <XIcon size={16} />
                                </button>
                              </> : <>
                                <button onClick={() => setEditingPigFeed(pig.id)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-all active:scale-95`} title="Edit">
                                  <EditIcon size={16} />
                                </button>
                                <button onClick={() => markPigAsFed(pig.id)} disabled={settings.fed} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${settings.fed ? theme === 'dark' ? 'bg-green-900/30 text-green-400 cursor-not-allowed' : 'bg-green-100 text-green-700 cursor-not-allowed' : theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700 active:scale-95' : 'bg-green-600 text-white hover:bg-green-700 active:scale-95'}`}>
                                  {settings.fed ? 'Fed' : 'Mark as Fed'}
                                </button>
                              </>}
                          </div>
                        </td>
                      </tr>;
              })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Feed Consumption Trend Chart */}
          <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg p-6 border`}>
            <h4 className={`text-md font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Feed Consumption Trend (Last 7 Days)
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={feedTrendData}>
                  <defs>
                    <linearGradient id="feedGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="day" tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} />
                  <YAxis tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} label={{
                value: 'Consumption (kg)',
                angle: -90,
                position: 'insideLeft',
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
              }} />
                  <Tooltip contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                borderRadius: '8px'
              }} formatter={value => [`${value.toFixed(1)} kg`, 'Consumption']} />
                  <Area type="monotone" dataKey="consumption" stroke="#22c55e" strokeWidth={2} fill="url(#feedGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>}

      {/* Water Section */}
      {activeResourceTab === 'water' && <div className="space-y-6">
          {/* Alerts */}
          {lowWaterStock.length > 0 && <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900/20 border border-red-700/30' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-start">
                <AlertTriangleIcon size={20} className={`${theme === 'dark' ? 'text-red-400' : 'text-red-600'} mr-2 mt-0.5 flex-shrink-0`} />
                <div>
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-red-400' : 'text-red-700'} mb-1`}>
                    Low Water Level Alert
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-red-300' : 'text-red-800'}`}>
                    {lowWaterStock.length} water tank
                    {lowWaterStock.length > 1 ? 's' : ''} below minimum
                    threshold. Refill immediately.
                  </div>
                </div>
              </div>
            </div>}

          {/* Add Water Button */}
          <div className="flex justify-between items-center">
            <h4 className={`text-md font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Water Inventory
            </h4>
            <button onClick={() => setShowAddWater(true)} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-all active:scale-95`}>
              <PlusIcon size={16} className="mr-1.5" />
              Add Water Stock
            </button>
          </div>

          {/* Add Water Form */}
          {showAddWater && <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'}`}>
              <h4 className={`text-md font-medium mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Add New Water Stock
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input type="text" value={newWaterStock.name} onChange={e => setNewWaterStock({
              ...newWaterStock,
              name: e.target.value
            })} placeholder="e.g., Main Tank" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Quantity (L)
                  </label>
                  <input type="number" value={newWaterStock.quantity} onChange={e => setNewWaterStock({
              ...newWaterStock,
              quantity: parseInt(e.target.value) || 0
            })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Price per Liter (₱)
                  </label>
                  <input type="number" step="0.01" value={newWaterStock.pricePerUnit} onChange={e => setNewWaterStock({
              ...newWaterStock,
              pricePerUnit: parseFloat(e.target.value) || 0
            })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Min Threshold (L)
                  </label>
                  <input type="number" value={newWaterStock.minThreshold} onChange={e => setNewWaterStock({
              ...newWaterStock,
              minThreshold: parseInt(e.target.value) || 0
            })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button onClick={() => setShowAddWater(false)} className={`px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-all active:scale-95`}>
                  Cancel
                </button>
                <button onClick={addWaterStock} className={`px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-all active:scale-95`}>
                  Add Stock
                </button>
              </div>
            </div>}

          {/* Water Inventory Table */}
          <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg border overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <tr>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Name
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Quantity
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Price per Liter
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Total Value
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Status
                    </th>
                    <th className={`px-6 py-3 text-right text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className={`${theme === 'dark' ? 'bg-gray-800/30' : 'bg-white'} divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {waterInventory.map(water => {
                const isLowStock = water.quantity <= water.minThreshold;
                const totalValue = water.quantity * water.pricePerUnit;
                return <tr key={water.id} className={`${isLowStock ? theme === 'dark' ? 'bg-red-900/10' : 'bg-red-50/50' : ''} transition-colors`}>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {water.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {editingWaterStock === water.id ? <div className="flex items-center gap-2">
                              <input type="number" value={water.quantity} onChange={e => setWaterInventory(prev => prev.map(w => w.id === water.id ? {
                        ...w,
                        quantity: parseInt(e.target.value) || 0
                      } : w))} className={`w-24 px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                {water.unit}
                              </span>
                            </div> : <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              {water.quantity.toLocaleString()} {water.unit}
                            </span>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {editingWaterStock === water.id ? <div className="flex items-center gap-2">
                              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                ₱
                              </span>
                              <input type="number" step="0.01" value={water.pricePerUnit} onChange={e => setWaterInventory(prev => prev.map(w => w.id === water.id ? {
                        ...w,
                        pricePerUnit: parseFloat(e.target.value) || 0
                      } : w))} className={`w-20 px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                            </div> : <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              ₱{water.pricePerUnit.toFixed(2)}
                            </span>}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                          ₱{totalValue.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {isLowStock ? <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
                              <AlertTriangleIcon size={14} className="mr-1" />
                              Low Stock
                            </span> : <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
                              <CheckCircleIcon size={14} className="mr-1" />
                              In Stock
                            </span>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            {editingWaterStock === water.id ? <>
                                <button onClick={() => updateWaterStock(water.id, water)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-all active:scale-95`} title="Save">
                                  <SaveIcon size={16} />
                                </button>
                                <button onClick={() => setEditingWaterStock(null)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-all active:scale-95`} title="Cancel">
                                  <XIcon size={16} />
                                </button>
                              </> : <>
                                <button onClick={() => setEditingWaterStock(water.id)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-all active:scale-95`} title="Edit">
                                  <EditIcon size={16} />
                                </button>
                                <button onClick={() => deleteWaterStock(water.id)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-red-100 text-red-600 hover:bg-red-200'} transition-all active:scale-95`} title="Delete">
                                  <Trash2Icon size={16} />
                                </button>
                              </>}
                          </div>
                        </td>
                      </tr>;
              })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Water Consumption Trend Chart */}
          <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg p-6 border`}>
            <h4 className={`text-md font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Water Consumption Trend (Last 7 Days)
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={waterTrendData}>
                  <defs>
                    <linearGradient id="waterGradient2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="day" tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} />
                  <YAxis tick={{
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280',
                fontSize: 12
              }} label={{
                value: 'Consumption (L)',
                angle: -90,
                position: 'insideLeft',
                fill: theme === 'dark' ? '#9ca3af' : '#6b7280'
              }} />
                  <Tooltip contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                borderRadius: '8px'
              }} formatter={value => [`${value.toFixed(1)} L`, 'Consumption']} />
                  <Area type="monotone" dataKey="consumption" stroke="#06b6d4" strokeWidth={2} fill="url(#waterGradient2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>}

      {/* Inventory Section */}
      {activeResourceTab === 'inventory' && <div className="space-y-6">
          {/* Feed Inventory */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Feed Inventory
              </h3>
              <button onClick={() => setShowAddFeed(true)} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-all active:scale-95`}>
                <PlusIcon size={16} className="mr-1.5" />
                Add Feed Stock
              </button>
            </div>

            {/* Add Feed Form */}
            {showAddFeed && <div className={`mb-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'}`}>
                <h4 className={`text-md font-medium mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Add New Feed Stock
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Feed Type
                    </label>
                    <select value={newFeedStock.name} onChange={e => setNewFeedStock({
                ...newFeedStock,
                name: e.target.value
              })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`}>
                      <option value="">Select feed type</option>
                      {FEED_TYPES.map(type => <option key={type} value={type}>
                          {type}
                        </option>)}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Quantity
                    </label>
                    <input type="number" value={newFeedStock.quantity} onChange={e => setNewFeedStock({
                ...newFeedStock,
                quantity: parseInt(e.target.value) || 0
              })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Unit
                    </label>
                    <select value={newFeedStock.unit} onChange={e => setNewFeedStock({
                ...newFeedStock,
                unit: e.target.value
              })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`}>
                      <option value="sacks">Sacks</option>
                      <option value="kg">Kilograms</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Price per Unit (₱)
                    </label>
                    <input type="number" value={newFeedStock.pricePerUnit} onChange={e => setNewFeedStock({
                ...newFeedStock,
                pricePerUnit: parseFloat(e.target.value) || 0
              })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Min Threshold
                    </label>
                    <input type="number" value={newFeedStock.minThreshold} onChange={e => setNewFeedStock({
                ...newFeedStock,
                minThreshold: parseInt(e.target.value) || 0
              })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button onClick={() => setShowAddFeed(false)} className={`px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-all active:scale-95`}>
                    Cancel
                  </button>
                  <button onClick={addFeedStock} className={`px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-all active:scale-95`}>
                    Add Stock
                  </button>
                </div>
              </div>}

            {/* Feed Inventory Table */}
            <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg border overflow-hidden`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className={`${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50'} border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <tr>
                      <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                        Feed Type
                      </th>
                      <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                        Quantity
                      </th>
                      <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                        Price per Unit
                      </th>
                      <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                        Total Value
                      </th>
                      <th className={`px-6 py-3 text-left text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                        Status
                      </th>
                      <th className={`px-6 py-3 text-right text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`${theme === 'dark' ? 'bg-gray-800/30' : 'bg-white'} divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    {feedInventory.map(feed => {
                  const isLowStock = feed.quantity <= feed.minThreshold;
                  const totalValue = feed.quantity * feed.pricePerUnit;
                  return <tr key={feed.id} className={`${isLowStock ? theme === 'dark' ? 'bg-red-900/10' : 'bg-red-50/50' : ''} transition-colors`}>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {feed.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {editingFeedStock === feed.id ? <div className="flex items-center gap-2">
                                <input type="number" value={feed.quantity} onChange={e => setFeedInventory(prev => prev.map(f => f.id === feed.id ? {
                          ...f,
                          quantity: parseInt(e.target.value) || 0
                        } : f))} className={`w-20 px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} />
                                <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {feed.unit}
                                </span>
                              </div> : <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                {feed.quantity} {feed.unit}
                              </span>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {editingFeedStock === feed.id ? <div className="flex items-center gap-2">
                                <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                  ₱
                                </span>
                                <input type="number" value={feed.pricePerUnit} onChange={e => setFeedInventory(prev => prev.map(f => f.id === feed.id ? {
                          ...f,
                          pricePerUnit: parseFloat(e.target.value) || 0
                        } : f))} className={`w-24 px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} />
                              </div> : <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                ₱{feed.pricePerUnit.toLocaleString()}
                              </span>}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                            ₱{totalValue.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {isLowStock ? <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
                                <AlertTriangleIcon size={14} className="mr-1" />
                                Low Stock
                              </span> : <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
                                <CheckCircleIcon size={14} className="mr-1" />
                                In Stock
                              </span>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end gap-2">
                              {editingFeedStock === feed.id ? <>
                                  <button onClick={() => updateFeedStock(feed.id, feed)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-all active:scale-95`} title="Save">
                                    <SaveIcon size={16} />
                                  </button>
                                  <button onClick={() => setEditingFeedStock(null)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-all active:scale-95`} title="Cancel">
                                    <XIcon size={16} />
                                  </button>
                                </> : <>
                                  <button onClick={() => setEditingFeedStock(feed.id)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-all active:scale-95`} title="Edit">
                                    <EditIcon size={16} />
                                  </button>
                                  <button onClick={() => deleteFeedStock(feed.id)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-red-100 text-red-600 hover:bg-red-200'} transition-all active:scale-95`} title="Delete">
                                    <Trash2Icon size={16} />
                                  </button>
                                </>}
                            </div>
                          </td>
                        </tr>;
                })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Monthly Cost Analysis */}
          <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg p-6 border`}>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Monthly Cost Analysis
            </h3>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className={`${theme === 'dark' ? 'bg-green-900/20 border-green-700/30' : 'bg-green-50 border-green-200'} rounded-lg p-4 border`}>
                <div className="flex items-center justify-between mb-2">
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
                    Total Feed Cost
                  </div>
                  <PackageIcon size={20} className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                </div>
                <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
                  ₱{costs.feed.toLocaleString()}
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-green-400' : 'text-green-700'} mt-2`}>
                  {feedInventory.length} feed types
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-blue-900/20 border-blue-700/30' : 'bg-blue-50 border-blue-200'} rounded-lg p-4 border`}>
                <div className="flex items-center justify-between mb-2">
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>
                    Total Water Cost
                  </div>
                  <DropletIcon size={20} className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-900'}`}>
                  ₱{costs.water.toLocaleString()}
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'} mt-2`}>
                  {waterInventory.reduce((sum, w) => sum + w.quantity, 0).toLocaleString()}{' '}
                  L total
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-purple-900/20 border-purple-700/30' : 'bg-purple-50 border-purple-200'} rounded-lg p-4 border`}>
                <div className="flex items-center justify-between mb-2">
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-purple-400' : 'text-purple-700'}`}>
                    Total Inventory Value
                  </div>
                  <DollarSignIcon size={20} className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                </div>
                <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-900'}`}>
                  ₱{costs.total.toLocaleString()}
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-purple-400' : 'text-purple-700'} mt-2`}>
                  Feed + Water combined
                </div>
              </div>
            </div>

            {/* Detailed Cost Breakdown */}
            <div className="space-y-4">
              <h4 className={`text-md font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Feed Cost Breakdown
              </h4>
              {feedInventory.map(feed => {
            const totalCost = feed.quantity * feed.pricePerUnit;
            const percentage = costs.feed > 0 ? totalCost / costs.feed * 100 : 0;
            return <div key={feed.id}>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {feed.name}
                        </div>
                        <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {feed.quantity} {feed.unit} × ₱
                          {feed.pricePerUnit.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                          ₱{totalCost.toLocaleString()}
                        </div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                          {percentage.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                    <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                      <div className="h-full bg-green-500 transition-all" style={{
                  width: `${percentage}%`
                }} />
                    </div>
                  </div>;
          })}
            </div>
          </div>
        </div>}
    </div>;
};
export default PenManagement;