
export default function Button({ type, className = '', children, disabled, ...rest }) {
    return (

        <button
            type={type}
            disabled={disabled}
            {...rest}
            className={`py-2 px-4 m-1 rounded shadow-md font-semibold 
        ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 cursor-pointer text-white'} 
        ${className}`}
        >
            {children}
        </button>
    )
}
