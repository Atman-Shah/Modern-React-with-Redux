import PropTypes from "prop-types";

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
    return <button className="bg-blue-500">{children}</button>
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