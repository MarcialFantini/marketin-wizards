import style from "./style.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.textFooter}>
        <div>
          <h2>AgroBD</h2>
          <p>whats up</p>
        </div>
        <div>
          <h2>Company Profile</h2>
          <ul>
            <li>About</li>
            <li>About</li>
            <li>About</li>
            <li>About</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>About</li>
            <li>About</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <h2>Company Profile</h2>
          <p>Follow Us</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
