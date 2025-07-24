// LoadingSpinner Component
// Displays a loading spinner while data is being fetched

export default function LoadingSpinner() {
    return (
        <div className="loading-container">
            <div className="loading-content">
                <div className="spinner"></div>
                <p className="loading-text">Loading users...</p>
            </div>
        </div>
    );
  }