import { useState, useEffect } from "react"

const CategoryBar = ({setCategory}) => {
    const [showMenu,setShowMenu] = useState(false)

    function handleClick(event) {
        if (ref.current && ref.current.contains(event.target)) {
          setShowMenu(false);
        }
      }

    useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Category
            </a>
            <button
            className="navbar-toggler d-lg-none ms-auto"
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* Offcanvas */}
            <div
                className={`offcanvas${showMenu ? " show" : ""} offcanvas-end`}
                tabIndex="-1"
                id="offcanvasNavbar"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Set Category</h5>
                    <button
                    type="button"
                    className="btn-close text-reset"
                    onClick={() => setShowMenu(false)}
                    ></button>
                </div>
                <div className="offcanvas-body">
                    {/* Tambahkan opsi menu di sini */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div
                            className="nav-link"
                            onClick={() => setCategory("general")}
                            style={{ cursor: "pointer" }}
                            >
                            Latest
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                            className="nav-link"
                            onClick={() => setCategory("entertainment")}
                            style={{ cursor: "pointer" }}
                            >
                            Entertainment
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                            className="nav-link"
                            onClick={() => setCategory("health")}
                            style={{ cursor: "pointer" }}
                            >
                            Health
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                            className="nav-link"
                            onClick={() => setCategory("science")}
                            style={{ cursor: "pointer" }}
                            >
                            Science
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                            className="nav-link"
                            onClick={() => setCategory("sports")}
                            style={{ cursor: "pointer" }}
                            >
                            Sports
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                            className="nav-link"
                            onClick={() => setCategory("technology")}
                            style={{ cursor: "pointer" }}
                            >
                            Technology
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default CategoryBar