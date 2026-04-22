function Footer() {
    return (
    <footer style={ //Acá estamos inyectando JSX, entonces es necesario insertarlo entre llaves
        {backgroundColor: "#8de2d6", //... y acá estamos pasando un objeto, por lo tanto también necesita expresarse entre llaves
         padding: "10px",
         /*textAlign: "center",*/
         color: "white"}
      }>
      <h5>(C) Curso React 2026</h5>
    </footer>
  );
}

export default Footer