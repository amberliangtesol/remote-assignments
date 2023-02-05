function App() {
  const [msg, setMsg] = React.useState("Welcome message");
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function onBannerClick() {
    setMsg("Have a good time!");
  }
  
  function onButtonClick() {
    setIsOpen(true)
  }

  function onMenuClick() {
    setIsMenuOpen(isMenuOpen ? false : true)
  }

  return (
    <div>
      <div className="header">
        <a href="#">Website Title / Logo</a>
        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
          <a href="#">Item 4</a>
        </nav>
        <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={onMenuClick}>
          <div className="ham-bar bar-top"></div>
          <div className="ham-bar bar-mid"></div>
          <div className="ham-bar bar-bottom"></div>
      </div>

      </div>

      <div className="banner" onClick={onBannerClick}>
        <h1>{msg}</h1>
      </div>

      <div className="title">
        <h2>Section Title</h2>
      </div>

      <div className="container">
        <div className="item-container">
          <div className="item-1 item">Content box 1</div>
          <div className="item-2 item">Content box 2</div>
          <div className="item-3 item">Content box 3</div>
          <div className="item-4 item">Content box 4</div>
        </div>
      </div>

      <div className="button" onClick={onButtonClick}>
        <a href="#">Call to Action</a>
      </div>

      <div className="container1" style={{
        display: isOpen ? 'block' : 'none'
      }}>
        <div className="item-container1">
          <div className="item-1 item1">Content box 1</div>
          <div className="item-2 item1">Content box 2</div>
          <div className="item-3 item1">Content box 3</div>
          <div className="item-4 item1">Content box 4</div>
        </div>
      </div>

      <footer>
      </footer>
    </div>
  )
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
