// ErrorMessage Component
// Displays error messages with a retry button

export default function ErrorMessage({ error }) {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className="error-container">
            <div className="error-content">
                <p>{error}</p>
                <button onClick={handleRetry} className="retry-btn">
                    Retry
                </button>
            </div>
        </div>
    );
  }