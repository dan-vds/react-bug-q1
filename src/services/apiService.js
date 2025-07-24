// API Service for User Management
// This simulates a real API call with mock data

export const apiService = {
    /**
     * Fetches all users from the API
     * @returns {Promise<Array>} Array of user objects
     */
    fetchUsers: () => {
        return new Promise((resolve, reject) => {
            // Simulate network delay
            setTimeout(() => {
                // Mock user data - in a real app this would be an actual API call
                const users = [
                    {
                        id: 1,
                        name: 'John Doe',
                        email: 'john.doe@example.com',
                        active: true,
                        joinDate: '2023-01-15'
                    },
                    {
                        id: 2,
                        name: 'Jane Smith',
                        email: 'jane.smith@example.com',
                        active: false,
                        joinDate: '2023-02-20'
                    },
                    {
                        id: 3,
                        name: 'Bob Johnson',
                        email: 'bob.johnson@example.com',
                        active: true,
                        joinDate: '2023-03-10'
                    },
                    {
                        id: 4,
                        name: 'Alice Brown',
                        email: 'alice.brown@example.com',
                        active: true,
                        joinDate: '2023-01-28'
                    },
                    {
                        id: 5,
                        name: 'Charlie Wilson',
                        email: 'charlie.wilson@example.com',
                        active: false,
                        joinDate: '2023-04-05'
                    },
                    {
                        id: 6,
                        name: 'Diana Martinez',
                        email: 'diana.martinez@example.com',
                        active: true,
                        joinDate: '2023-02-14'
                    }
                ];

                // Simulate occasional API failures (uncomment to test error handling)
                // if (Math.random() < 0.1) {
                //   reject(new Error('Failed to fetch users from server'));
                //   return;
                // }

                resolve(users);
            }, 1500); // 1.5 second delay to simulate real API
        });
    },

    /**
     * Updates a user's status (in a real app, this would make a PUT/PATCH request)
     * @param {number} userId - The ID of the user to update
     * @param {boolean} active - The new active status
     * @returns {Promise<Object>} Updated user object
     */
    updateUserStatus: (userId, active) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate API response
                resolve({
                    id: userId,
                    active: active,
                    updatedAt: new Date().toISOString()
                });
            }, 300);
        });
    },

    /**
     * Fetches user statistics (in a real app, this might be a separate endpoint)
     * @param {Array} users - Array of users to calculate stats from
     * @returns {Object} Statistics object
     */
    calculateUserStats: (users) => {
        const total = users.length;
        const active = users.filter(user => user.active).length;
        const inactive = total - active;

        return {
            total,
            active,
            inactive,
            activePercentage: total > 0 ? Math.round((active / total) * 100) : 0
        };
    }
  };