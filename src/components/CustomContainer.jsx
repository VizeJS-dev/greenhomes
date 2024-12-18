export const CustomContainer = ({icon : Icon, title, content}) => {
    return (
        <div className="w-[90%] md:h-[200px] bg-greenhomes-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="relative pt-12 px-6">
                {Icon && (
                    <span aria-hidden="true">
                    <Icon className="w-8 h-8" />
                </span>
                )}
                <h2 className="text-xl font-dm font-semibold text-gray-800">{title}</h2>
            </div>
            <div className="px-6 py-4 h-[calc(100%-88px)] overflow-y-auto">
                <p className="font-dm text-xl text-gray-600">{content}</p>
            </div>
        </div>
    );
};
