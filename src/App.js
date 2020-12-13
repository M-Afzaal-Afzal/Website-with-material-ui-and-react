import Header from "./components/ui/Header/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./components/ui/Theme";
import Footer from "./components/ui/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header/>
                <Switch>

                    <Route path='/services'>
                        <h1>services</h1>
                    </Route>

                    <Route path='/customSoftware'>
                        <h1>customSoftware</h1>
                    </Route>

                    <Route path='/mobileApps'>
                        <h1>mobileApps</h1>
                    </Route>

                    <Route path='/websites'>
                        <h1>websites</h1>
                    </Route>

                    <Route path='/about'>
                        <h1>about</h1>
                    </Route>

                    <Route path='/contactus'>
                        <h1>contactus</h1>
                    </Route>

                    <Route path='/estimate'>
                        <h1>estimate</h1>
                    </Route>

                    <Route path='/revolution'>
                        <h1>revolution</h1>
                    </Route>

                    <Route path='/'>
                        <LandingPage/>
                    </Route>

                </Switch>
                <Footer/>
            </Router>
        </ThemeProvider>

    );
}

export default App;
