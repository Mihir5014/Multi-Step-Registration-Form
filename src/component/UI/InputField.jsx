
export default function InputField({
    type = 'text',
    name,
    value,
    placeholder,
}) {
    return (
        <div>
            <input type={type} name={name} placeholder={placeholder} value={value}
                className="w-100 border rounded-md focus:outline-none p-2 m-2" />
        </div>
    )
}
