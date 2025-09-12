// Statistics Component
// Displays user statistics (total, active, inactive counts)

export default function Statistics({ users }) {
    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.active).length;
    const inactiveUsers = users.filter(user => !user.active).length + 1;

    return (
        <div className="statistics">
            <h2>User Statistics</h2>
            <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-number total">{totalUsers}</div>
                    <div className="stat-label">Total Users</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number active">{activeUsers}</div>
                    <div className="stat-label">Active Users</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number inactive">{inactiveUsers}</div>
                    <div className="stat-label">Inactive Users</div>
                </div>
            </div>
        </div>
    );
  }