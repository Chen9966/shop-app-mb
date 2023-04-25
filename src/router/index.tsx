import {
  useRoutes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import Index from "@/Pages/index";
import Home from "@/Pages/Home";
import Sort from "@/Pages/Sort";
import ShopCar from "@/Pages/ShopCar/ShopCar";
import UserCenter from "@/Pages/UserCenter";
import Tests from "@/Pages/testss/test";
import Login from "@/Pages/Login";
import Setpassword from "@/Pages/SetPassword";
import Userxinxi from "@/Pages/UserXinxi/index";
import Mycode from "@/Pages/Qr";
import Register from "@/Pages/Regist";
import Addaddress from "@/Pages/Addaddress";
import SelectAddress from "@/Pages/SelectAddress";
import MyOrder from "@/Pages/MyOrder";
import Details from "@/Pages/Details/Details";
import Serve from "@/Pages/Serve";
import Search from "@/Pages/Search";
import SearchList from "@/Pages/SearchList";
import ConfirmOrder from "@/Pages/ConfirmOrder";
import PayCenter from "@/Pages/payCenter";
import Secondary from '@/Pages/Secondary'

const Router = () => {
  const push = useNavigate();
  const location = useLocation();
  let routes = [
    {
      path: "/",
      element: <Navigate to="/home"></Navigate>,
    },
    {
      path: "/",
      element: <Index />,
      children: [
        {
          path: "/home",
          element: <Home />,
          auth: false,
        },
        {
          path: "/sort",
          element: <Sort />,
          auth: false,
        },
        {
          path: "/shopcar",
          element: <ShopCar />,
          auth: false,
        },
        {
          path: "/usercenter",
          element: <UserCenter />,
          auth: false,
        },
      ],
    },
    {
      path: "/details/:id",
      element: <Details />,
      auth: false,
    },
    {
      path: "/serve",
      element: <Serve />,
      auth: false,
    },
    // 确认订单
    {
      path: "/entorder",
      element: <ConfirmOrder />,
      auth: true,
    },
    //跳转支付
    {
      path: "/paycenter",
      element: <PayCenter />,
      auth: true,
    },
    //登陆页面
    {
      path: "/login",
      element: <Login />,
      auth: false,
    },
    //修改密码
    {
      path: "/setpassword",
      element: <Setpassword />,
      auth: false,
    },
    //我的订单
    {
      path: "/myorder",
      element: <MyOrder />,
      auth: true,
    },
    {
      path: "/mycode",
      element: <Mycode />,
      auth: true,
    },
    //选择地址
    {
      path: "/addaddress",
      element: <Addaddress />,
      auth: true,
    },
    //添加地址
    {
      path: "/selectaddres",
      element: <SelectAddress />,
      auth: true,
    },
    //注册页面
    {
      path: "/register",
      element: <Register />,
      auth: false,
    },
    //个人信息
    {
      path: "/userxinxi",
      element: <Userxinxi />,
      auth: true,
    },
    {
      path: "/test",
      element: <Tests></Tests>,
      auth: false,
    },
    {
      path: "/search",
      element: <Search />,
      auth: false,
    },
    {
      path: "/list",
      element: <SearchList />,
      auth: false,
    },
    {
      path:'/secondary/:title',
      element:<Secondary/>,
      auth:false
    }
  ];
  let getToken = () => {
    let token = localStorage.getItem("token");
    return token ? true : false;
  };
  useEffect(() => {
    routes.forEach((item) => {
      if (item.path == location.pathname) {
        if (item.auth && !getToken()) {
          push("/login");
        }
      } else {
        if (item.children) {
          item.children.forEach((ele) => {
            if (ele.path == location.pathname) {
              if (ele.auth && !getToken()) {
                push("/login");
              }
            }
          });
        }
      }
    });
  }, [location]);

  return useRoutes(routes);
};

export default Router;
