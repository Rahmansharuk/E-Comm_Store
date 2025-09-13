import "./index.css"
import 'flowbite';
import ReactDOM from "react-dom/client"
import Comment from "./components/Comment";
import Counter from "./components/Counter";
import Democomponent from "./components/Democomponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductLayout from "./components/ProductLayout";
import Herosection from "./components/Herosection";
import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./components/ProductDetails";
import Contactold from "./components/Contact-old";
import Contact from "./components/Contact";
import ImageComponent from "./components/ImageComponent";
import ComponentA from "./components/Prop-Drilling/ComponentA";
import UserStore from "./store/UserStore";
import Cart from "./components/Cart";
import { CartProvider } from "./store/CartContext";
import { UserProvider } from "./store/UserContext";
import LoginModal from "./components/LoginModal";
import UserDashboard from "./components/UserDashboard";
import { useUser } from "./store/UserContext";

const Home = () => {
    const { isAuthenticated, user } = useUser();
    
    return (
        <>
            {isAuthenticated && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mb-2">
                                Welcome back, {user?.name}!
                            </h1>
                            <p className="text-blue-100">
                                Ready to discover amazing products? Start shopping now!
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <Herosection />
            <ProductLayout />
        </>
    )
}

// component composition
const AppLayout = () => {
    return (
        <>
            <UserProvider>
                <CartProvider>
                    <UserStore.Provider value={{ name: "Sharuk" }}>
                        <Header />  {/* Calling a component into a other comp */}
                        <Outlet />
                    </UserStore.Provider>
                </CartProvider>
            </UserProvider>
            <Footer />

        </>
    )
}

//React router method it used to create a more sites
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/counter",
                element: <Counter />,
            },

            {
                path: "/comment",
                element: <Comment />,
            },

            //Dynamic Routing 
            {
                path: "/products/:product_id",  //1st D R process
                element: <ProductDetails />,
            },

            {
                path: "/contact",
                element: <Contact />,

            },

            {
                path: "/abc",
                element: <Contactold />,
            },

            {
                path: "/image",
                element: <ImageComponent />,
            },

            {
                path: "/products",
                element: <ProductCard />,
            },

            {
                path: "/leo",
                element: <ProductLayout />
            },

            {
                path: "/props-drilling",
                element: <ComponentA />,
            },

            {
                path: "/Cart",
                element: <Cart />,
            },

            {
                path: "/dashboard",
                element: <UserDashboard />,
            },



        ],
        errorElement: <ErrorPage /> //Error Page !st Step
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)



