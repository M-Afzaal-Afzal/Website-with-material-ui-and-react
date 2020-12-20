import Header from "./components/ui/Header/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./components/ui/Theme";
import Footer from "./components/ui/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import CustomSoftware from "./components/ServicesPage/CustomSoftware/CustomSoftware";
import AppDevelopment from "./components/ServicesPage/appDevelopment/appDevelopment";
import WebDevelopment from "./components/ServicesPage/WebDevelopment/WebDevelopment";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import RevolutionPage from "./components/RevolutionPage/RevolutionPage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header/>
                <Switch>

                    <Route path='/services'>
                        <ServicesPage/>
                    </Route>

                    <Route path='/customSoftware'>
                        <CustomSoftware/>
                    </Route>

                    <Route path='/mobileApps'>
                        <AppDevelopment/>
                    </Route>

                    <Route path='/websites'>
                        <WebDevelopment/>
                    </Route>

                    <Route path='/about'>
                        <AboutUsPage/>
                    </Route>

                    <Route path='/contactus'>
                        <h1>contactus</h1>
                    </Route>

                    <Route path='/estimate'>
                        <h1>estimate</h1>
                    </Route>

                    <Route path='/revolution'>
                        <RevolutionPage/>
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
