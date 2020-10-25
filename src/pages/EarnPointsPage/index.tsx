//REACT
import React, { useContext, useEffect } from "react";

//COMPONENTS
import Header from "../../components/Header";
import PointsPicker from "../../components/PointsPicker";
import Footer from "../../components/Footer";
import SuccessModal from "../../components/SuccessModal";

//CONTEXT
import { AppContext } from "../../context/AppContext";

//ASSETS
import animationData from "../../assets/lotties/treasure-box-coine.json";

//HOOKS
import { usePostFetch } from "../../hooks/useFetch";

//LIBS
//@ts-ignore
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//UITLS
import { createFetchBody, getPostHeaders } from "../../utils/fetchOptions";

//CONSTANTS
import { API_URL } from "../../constants/api";

//TYPESCRIPT
import { User } from "../../types/user";
import { Product } from "../../types/products";

const EarnPointsPage: React.FC = () => {
  const { executeFetch, data, hasError, errorMessage } = usePostFetch();
  const { setState } = useContext(AppContext);

  const MySwal = withReactContent(Swal);

  const updatePoints = (earnedCoins: number) => {
    const body = createFetchBody({ amount: earnedCoins });
    executeFetch(`${API_URL}/user/points`, getPostHeaders(), body);
  };

  useEffect(() => {
    if (data?.message) {
      setTimeout(() => {
        MySwal.clickConfirm();

        MySwal.fire(
          "Coins added to your account",
          `New Coins: ${data["New Points"]}`,
          "success"
        );
      }, 3000);

      setState((prevState: { user: User; products: Product[] }) => ({
        ...prevState,
        user: { ...prevState.user, points: data["New Points"] },
      }));
    }

    if (hasError) {
      console.error(errorMessage);
      MySwal.fire("An error has occurred", "Please try again later", "error");
    }
  }, [data, hasError, errorMessage]);

  const showSuccessNotification = async (earnedCoins: number) =>
    await MySwal.fire({
      html: (
        <SuccessModal earnedCoins={earnedCoins} animationData={animationData} />
      ),
      background: "transparent",
      width: "100%",
      height: "100%",
      position: "top-start",
      showConfirmButton: false,
      onOpen: updatePoints(earnedCoins),
    });

  return (
    <>
      <Header />
      <div className="mx-auto h-screen flex flex-col items-center">
        <div className="mt-3 w-full py-16 flex flex-col items-center justify-center mb-0">
          <h2 className="w-3/4 text-4xl md:text-5xl text-gray-700">
            Test your luck!
          </h2>
          <h3 className="w-3/4 text-3xl md:text-4xl text-gray-600">
            {`Click the button and get some points :)`}
          </h3>
        </div>
        <PointsPicker onFinishPicking={showSuccessNotification} />
      </div>
      <Footer />
    </>
  );
};

export default EarnPointsPage;
