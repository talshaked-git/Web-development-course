import './App.css';

var getYear = new Date().getFullYear();
function Footer() {
    return (
      <div className="footer p">
        <footer> <p>Created by Tal {getYear}</p> </footer>
    </div>
  );
}

export default Footer;