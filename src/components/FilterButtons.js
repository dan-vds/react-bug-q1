// FilterButtons Component
// Provides filtering options for the user list
// 🐛 BUG: There's an issue with the onClick handler in this component

export default function FilterButtons({ filter, setFilter, users }) {
    const totalCount = users.length;
    const activeCount = users.filter(u => u.active).length;
    const inactiveCount = totalCount - activeCount;

    return (
        <div className="filter-buttons">
            <button
                onClick={setFilter('all')}
                className={`filter-btn ${filter === 'all' ? 'active' : 'inactive'}`}
            >
                All Users ({totalCount})
            </button>
            <button
                onClick={setFilter('active')}
                className={`filter-btn ${filter === 'active' ? 'active' : 'inactive'}`}
            >
                Active ({activeCount})
            </button>
            <button
                onClick={setFilter('inactive')}
                className={`filter-btn ${filter === 'inactive' ? 'active' : 'inactive'}`}
            >
                Inactive ({inactiveCount})
            </button>
        </div>
    );
  }