export const Button = ({
                           type = "button",
                           text,
                           customSize = "", // Allows custom sizes like padding, font size
                           customStyles = "", // Allows passing other custom styles
                           variant = "primary", // Used for default color variants
                       }) => {
    // Define Tailwind classes for look/variant
    const variantClasses = {
        primary: "bg-greenhomes-green text-white hover:bg-greenhomes-orange",
        secondary: "bg-greenhomes-gray text-black hover:bg-greenhomes-lightgreen",
    };

    return (
        <button
            type={type}
            className={`${customSize} ${variantClasses[variant]} ${customStyles} transition duration-200 rounded-lg`}
        >
            {text}
        </button>
    );
};