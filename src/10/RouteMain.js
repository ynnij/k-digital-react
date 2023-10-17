import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import RouteNav from "./RouteNav"
const RouteMain = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <h1 className="text-2xl font-bold m-5 text-center">react-route-dom으로 라우팅</h1>
                <RouteNav /> {/* Routes 밖에 있을 때 새로 라우팅되어도 항상 있음*/}
                <Routes>
                    <Route path="/" element={<RouteHome />} ></Route> {/* 바로 RouteHome으로 라우팅 */}
                    <Route path="/page1/:item" element={<RoutePage1 />} ></Route> {/* 주소/page1 입력 시 RoutePage1로 이동 */}
                    <Route path="/page2" element={<RoutePage2 />} ></Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default RouteMain
