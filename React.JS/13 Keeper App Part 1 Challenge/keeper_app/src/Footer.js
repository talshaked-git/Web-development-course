import './App.css';

function Footer() {
  const getYear = new Date().getFullYear();
    return (
      <div className="footer p">
        <footer> <p>© Created by Tal {getYear}</p> </footer>
    </div>
  );
}

export default Footer;