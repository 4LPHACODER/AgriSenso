import React from 'react';
import { UsersIcon } from 'lucide-react';
const MembershipInfo = () => {
  return <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
      <div className="flex items-center mb-3">
        <UsersIcon size={18} className="text-green-700 mr-2" />
        <h3 className="font-semibold text-gray-800">Community Members</h3>
      </div>
      <div className="flex items-center">
        <div className="flex -space-x-3 mr-4">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Member" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Member" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Member" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Member" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
          <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-white flex items-center justify-center shadow-sm">
            <span className="text-xs font-medium text-green-700">+8k</span>
          </div>
        </div>
        <div>
          <div className="font-semibold text-gray-800">12,000+ Members</div>
          <div className="text-sm text-gray-600">
            Join our farming community
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-lg p-2 text-center">
          <div className="text-sm font-medium text-gray-800">240+</div>
          <div className="text-xs text-gray-500">Farming Experts</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 text-center">
          <div className="text-sm font-medium text-gray-800">85%</div>
          <div className="text-xs text-gray-500">Success Rate</div>
        </div>
      </div>
    </div>;
};
export default MembershipInfo;