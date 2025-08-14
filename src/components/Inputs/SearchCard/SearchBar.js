import React from "react";

function SearchBar({ value, onChange, onSearch }) {
    return (
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <input
                type="text"
                placeholder="ค้นหาเกม..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{
                    flex: 1,
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
            <button
                onClick={onSearch}
                style={{
                    padding: "8px 16px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                ค้นหา
            </button>
        </div>
    );
}

export default SearchBar;
