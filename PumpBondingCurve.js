import axios from "axios";

/////////////////////////////// CONFIG //////////////////////////////////////
const API_KEY = process.env.PUMPVIAL_API_KEY;
const ca = "7jgMahwDFb3joVRfxhmeVXPzCqpFSxYnni3qdsKvpump";
//////////////////////////////// END ////////////////////////////////////////

const getPumpBondingCurve = async () => {
  const URL = "https://api.pumpvial.com/pump-bonding-curve";

  try {
    const request = await axios.post(
      URL,
      { ca },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
      }
    );

    const { curveProgress } = request.data;
    console.log("Bonding Curve Progress: ", curveProgress);
  } catch (error) {
    console.error("Error:", error);
  }
};

getPumpBondingCurve();
