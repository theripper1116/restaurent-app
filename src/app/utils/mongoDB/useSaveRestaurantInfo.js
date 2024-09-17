import { useRouter } from "next/navigation";

const useSaveRestaurantInfo = async (formDataObj) => {
  const router = useRouter();
  const { email, password, name, city, address, contact } = formDataObj;
  try {
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name,
        city,
        address,
        contact,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      delete data.password;
      localStorage.setItem("restaurantUser", JSON.stringify(data));
      router.push("/restaurant/dashboard");
      return {
        status: response.status,
        message: "Something Wrong Happened",
      };
    } else {
      return {
        status: response.status,
        message: "Something Wrong Happened",
      };
    }
  } catch (err) {
    return {
      status: "Error",
      message: err.message,
    };
  }
};

export default useSaveRestaurantInfo;
