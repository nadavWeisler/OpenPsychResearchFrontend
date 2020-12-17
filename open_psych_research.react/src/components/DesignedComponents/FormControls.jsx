import { withStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core'

export const DesignedFormControl = withStyles({
    root: {
        padding: 16,
        margin: 16
    }
})(FormControl);