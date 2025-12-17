import React, { useState } from 'react';
import { PlusIcon, Trash2Icon, EditIcon, SaveIcon, XIcon, PackageIcon, DropletIcon, DollarSignIcon, AlertCircleIcon, CheckCircleIcon, AlertTriangleIcon, SearchIcon, FilterIcon, TrendingUpIcon, TrendingDownIcon, CheckIcon } from 'lucide-react';
// Philippine feed types
const FEED_TYPES = ['B-MEG Starter Feed', 'VIEPro Grower Feed', 'Purina Turbo Finisher', 'Rice Bran Mix', 'Soybean Meal Blend'];
// Initial mock data for pigs with feed settings
const initialPigFeedData = [{
  id: 'P001',
  name: 'Bacon',
  pen: 'Pen A',
  feedType: 'B-MEG Starter Feed',
  feedAmount: 2500,
  fedToday: false,
  lastFed: null
}, {
  id: 'P002',
  name: 'Hamlet',
  pen: 'Pen A',
  feedType: 'VIEPro Grower Feed',
  feedAmount: 3000,
  fedToday: false,
  lastFed: null
}, {
  id: 'P003',
  name: 'Peppa',
  pen: 'Pen B',
  feedType: 'Purina Turbo Finisher',
  feedAmount: 3500,
  fedToday: false,
  lastFed: null
}, {
  id: 'P004',
  name: 'Wilbur',
  pen: 'Pen B',
  feedType: 'Rice Bran Mix',
  feedAmount: 2000,
  fedToday: false,
  lastFed: null
}, {
  id: 'P005',
  name: 'Porky',
  pen: 'Pen C',
  feedType: 'Soybean Meal Blend',
  feedAmount: 2800,
  fedToday: false,
  lastFed: null
}];
// Initial feed inventory
const initialFeedInventory = [{
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
}];
// Initial water inventory
const initialWaterInventory = [{
  id: 1,
  name: 'Water Supply',
  quantity: 2000,
  unit: 'L',
  pricePerUnit: 0.5,
  minThreshold: 500
}];
const ResourceManagement = ({
  theme
}) => {
  const [activeTab, setActiveTab] = useState('feed-management');
  const [pigFeedData, setPigFeedData] = useState(initialPigFeedData);
  const [feedInventory, setFeedInventory] = useState(initialFeedInventory);
  const [waterInventory, setWaterInventory] = useState(initialWaterInventory);
  const [editingPig, setEditingPig] = useState(null);
  const [editingFeed, setEditingFeed] = useState(null);
  const [editingWater, setEditingWater] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterFedStatus, setFilterFedStatus] = useState('all'); // all, fed, unfed
  // Add new feed stock
  const [showAddFeed, setShowAddFeed] = useState(false);
  const [newFeed, setNewFeed] = useState({
    name: '',
    quantity: 0,
    unit: 'sacks',
    pricePerUnit: 0,
    minThreshold: 10
  });
  // Add new water stock
  const [showAddWater, setShowAddWater] = useState(false);
  const [newWater, setNewWater] = useState({
    name: '',
    quantity: 0,
    unit: 'L',
    pricePerUnit: 0,
    minThreshold: 500
  });
  // Mark pig as fed
  const markPigAsFed = pigId => {
    setPigFeedData(prev => prev.map(pig => pig.id === pigId ? {
      ...pig,
      fedToday: true,
      lastFed: new Date().toISOString()
    } : pig));
  };
  // Update pig feed settings
  const updatePigFeedSettings = (pigId, feedType, feedAmount) => {
    setPigFeedData(prev => prev.map(pig => pig.id === pigId ? {
      ...pig,
      feedType,
      feedAmount: parseInt(feedAmount) || 0
    } : pig));
    setEditingPig(null);
  };
  // Add feed inventory
  const addFeedInventory = () => {
    if (newFeed.name && newFeed.quantity > 0) {
      setFeedInventory(prev => [...prev, {
        ...newFeed,
        id: prev.length > 0 ? Math.max(...prev.map(f => f.id)) + 1 : 1
      }]);
      setNewFeed({
        name: '',
        quantity: 0,
        unit: 'sacks',
        pricePerUnit: 0,
        minThreshold: 10
      });
      setShowAddFeed(false);
    }
  };
  // Update feed inventory
  const updateFeedInventory = (id, updates) => {
    setFeedInventory(prev => prev.map(feed => feed.id === id ? {
      ...feed,
      ...updates
    } : feed));
    setEditingFeed(null);
  };
  // Delete feed inventory
  const deleteFeedInventory = id => {
    setFeedInventory(prev => prev.filter(feed => feed.id !== id));
  };
  // Add water inventory
  const addWaterInventory = () => {
    if (newWater.name && newWater.quantity > 0) {
      setWaterInventory(prev => [...prev, {
        ...newWater,
        id: prev.length > 0 ? Math.max(...prev.map(w => w.id)) + 1 : 1
      }]);
      setNewWater({
        name: '',
        quantity: 0,
        unit: 'L',
        pricePerUnit: 0,
        minThreshold: 500
      });
      setShowAddWater(false);
    }
  };
  // Update water inventory
  const updateWaterInventory = (id, updates) => {
    setWaterInventory(prev => prev.map(water => water.id === id ? {
      ...water,
      ...updates
    } : water));
    setEditingWater(null);
  };
  // Delete water inventory
  const deleteWaterInventory = id => {
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
  // Filter pigs
  const filteredPigs = pigFeedData.filter(pig => {
    const matchesSearch = pig.name.toLowerCase().includes(searchQuery.toLowerCase()) || pig.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterFedStatus === 'all' || filterFedStatus === 'fed' && pig.fedToday || filterFedStatus === 'unfed' && !pig.fedToday;
    return matchesSearch && matchesFilter;
  });
  // Calculate feeding statistics
  const feedingStats = {
    total: pigFeedData.length,
    fed: pigFeedData.filter(p => p.fedToday).length,
    unfed: pigFeedData.filter(p => !p.fedToday).length,
    progress: pigFeedData.filter(p => p.fedToday).length / pigFeedData.length * 100
  };
  const costs = calculateMonthlyCosts();
  const tabItems = [{
    id: 'feed-management',
    name: 'Feed Management',
    icon: <PackageIcon size={18} />
  }, {
    id: 'inventory',
    name: 'Inventory',
    icon: <PackageIcon size={18} />
  }, {
    id: 'cost-analysis',
    name: 'Cost Analysis',
    icon: <DollarSignIcon size={18} />
  }];
  return <div className="mb-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Resource Management
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
          {/* Feed Management Tab */}
          {activeTab === 'feed-management' && <div className="space-y-6">
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
                      {feedingStats.progress.toFixed(0)}%
                    </div>
                  </div>
                </div>
                <div className={`w-full h-4 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500 ease-out" style={{
                width: `${feedingStats.progress}%`
              }} />
                </div>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <SearchIcon size={18} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                  <input type="text" placeholder="Search by pig name or ID..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className={`w-full pl-10 pr-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setFilterFedStatus('all')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterFedStatus === 'all' ? theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-600 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                    All ({feedingStats.total})
                  </button>
                  <button onClick={() => setFilterFedStatus('fed')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterFedStatus === 'fed' ? theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-600 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                    Fed ({feedingStats.fed})
                  </button>
                  <button onClick={() => setFilterFedStatus('unfed')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterFedStatus === 'unfed' ? theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-600 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                    Unfed ({feedingStats.unfed})
                  </button>
                </div>
              </div>

              {/* Pig Feed Table */}
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
                      {filteredPigs.map(pig => <tr key={pig.id} className={`${pig.fedToday ? theme === 'dark' ? 'bg-green-900/10' : 'bg-green-50/50' : ''} transition-colors`}>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            {pig.id}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {pig.name}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {pig.pen}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {editingPig === pig.id ? <select value={pig.feedType} onChange={e => setPigFeedData(prev => prev.map(p => p.id === pig.id ? {
                        ...p,
                        feedType: e.target.value
                      } : p))} className={`px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`}>
                                {FEED_TYPES.map(type => <option key={type} value={type}>
                                    {type}
                                  </option>)}
                              </select> : <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                {pig.feedType}
                              </span>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {editingPig === pig.id ? <input type="number" value={pig.feedAmount} onChange={e => setPigFeedData(prev => prev.map(p => p.id === pig.id ? {
                        ...p,
                        feedAmount: parseInt(e.target.value) || 0
                      } : p))} className={`w-24 px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} /> : <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                {pig.feedAmount.toLocaleString()}g
                              </span>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {pig.fedToday ? <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
                                <CheckCircleIcon size={14} className="mr-1" />
                                Fed
                              </span> : <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
                                <AlertCircleIcon size={14} className="mr-1" />
                                Pending
                              </span>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end gap-2">
                              {editingPig === pig.id ? <>
                                  <button onClick={() => updatePigFeedSettings(pig.id, pig.feedType, pig.feedAmount)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-all active:scale-95`} title="Save">
                                    <SaveIcon size={16} />
                                  </button>
                                  <button onClick={() => setEditingPig(null)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-all active:scale-95`} title="Cancel">
                                    <XIcon size={16} />
                                  </button>
                                </> : <>
                                  <button onClick={() => setEditingPig(pig.id)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-all active:scale-95`} title="Edit">
                                    <EditIcon size={16} />
                                  </button>
                                  <button onClick={() => markPigAsFed(pig.id)} disabled={pig.fedToday} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${pig.fedToday ? theme === 'dark' ? 'bg-green-900/30 text-green-400 cursor-not-allowed' : 'bg-green-100 text-green-700 cursor-not-allowed' : theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700 active:scale-95' : 'bg-green-600 text-white hover:bg-green-700 active:scale-95'}`}>
                                    {pig.fedToday ? 'Fed' : 'Mark as Fed'}
                                  </button>
                                </>}
                            </div>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>}

          {/* Inventory Tab */}
          {activeTab === 'inventory' && <div className="space-y-6">
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
                        <select value={newFeed.name} onChange={e => setNewFeed({
                    ...newFeed,
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
                        <input type="number" value={newFeed.quantity} onChange={e => setNewFeed({
                    ...newFeed,
                    quantity: parseInt(e.target.value) || 0
                  })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          Unit
                        </label>
                        <select value={newFeed.unit} onChange={e => setNewFeed({
                    ...newFeed,
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
                        <input type="number" value={newFeed.pricePerUnit} onChange={e => setNewFeed({
                    ...newFeed,
                    pricePerUnit: parseFloat(e.target.value) || 0
                  })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          Min Threshold
                        </label>
                        <input type="number" value={newFeed.minThreshold} onChange={e => setNewFeed({
                    ...newFeed,
                    minThreshold: parseInt(e.target.value) || 0
                  })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-green-500`} />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button onClick={() => setShowAddFeed(false)} className={`px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-all active:scale-95`}>
                        Cancel
                      </button>
                      <button onClick={addFeedInventory} className={`px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-all active:scale-95`}>
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
                                {editingFeed === feed.id ? <div className="flex items-center gap-2">
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
                                {editingFeed === feed.id ? <div className="flex items-center gap-2">
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
                                  {editingFeed === feed.id ? <>
                                      <button onClick={() => updateFeedInventory(feed.id, feed)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'} transition-all active:scale-95`} title="Save">
                                        <SaveIcon size={16} />
                                      </button>
                                      <button onClick={() => setEditingFeed(null)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-all active:scale-95`} title="Cancel">
                                        <XIcon size={16} />
                                      </button>
                                    </> : <>
                                      <button onClick={() => setEditingFeed(feed.id)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-all active:scale-95`} title="Edit">
                                        <EditIcon size={16} />
                                      </button>
                                      <button onClick={() => deleteFeedInventory(feed.id)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-red-100 text-red-600 hover:bg-red-200'} transition-all active:scale-95`} title="Delete">
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

              {/* Water Inventory */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Water Inventory
                  </h3>
                  <button onClick={() => setShowAddWater(true)} className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-all active:scale-95`}>
                    <PlusIcon size={16} className="mr-1.5" />
                    Add Water Stock
                  </button>
                </div>

                {/* Add Water Form */}
                {showAddWater && <div className={`mb-4 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200'}`}>
                    <h4 className={`text-md font-medium mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      Add New Water Stock
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          Name
                        </label>
                        <input type="text" value={newWater.name} onChange={e => setNewWater({
                    ...newWater,
                    name: e.target.value
                  })} placeholder="e.g., Main Tank" className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          Quantity (L)
                        </label>
                        <input type="number" value={newWater.quantity} onChange={e => setNewWater({
                    ...newWater,
                    quantity: parseInt(e.target.value) || 0
                  })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          Price per Liter (₱)
                        </label>
                        <input type="number" step="0.01" value={newWater.pricePerUnit} onChange={e => setNewWater({
                    ...newWater,
                    pricePerUnit: parseFloat(e.target.value) || 0
                  })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          Min Threshold (L)
                        </label>
                        <input type="number" value={newWater.minThreshold} onChange={e => setNewWater({
                    ...newWater,
                    minThreshold: parseInt(e.target.value) || 0
                  })} className={`w-full px-3 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button onClick={() => setShowAddWater(false)} className={`px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-all active:scale-95`}>
                        Cancel
                      </button>
                      <button onClick={addWaterInventory} className={`px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-all active:scale-95`}>
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
                                {editingWater === water.id ? <div className="flex items-center gap-2">
                                    <input type="number" value={water.quantity} onChange={e => setWaterInventory(prev => prev.map(w => w.id === water.id ? {
                              ...w,
                              quantity: parseInt(e.target.value) || 0
                            } : w))} className={`w-24 px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                                    <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                      {water.unit}
                                    </span>
                                  </div> : <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {water.quantity.toLocaleString()}{' '}
                                    {water.unit}
                                  </span>}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {editingWater === water.id ? <div className="flex items-center gap-2">
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
                                  {editingWater === water.id ? <>
                                      <button onClick={() => updateWaterInventory(water.id, water)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-all active:scale-95`} title="Save">
                                        <SaveIcon size={16} />
                                      </button>
                                      <button onClick={() => setEditingWater(null)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-all active:scale-95`} title="Cancel">
                                        <XIcon size={16} />
                                      </button>
                                    </> : <>
                                      <button onClick={() => setEditingWater(water.id)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-all active:scale-95`} title="Edit">
                                        <EditIcon size={16} />
                                      </button>
                                      <button onClick={() => deleteWaterInventory(water.id)} className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30' : 'bg-red-100 text-red-600 hover:bg-red-200'} transition-all active:scale-95`} title="Delete">
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
            </div>}

          {/* Cost Analysis Tab */}
          {activeTab === 'cost-analysis' && <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`${theme === 'dark' ? 'bg-green-900/20 border-green-700/30' : 'bg-green-50 border-green-200'} rounded-lg p-6 border`}>
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

                <div className={`${theme === 'dark' ? 'bg-blue-900/20 border-blue-700/30' : 'bg-blue-50 border-blue-200'} rounded-lg p-6 border`}>
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

                <div className={`${theme === 'dark' ? 'bg-purple-900/20 border-purple-700/30' : 'bg-purple-50 border-purple-200'} rounded-lg p-6 border`}>
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
              <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg p-6 border`}>
                <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Feed Cost Breakdown
                </h3>
                <div className="space-y-4">
                  {feedInventory.map(feed => {
                const totalCost = feed.quantity * feed.pricePerUnit;
                const percentage = totalCost / costs.feed * 100;
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

              <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'} rounded-lg p-6 border`}>
                <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Water Cost Breakdown
                </h3>
                <div className="space-y-4">
                  {waterInventory.map(water => {
                const totalCost = water.quantity * water.pricePerUnit;
                const percentage = costs.water > 0 ? totalCost / costs.water * 100 : 0;
                return <div key={water.id}>
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                              {water.name}
                            </div>
                            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              {water.quantity.toLocaleString()} {water.unit} × ₱
                              {water.pricePerUnit.toFixed(2)}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                              ₱{totalCost.toLocaleString()}
                            </div>
                            <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                              {percentage.toFixed(1)}%
                            </div>
                          </div>
                        </div>
                        <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                          <div className="h-full bg-blue-500 transition-all" style={{
                      width: `${percentage}%`
                    }} />
                        </div>
                      </div>;
              })}
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default ResourceManagement;