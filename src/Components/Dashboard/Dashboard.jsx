import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import ProductsList from "../ProductsList/ProductsList";
import LogoPastasHolores from "../../img/LogoPastasHolores.png"

const Products = [
    {
        id: 1,
        name: "Ravioles",
        type: "pollo, carne y verdura",
        category: "pasta",
        price: 5000,

    },
    {
        id: 2,
        name: "Ravioles",
        type: "jamón y queso",
        category: "pasta",
        price: 5000
    },
    {
        id: 3,
        name: "Sorrentinos",
        type: "Jamon y queso",
        category: "pasta",
        price: 6000
    },
    {
        id: 4,
        name: "Sorrentinos",
        type: "Calabaza y queso",
        category: "Pastas",
        price: 6000
    },
    {
        id: 5,
        name: "Ñoquis",
        type: "de papa",
        category: "Pastas",
        price: 4000
    },
    {
        id: 6,
        name: "Coca-Cola",
        type: "Gaseosa",
        category: "bebida",
        price: 2500
    },
    {
        id: 7,
        name: "Agua saborizada",
        type: "Pomelo",
        category: "Bebida",
        price: 2000
    },
    {
        id: 8,
        name: "Agua saborizada",
        type: "Manzana",
        category: "Bebida",
        price: 2000
    },
    {
        id: 8,
        name: "Salsa bolognesa",
        category: "salsa",
        price: 1500
    },
    {
        id: 9,
        name: "Salsa Tuco",
        category: "salsa",
        price: 800
    }
];

const Dashboard = ({ isLoggedIn, setIsLoggedIn }) => {

  const navigate = useNavigate();

  const logOutHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate("/login");
  };

  return (
    <>
      <div className="d-flex justify-content-end bg-secondary">
        <Button className="mx-3 my-4 d-flex justify-content-end" onClick={logOutHandler}>
          Cerrar Sesión
        </Button>
      </div>
      <div className="text-center">
        <img 
          src={LogoPastasHolores}
          className="rounded" 
          alt="..."
          width="400px"
          
        />
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
      <ProductsList products={Products}/>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func
};

export default Dashboard;