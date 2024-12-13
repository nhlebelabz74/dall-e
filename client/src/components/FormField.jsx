const FormField = ({ LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2">
                <label 
                    htmlFor={name}
                    className="text-gray-900 text-sm block font-medium"
                >
                    {LabelName}
                </label>
                {isSurpriseMe && (
                    <button
                        type="button"
                        onClick={handleSurpriseMe}
                        className="font-semibold text-xs py-1 px-2 text-black rounded-md bg-light-lavender"
                    >
                        Surprise Me
                    </button>
                )}
            </div>

            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className="w-full text-dark-gray py-2 px-3 border border-gray-300 rounded-md focus:ring-blue outline-none focus:border-blue"
            />
        </div>
    );
}

export default FormField;