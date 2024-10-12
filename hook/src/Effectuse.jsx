import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Effectuse = () => {
  const [jdata, setJdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        console.log(response.data);
        setJdata(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [jdata]);

  return (
    <div>
      <h1>Effect Hook</h1>
      {/* <ul>
        {jdata.map((data) => (
          <li key={data.id}>
            {data.firstName} {data.lastName}
          </li>
        ))}
      </ul> */}
      {jdata.length > 0 && <h1>{jdata[0].firstName}</h1>}
    </div>
  );
};

export default Effectuse;
