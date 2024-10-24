import React, { createContext, useState } from "react";
import Types from "../Types";
export const MyContext = createContext<any>(null);
import { Country, countrySelect, statuses } from "../Types";

export const MyContextProvider: React.FC<any> = ({ children }) => {
  const [users, setUsers] = useState<Types[]>([
    {
      id: 1,
      fullName: "Иван Иванов",
      department: "HR",
      country: "UA",
      status: "DISABLED",
    },
    {
      id: 2,
      fullName: "Светлана Петрова",
      department: "LEG",
      country: "UA",
      status: "ACTIVE",
    },
    {
      id: 3,
      fullName: "Алексей Смирнов",
      department: "PM",
      country: "US",
      status: "ACTIVE",
    },
    {
      id: 4,
      fullName: "Елена Кузнецова",
      department: "Дизайн",
      country: "US",
      status: "DISABLED",
    },
    {
      id: 5,
      fullName: "Дмитрий Сидоров",
      department: "PM",
      country: "CA",
      status: "DISABLED",
    },
    {
      id: 6,
      fullName: "Анна Васильева",
      department: "HR",
      country: "CA",
      status: "DISABLED",
    },
    {
      id: 7,
      fullName: "Михаил Федоров",
      department: "OPS",
      country: "DE",
      status: "ACTIVE",
    },
    {
      id: 8,
      fullName: "Ольга Николаева",
      department: "R&D",
      country: "DE",
      status: "DISABLED",
    },
    {
      id: 9,
      fullName: "Сергей Павлов",
      department: "R&D",
      country: "FR",
      status: "ACTIVE",
    },
    {
      id: 10,
      fullName: "Татьяна Романова",
      department: "FIN",
      country: "AU",
      status: "DISABLED",
    },
  ]);

  const [selectCountry] = useState<Country[]>([
    { name: "Ukraine", value: "UA" },
    { name: "United States", value: "US" },
    { name: "Canada", value: "CA" },
    { name: "Germany", value: "DE" },
    { name: "France", value: "FR" },
    { name: "Australia", value: "AU" },
    { name: "Japan", value: "JP" },
    { name: "United Kingdom", value: "GB" },
    { name: "China", value: "CN" },
    { name: "India", value: "IN" },
  ]);

  const countrySelect: countrySelect[] = [
    { name: "Human Resources", value: "HR" },
    { name: "Finance", value: "FIN" },
    { name: "Information Technology", value: "IT" },
    { name: "Marketing", value: "MKT" },
    { name: "Sales", value: "SAL" },
    { name: "Customer Support", value: "CS" },
    { name: "Research and Development", value: "R&D" },
    { name: "Operations", value: "OPS" },
    { name: "Legal", value: "LEG" },
    { name: "Product Management", value: "PM" },
  ];

  const statuses: statuses[] = [
    { name: "All statuses", value: "ALL" },
    { name: "Active", value: "ACTIVE" },
    { name: "Disabled", value: "DISABLED" },
  ];

  const [value, setValue] = useState<string>("По умолчанию");

  const [modalWindowToggle,setModalWindowToggle] = useState(false)

  return (
    <MyContext.Provider
      value={{
        users,
        setUsers,
        value,
        setValue,
        selectCountry,
        countrySelect,
        statuses,
        modalWindowToggle,
        setModalWindowToggle
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
