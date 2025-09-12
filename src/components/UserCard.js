// UserCard Component
// Displays individual user information with toggle functionality

export default function UserCard({ user, onToggleActive }) {
    return (
        <div className="user-card">
            <div className="user-card-content">
                <div className="user-info">
                    <h3>{user.name}</h3>
                    <p>john.doe@example.com</p>
                    <span className={`user-status ${user.active ? 'active' : 'inactive'}`}>
                        {user.active ? 'Active' : 'Inactive'}
                    </span>
                </div>
                <button
                    onClick={() => onToggleActive(user.id)}
                    className={`toggle-btn ${user.active ? 'deactivate' : 'activate'}`}
                >
                    {user.active ? 'Activate' : 'Deactivate'}
                </button>
            </div>
        </div>
    );
  }