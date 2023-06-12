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
    ...rest // This means take the remaining properties out of the props obejct
            // besides the ones we've listed here.
 }){

    const classes = className(rest.className, 'flex itemms-center px-3 py-1.5 border', {
        'border-blue-600 bg-blue-500 text-white': primary && !outlined,
        'border-gray-900 bg-gray-900 text-white': secondary && !outlined,
        'border-red-500 bg-red-500 text-white': danger && !outlined,
        'border-yellow-400 bg-yellow-400 text-white': warning && !outlined,
        'border-green-500 bg-green-500 text-white': success && !outlined,
        'rounded-full': rounded,
        'bg-white': outlined,
        'border-blue-600 text-blue-500': primary && outlined,
        'border-gray-900 text-gray-900': secondary && outlined,
        'border-red-500 text-red-500': danger && outlined,
        'border-yellow-400 text-yellow-400': warning && outlined,
        'border-green-500 text-green-500': success && outlined,
    });

    // {...rest} means take all the individual properties and values out of 
    // this object and just assign all of them as props to the button element. 
    return <button {...rest} className={classes}>{children}</button>
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