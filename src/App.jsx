import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/main";
import SideBar from "./components/SideBar";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Mulai loading sebagai true
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  // Fungsi untuk menghasilkan tanggal acak
  function generateRandomDate() {
    const startDate = new Date(1995, 0, 1); // Tanggal mulai (misalnya 1 Januari 1995)
    const endDate = new Date(); // Tanggal sekarang
    const randomTimestamp =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTimestamp).toISOString().split("T")[0]; // Mengembalikan tanggal dalam format YYYY-MM-DD
  }

  useEffect(() => {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

    async function fetchAPIData() {
      const randomDate = generateRandomDate(); // Dapatkan tanggal acak
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${randomDate}`;
      setLoading(true); // Mulai loading
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const apiData = await response.json();
        setData(apiData); // Set data hasil fetch
        console.log("Data NASA API DATA:", apiData);
      } catch (error) {
        console.error("Error fetching NASA API data:", error);
      } finally {
        setLoading(false); // Hentikan loading
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      {loading ? ( // Tampilkan loading spinner saat loading
        <div
          className="loadingState"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            style={{ fontSize: "100px", color: "white" }}
          />
        </div>
      ) : (
        data && (
          <>
            <Main data={data} />
            <AnimatePresence>
              {showModal && (
                <SideBar data={data} handleToggleModal={handleToggleModal} />
              )}
            </AnimatePresence>
            <Footer data={data} handleToggleModal={handleToggleModal} />
          </>
        )
      )}
    </>
  );
}

export default App;
