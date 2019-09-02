import PropTypes from 'prop-types'

export const TextColors = ['inherit', 'alpha', 'beta', 'gamma', 'invert']
export const TextVariants = [
    'giga',
    'mega',
    'alpha',
    'beta',
    'gamma',
    'delta',
    'epsilon',
    'zeta',
    'iota',
    'omega',
    'caption',
    'legal',
    'p',
]

export default {
    // TextColors: PropTypes.oneOf(TextColors),
    // TextVariants: PropTypes.oneOf(TextVariants),
    // ButtonVariants: PropTypes.oneOf([
    //     'ghost',
    //     'primary',
    //     'secondary',
    //     'inline',
    // ]),
    // ButtonColors: PropTypes.oneOf(['default', 'inverted']),
    // ButtonSizes: PropTypes.oneOf(['normal', 'compact']),
    // ExpansionPanelVariants: PropTypes.oneOf(['normal', 'ghost']),
    // ExpansionPanelColors: PropTypes.oneOf(['default', 'inverted']),
    // IconButtonVariants: PropTypes.oneOf(['ghost', 'normal']),
    // IconButtonSizes: PropTypes.oneOf(['normal', 'compact']),
    // IconButtonColors: PropTypes.oneOf(['default', 'inverted', 'inherit']),
    // SelectColors: PropTypes.oneOf(['default', 'inverted']),
    // SelectVariants: PropTypes.oneOf(['normal', 'ghost']),
    // ChipSizes: PropTypes.oneOf(['normal', 'compact']),
    // ChipColors: PropTypes.oneOf(['default', 'inverted']),
    // ChipVariants: PropTypes.oneOf(['primary', 'secondary']),

    button: {
        variant: PropTypes.oneOf(['ghost', 'primary', 'secondary', 'inline']),
        colors: PropTypes.oneOf(['default', 'inverted']),
        sizes: PropTypes.oneOf(['normal', 'compact']),
    },
}
