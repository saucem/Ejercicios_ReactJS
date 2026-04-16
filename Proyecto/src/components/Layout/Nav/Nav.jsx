import styles from "./Nav.module.css"

function Nav({items}) {
  const menuitems = items.map((item, index) => (
    <li key={index}><a href="#">{item}</a></li>
  )) ;
  
  return (
    <div className={styles.nav}>
      <div className={styles.navbar}>
        <ul>{menuitems}</ul>
      </div>
    </div>
  );
}

export default Nav