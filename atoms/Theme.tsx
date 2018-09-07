import { PureComponent } from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    background: '#000000',
    fontColor: '#FFFFFF',
}

export default class Theme extends PureComponent {
    public render() {
        return (
            <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
        )
    }
}
