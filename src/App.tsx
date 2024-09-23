import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./routes/Home/Home.tsx";
import Contact from "./routes/Contact/Contact.tsx";
import Error from "./routes/Error.tsx";
import Projects from "./routes/Projects.tsx";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />}/>
                    <Route path="contact" element={<Contact />}/>
                    <Route path="projects" element={<Projects />}/>
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App;