
export default function InputField({
    type = 'text',
    name,
    id,
    value,
    placeholder,
    onChange,
    onBlur,
    error,
    touched
}) {
    return (
        <div className="w-full">
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className="w-full border rounded-md focus:outline-none p-2 m-1"
            />
            {error && touched && (
                <p className="text-sm text-red-500 px-2">{error}</p>
            )}
        </div>
    )
}
