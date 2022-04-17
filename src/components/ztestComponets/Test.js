//import Select from "react-select/dist/declarations/src/Select";

export const Select = ({
    name,
    value,
    options,
    onChange,
    className,
    placeholder,
}) => {
    return (
        <div className="max-w-9xl mb-4">
            <Select
                name={name}
                className={className}
                placeholder={placeholder}
                value={value}
                options={options}
                onChange={onChange}
            />
        </div>
    );
};
