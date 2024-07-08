import fetch from "node-fetch";

export default async function handler(req, res) {
  const { pincode } = req.body;

  if (!pincode) {
    return res.status(400).json({ error: "Pincode is required" });
  }

  try {
    const response = await fetch(
      `https://api.postalpincode.in/pincode/${pincode}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch pincode details");
    }
    const data = await response.json();
    if (
      data &&
      data[0] &&
      data[0].PostOffice &&
      data[0].PostOffice.length > 0
    ) {
      const result = {
        state: data[0].PostOffice[0].State,
        city: data[0].PostOffice[0].District,
      };
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Pincode not found or invalid" });
    }
  } catch (error) {
    console.error("Error fetching pincode details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
