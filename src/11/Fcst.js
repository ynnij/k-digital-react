import { BrowserRouter, Routes, Route } from "react-router-dom"
import FcstMain from "./FcstMain"
import VilageFcst from "./VilageFcst"
import UltraSrtFcst from "./UltraSrtFcst"
import FcstNav from "./FcstNav"
const Fcst = () => {
    return (
        <BrowserRouter>
            <FcstNav />
            <Routes>
                <Route path="/" element={<FcstMain />} />
                <Route path="/ultra/:dt/:area/:x/:y" element={<UltraSrtFcst />}/>
                <Route path="/vilage/:dt/:area/:x/:y" element={<VilageFcst />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Fcst
