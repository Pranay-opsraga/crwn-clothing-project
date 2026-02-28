const FormInput = ({ label, ...otherProps }) => {
    const { value } = otherProps;
    return (
        <div className="relative w-full my-4">
            <input
                className="peer w-full border-b border-gray-400 py-2 text-base outline-none focus:border-black"
                {...otherProps}
            />
            {label && (
                <label className={`absolute left-0 pointer-events-none text-gray-400 transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs ${value && value.length > 0 ? "-top-3 text-xs" : "top-2 text-base"}`}>
                    {label}
                </label>
            )}
        </div>
    )
}

export default FormInput;