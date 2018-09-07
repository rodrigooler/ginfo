import { PureComponent } from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {}

export default class Theme extends PureComponent {
    public render() {
        return (
            <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
        )
    }
}
