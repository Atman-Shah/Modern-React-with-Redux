import className from "classnames";

function Button({ 
    children,
    primary,
    secondary,
    danger,
    warning,
    success,
    outlined,
    rounded,
 }){
    return <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({ primary,
        secondary,
        danger,
        warning,
        success }) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!danger)
        + Number(!!success)

        if(count > 1){
            return new Error('Only one of primary, secondary, warning, danger, success can be true.')
        }
    },
};

export default Button;