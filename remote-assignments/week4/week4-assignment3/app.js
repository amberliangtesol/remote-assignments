function App() {
  const [msg, setMsg] = React.useState("Welcome message");
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItem = ["item 1", "item 2", "item 3", "item 4"];
  const containerItem = ["Content box 1", "Content box 2", "Content box 3", "Content box 4"]
  const numbers = [1, 2, 3, 4];
  const numbers1 = [5, 6, 7, 8];


  function onBannerClick() {
    setMsg("Have a good time!");
  }
  
  function onButtonClick() {
    setIsOpen(true)
  }

  function onMenuClick() {
    setIsMenuOpen(isMenuOpen ? false : true)
  }

  function MakeMenu () {
    return menuItem.map((item) => <a>{item}</a>);
  }
  function MakeContainer () {
    return containerItem.map((item,index) => <div key={index+1} className="item1 item" >{item}</div>);
  }
  function MakeContainer1 () {
    return containerItem.map((item,index) => <div key={index+1} className="item1 item" >{item}</div>);
  }

  return (
    <div>
      <div className="header">
        <a href="#">Website Title / Logo</a>
        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <MakeMenu />
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
          <MakeContainer />
          {/* <div className="item1 item">Content box 1</div>
          <div className="item1 item">Content box 2</div>
          <div className="item1 item">Content box 3</div>
          <div className="item1 item">Content box 4</div> */}
        </div>
      </div>

      <div className="button" onClick={onButtonClick}>
        <a href="#">Call to Action</a>
      </div>

      <div className="container1" style={{
        display: isOpen ? 'block' : 'none'
      }}>
        <div className="item-container1">
          <MakeContainer1 />
          {/* <div className="item-1 item1">Content box 1</div>
          <div className="item-2 item1">Content box 2</div>
          <div className="item-3 item1">Content box 3</div>
          <div className="item-4 item1">Content box 4</div> */}
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
