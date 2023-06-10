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

    const classes = className('px-3 py-1.5 border', {
        'border-blue-600 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-red-500 bg-red-500 text-white': danger,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-green-500 bg-green-500 text-white': success,
    });

    return <button className={classes}>{children}</button>
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