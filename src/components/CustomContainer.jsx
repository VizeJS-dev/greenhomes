// eslint-disable-next-line react/prop-types
export const CustomContainer = ({icon : Icon, title, content}) => {
    return (
        <div className="flex flex-col justify-center overflow-hidden rounded-lg border-gray-200 bg-greenhomes-white md:h-[200px] md:border md:shadow-md">
            <div className="relative px-6 pt-6">
                {Icon && (
                    <span aria-hidden="true">
                    <Icon className="text-greenhomes-orange mb-2 h-8 w-8" />
                </span>
                )}
                <h2 className="text-xl font-semibold text-greenhomes-orange font-dm">{title}</h2>
            </div>
            <div className="px-6 py-4 h-[calc(100%-88px)] overflow-y-auto">
                <p className="text-xl text-black font-dm">{content}</p>
            </div>
        </div>
    );
};
