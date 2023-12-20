import { useNavigate } from "react-router-dom";
import { useAuthContext, useDataContext, useOrderContext } from "../contexts";

function usePaymentGateway() {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { dispatch: dataDispatch } = useDataContext();
    const { orderAddress, orderPrice, dispatch: orderDispatch } = useOrderContext();

    const paymentSuccessful = () => {
        dataDispatch({ type: ACTION_TYPE.CLEAR_CART });
        orderDispatch({ type: ACTION_TYPE.CLEAR_PRICE });

        dataDispatch({
            type: ACTION_TYPE.SHOW_TOAST,
            payload: { type: "success", msg: "Order Placed! Shipping soon." },
        });
        navigate("/");
    };

    const loadScript = async (url) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = url;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            dataDispatch({
                type: ACTION_TYPE.SHOW_ERROR, payload: "Please check your internet connection."
            });
            return;
        }
        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID,
            amount: orderPrice.totalAmt * 100,
            currency: "INR",
            name: "commerch",
            description: "Thank you for shopping with us",
            image: "",
            handler: function () {
                paymentSuccessful();
            },
            prefill: {
                name: `${user.firstName} ${user.lastName}`,
                email: `${user.email}`,
                mobile: `${orderAddress.phno}`
            },
            theme: {
                color: "#2dd4bf",
            },
            notes: {
                address: `${orderAddress?.name}, ${orderAddress?.street}, ${orderAddress?.city}, ${orderAddress?.pincode}`,
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.on("payment.failed", function () {
            dataDispatch({
                type: ACTION_TYPE.SHOW_ERROR, payload: "Something went wrong! Please try again later"
            });
        });
        paymentObject.open();
    };

    return { displayRazorpay, paymentSuccessful };
}

export default usePaymentGateway;
