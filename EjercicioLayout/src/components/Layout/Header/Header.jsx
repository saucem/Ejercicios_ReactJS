function Header() {
  return (
    <header style={ //Acá estamos inyectando JSX, entonces es necesario insertarlo entre llaves
        {backgroundColor: "#8de2d6", //... y acá estamos pasando un objeto, por lo tanto también necesita expresarse entre llaves
         padding: "10px",
         textAlign: "center",
         color: "white"}
      }>
      <h1>App React</h1>
    </header>
  );
}

export default Header;