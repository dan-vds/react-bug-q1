// UserList Component
// Manages the list of users with filtering functionality

import { useState } from 'react';
import UserCard from './UserCard';
import FilterButtons from './FilterButtons';

export default function UserList({ users, onToggleActive }) {
    const [filter, setFilter] = useState('all');

    // Filter users based on current filter selection
    const filteredUsers = users.filter(user => {
        if (filter === 'active') return user.active;
        if (filter === 'inactive') return !user.active;
        return true; // 'all' filter
    });

    return (
        <div>
            <FilterButtons
                filter={filter}
                setFilter={setFilter}
                users={users}
            />

            <div className="user-grid">
                {filteredUsers.map(user => (
                    <UserCard
                        key={user.id}
                        user={user}
                        onToggleActive={onToggleActive}
                    />
                ))}
            </div>

            {filteredUsers.length === 0 && (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                    No users found matching the current filter.
                </div>
            )}
        </div>
    );
}