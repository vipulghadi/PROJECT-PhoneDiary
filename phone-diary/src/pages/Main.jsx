import React, { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import notes from "../assets/notes.png";
import { useAppContext } from "../context/AppContext";
import { contactCollection } from "../services/DbServices";
function Main() {
  const { refresh, setRefresh, user } = useAppContext();
  const [contactData, setContactData] = useState([]);
  const [query, setQuery] = useState("");
  const [filterData, setFilterData] = useState([]);
  //making api call if the data is updated
  useEffect(() => {
    contactCollection
      .getAllContact(user.userId)
      .then((resp) => {
        setContactData([...contactData, ...resp.docs]);
        setFilterData([...resp.docs]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    // console.log("called");
    let result = contactData.filter((d) => {
      return (d.data().name.match(query)||d.data().phone.match(query));
    });
    if (query == "") {
      setFilterData(contactData);
    } else {
      setFilterData(result)
    }
  }, [query]);

  return (
    <div className=" main sm:w-[600px] bg-white   p-3 absolute inset-0 overflow-y-scroll ">
      <div className="w-full mb-5 ">
        <input
          type="text"
          placeholder="search contacts,number here"
          className="w-full outline-none  px-2 py-3 rounded-md text-[20px] sm:text-[16px] shadow-md bg-f"
          onChange={(e)=>{
            setQuery(e.target.value)
          }}
        />
      </div>
      <div className=" h-auto">
        {filterData  &&
          filterData.map((d) => {
            return <ContactCard id={d.id} data={d.data()} />;
          })}
      </div>
      {/* <img src={notes} alt="" className="w-16" /> */}
    </div>
  );
}
export default Main;
