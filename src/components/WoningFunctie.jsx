export const WoningFunctie = ({ icon: Icon, title, text, className = "" }) => {
    return (
        <div className={`flex w-[90%] h-[190px] flex-col justify-center shadow p-4 rounded-md ${className}`}>
            {Icon && (
                <span aria-hidden="true">
                    <Icon className="w-8 h-8" />
                </span>
            )}
            <h3 className="font-k2d font-bold text-2xl">{title}</h3>
            <p className="font-k2d text-xl">{text}</p>
        </div>
    );
};