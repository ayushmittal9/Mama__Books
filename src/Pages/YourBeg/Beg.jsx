

import React, { useEffect, useState } from 'react';
import AllProduct from '../../Components/AllProduct/AllProduct';

function Beg() {
  const [begIds, setBegIds] = useState([]);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const loggedUserString = localStorage.getItem("loggedInUser");

    let userId = storedUserId || null;

    if (!userId && loggedUserString) {
      try {
        const loggedUser = JSON.parse(loggedUserString);
        userId = loggedUser.id || loggedUser.userId || null;
      } catch (err) {
        console.error("Error parsing loggedInUser in Beg.jsx:", err);
      }
    }

    // agar login nahi hai -> koi Beg items nahi
    if (!userId) {
      setBegIds([]);
      return;
    }

    const begKey = `beg_${userId}`;
    const stored = JSON.parse(localStorage.getItem(begKey)) || [];
    setBegIds(stored);
  }, []);

  return (
    <div className="Beg">
      <AllProduct
        showActions={false}
        title="Your Beg Products"
        filterIds={begIds}   // sirf current user ke items
      />
    </div>
  );
}

export default Beg;
