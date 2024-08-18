import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ViewCreator } from "./pages";
import { useSupabaseCreater } from "./utils";
import { CreatorCards } from "./components";
import "./App.css";

function App() {
    const { creators, addCreator, deleteCreator } = useSupabaseCreater();

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <CreatorCards
                                    creators={creators}
                                    addCreator={addCreator}
                                    deleteCreator={deleteCreator}
                                />
                            </div>
                        }
                    />
                    <Route path="/creators/:id" element={<ViewCreator />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
