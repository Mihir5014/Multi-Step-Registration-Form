
export default function Button({ className = '', children, onClick }) {
    return (
        <button onClick={onClick}
            className={`bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-semibold py-2 px-4 m-1 rounded shadow-md ${className}`}>
            {children}
        </button>
    )
}
