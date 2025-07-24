// Main Page Component
// Root component that manages all user data and state

'use client';

import { useState, useEffect } from 'react';
import { apiService } from '@/services/apiService';
import Header from '@/components/Header';
import Statistics from '@/components/Statistics';
import UserList from '@/components/UserList';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load users when component mounts
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const userData = await apiService.fetchUsers();
        setUsers(userData);
      } catch (err) {
        console.error('Failed to load users:', err);
        setError('Failed to load users. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Handle toggling user active status
  const handleToggleActive = (userId) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId
          ? { ...user, active: !user.active }
          : user
      )
    );
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return <LoadingSpinner />;
  }

  // Show error message if something went wrong
  if (error) {
    return <ErrorMessage error={error} />;
  }

  // Main application render
  return (
    <div className="container">
      <Header />
      <Statistics users={users} />
      <UserList users={users} onToggleActive={handleToggleActive} />
    </div>
  );
}