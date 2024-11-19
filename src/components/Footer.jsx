import logo from "../assets/clothes-donation.png";
const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 ">
      <aside>
        <img src={logo} alt="" className="lg:w-32 w-16" />
        <p>
          <span className="lg:text-2xl text-lg font-bold text-sky-500">
            FrostGuard
          </span>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Incident Responder</a>
        <a className="link link-hover">Secure Managed Fund</a>
        <a className="link link-hover">Clean Water All</a>
        <a className="link link-hover">Give Education</a>
      </nav>
      <nav>
        <h6 className="footer-title">Links</h6>
        <a className="link link-hover">Food to individuals</a>
        <a className="link link-hover">Store</a>
        <a className="link link-hover">Press Release</a>
        <a className="link link-hover">Privacy Policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control lg:w-80 ">
          <label className="label">
            <span className="label-text">Enter Email</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item lg:w-60 w-44"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
