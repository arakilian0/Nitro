import React from "react";
import { createRoot } from "react-dom/client";
import { 
    json,
    Link,
    useLoaderData,
    RouterProvider,
    createHashRouter
} from "react-router-dom";

import "./styles.scss";

const router = createHashRouter([
    {
        path: "/",
        loader() {
            return json({ message: "Welcome to React Router!" });
        },
        Component() {
            let data = useLoaderData();
            return (
                <div>
                    <h1>{data.message}</h1>
                    <Link to="/test">Test</Link>
                </div>
            );
        },
    },
    {
        path: "/test",
        loader() {
            return json({ message: "Welcome to test!" });
        },
        Component() {
            let data = useLoaderData();
            return (
                <div>
                    <h1>{data.message}</h1>
                    <Link to="/">home</Link>
                </div>
            );
        },
    },
]);

createRoot(document.getElementById('app')).render(
    <RouterProvider router={router} />
);