import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'

export const DesignedPaper = withStyles({
    root: {
        padding: 16
    }
})(Paper);

export const CarouselPaper = withStyles({
    root: {
        padding: 70
    }
})(Paper);