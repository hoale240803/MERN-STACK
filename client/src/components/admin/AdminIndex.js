import React from "react";

const AdminIndex = () => {
  return (
    <div>
      <div>
        {/* [ Pre-loader ] start */}
        <div className="loader-bg">
          <div className="loader-track">
            <div className="loader-fill" />
          </div>
        </div>
        {/* [ Pre-loader ] End */}
        {/* [ navigation menu ] start */}
        <nav className="pcoded-navbar">
          <div className="navbar-wrapper">
            <div className="navbar-brand header-logo">
              <a href="index.html" className="b-brand">
                <div className="b-bg">
                  <i className="feather icon-trending-up" />
                </div>
                <span className="b-title">Datta Able</span>
              </a>
              <a
                className="mobile-menu"
                id="mobile-collapse"
                href="javascript:"
              >
                <span />
              </a>
            </div>
            <div className="navbar-content scroll-div">
              <ul className="nav pcoded-inner-navbar">
                <li className="nav-item pcoded-menu-caption">
                  <label>Navigation</label>
                </li>
                <li
                  data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                  className="nav-item active"
                >
                  <a href="index.html" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-home" />
                    </span>
                    <span className="pcoded-mtext">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item pcoded-menu-caption">
                  <label>UI Element</label>
                </li>
                <li
                  data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds"
                  className="nav-item pcoded-hasmenu"
                >
                  <a href="javascript:" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-box" />
                    </span>
                    <span className="pcoded-mtext">Components</span>
                  </a>
                  <ul className="pcoded-submenu">
                    <li className>
                      <a href="bc_button.html" className>
                        Button
                      </a>
                    </li>
                    <li className>
                      <a href="bc_badges.html" className>
                        Badges
                      </a>
                    </li>
                    <li className>
                      <a href="bc_breadcrumb-pagination.html" className>
                        Breadcrumb &amp; paggination
                      </a>
                    </li>
                    <li className>
                      <a href="bc_collapse.html" className>
                        Collapse
                      </a>
                    </li>
                    <li className>
                      <a href="bc_tabs.html" className>
                        Tabs &amp; pills
                      </a>
                    </li>
                    <li className>
                      <a href="bc_typography.html" className>
                        Typography
                      </a>
                    </li>
                    <li className>
                      <a href="icon-feather.html" className>
                        Feather
                        <span className="pcoded-badge label label-danger">
                          NEW
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item pcoded-menu-caption">
                  <label>Forms &amp; table</label>
                </li>
                <li
                  data-username="form elements advance componant validation masking wizard picker select"
                  className="nav-item"
                >
                  <a href="form_elements.html" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-file-text" />
                    </span>
                    <span className="pcoded-mtext">Form elements</span>
                  </a>
                </li>
                <li
                  data-username="Table bootstrap datatable footable"
                  className="nav-item"
                >
                  <a href="tbl_bootstrap.html" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-server" />
                    </span>
                    <span className="pcoded-mtext">Table</span>
                  </a>
                </li>
                <li className="nav-item pcoded-menu-caption">
                  <label>Chart &amp; Maps</label>
                </li>
                <li data-username="Charts Morris" className="nav-item">
                  <a href="chart-morris.html" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-pie-chart" />
                    </span>
                    <span className="pcoded-mtext">Chart</span>
                  </a>
                </li>
                <li data-username="Maps Google" className="nav-item">
                  <a href="map-google.html" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-map" />
                    </span>
                    <span className="pcoded-mtext">Maps</span>
                  </a>
                </li>
                <li className="nav-item pcoded-menu-caption">
                  <label>Pages</label>
                </li>
                <li
                  data-username="Authentication Sign up Sign in reset password Change password Personal information profile settings map form subscribe"
                  className="nav-item pcoded-hasmenu"
                >
                  <a href="javascript:" className="nav-link ">
                    <span className="pcoded-micon">
                      <i className="feather icon-lock" />
                    </span>
                    <span className="pcoded-mtext">Authentication</span>
                  </a>
                  <ul className="pcoded-submenu">
                    <li className>
                      <a href="auth-signup.html" className target="_blank">
                        Sign up
                      </a>
                    </li>
                    <li className>
                      <a href="auth-signin.html" className target="_blank">
                        Sign in
                      </a>
                    </li>
                  </ul>
                </li>
                <li data-username="Sample Page" className="nav-item">
                  <a href="sample-page.html" className="nav-link">
                    <span className="pcoded-micon">
                      <i className="feather icon-sidebar" />
                    </span>
                    <span className="pcoded-mtext">Sample page</span>
                  </a>
                </li>
                <li data-username="Disabled Menu" className="nav-item disabled">
                  <a href="javascript:" className="nav-link">
                    <span className="pcoded-micon">
                      <i className="feather icon-power" />
                    </span>
                    <span className="pcoded-mtext">Disabled menu</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* [ navigation menu ] end */}
        {/* [ Header ] start */}
        <header className="navbar pcoded-header navbar-expand-lg navbar-light">
          <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse1" href="javascript:">
              <span />
            </a>
            <a href="index.html" className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up" />
              </div>
              <span className="b-title">Datta Able</span>
            </a>
          </div>
          <a className="mobile-menu" id="mobile-header" href="javascript:">
            <i className="feather icon-more-horizontal" />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li>
                <a
                  href="javascript:"
                  className="full-screen"
                  onClick="javascript:toggleFullScreen()"
                >
                  <i className="feather icon-maximize" />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle"
                  href="javascript:"
                  data-toggle="dropdown"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="javascript:">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="javascript:">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="main-search">
                  <div className="input-group">
                    <input
                      type="text"
                      id="m-search"
                      className="form-control"
                      placeholder="Search . . ."
                    />
                    <a
                      href="javascript:"
                      className="input-group-append search-close"
                    >
                      <i className="feather icon-x input-group-text" />
                    </a>
                    <span className="input-group-append search-btn btn btn-primary">
                      <i className="feather icon-search input-group-text" />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="javascript:"
                    data-toggle="dropdown"
                  >
                    <i className="icon feather icon-bell" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right notification">
                    <div className="noti-head">
                      <h6 className="d-inline-block m-b-0">Notifications</h6>
                      <div className="float-right">
                        <a href="javascript:" className="m-r-10">
                          mark as read
                        </a>
                        <a href="javascript:">clear all</a>
                      </div>
                    </div>
                    <ul className="noti-body">
                      <li className="n-title">
                        <p className="m-b-0">NEW</p>
                      </li>
                      <li className="notification">
                        <div className="media">
                          <img
                            className="img-radius"
                            src="assets/images/user/avatar-1.jpg"
                            alt="Generic placeholder image"
                          />
                          <div className="media-body">
                            <p>
                              <strong>John Doe</strong>
                              <span className="n-time text-muted">
                                <i className="icon feather icon-clock m-r-10" />
                                30 min
                              </span>
                            </p>
                            <p>New ticket Added</p>
                          </div>
                        </div>
                      </li>
                      <li className="n-title">
                        <p className="m-b-0">EARLIER</p>
                      </li>
                      <li className="notification">
                        <div className="media">
                          <img
                            className="img-radius"
                            src="assets/images/user/avatar-2.jpg"
                            alt="Generic placeholder image"
                          />
                          <div className="media-body">
                            <p>
                              <strong>Joseph William</strong>
                              <span className="n-time text-muted">
                                <i className="icon feather icon-clock m-r-10" />
                                30 min
                              </span>
                            </p>
                            <p>Prchace New Theme and make payment</p>
                          </div>
                        </div>
                      </li>
                      <li className="notification">
                        <div className="media">
                          <img
                            className="img-radius"
                            src="assets/images/user/avatar-3.jpg"
                            alt="Generic placeholder image"
                          />
                          <div className="media-body">
                            <p>
                              <strong>Sara Soudein</strong>
                              <span className="n-time text-muted">
                                <i className="icon feather icon-clock m-r-10" />
                                30 min
                              </span>
                            </p>
                            <p>currently login</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="noti-footer">
                      <a href="javascript:">show all</a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown drp-user">
                  <a
                    href="javascript:"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="icon feather icon-settings" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right profile-notification">
                    <div className="pro-head">
                      <img
                        src="assets/images/user/avatar-1.jpg"
                        className="img-radius"
                        alt="User-Profile-Image"
                      />
                      <span>John Doe</span>
                      <a
                        href="auth-signin.html"
                        className="dud-logout"
                        title="Logout"
                      >
                        <i className="feather icon-log-out" />
                      </a>
                    </div>
                    <ul className="pro-body">
                      <li>
                        <a href="javascript:" className="dropdown-item">
                          <i className="feather icon-settings" /> Settings
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="dropdown-item">
                          <i className="feather icon-user" /> Profile
                        </a>
                      </li>
                      <li>
                        <a href="message.html" className="dropdown-item">
                          <i className="feather icon-mail" /> My Messages
                        </a>
                      </li>
                      <li>
                        <a href="auth-signin.html" className="dropdown-item">
                          <i className="feather icon-lock" /> Lock Screen
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </header>
        {/* [ Header ] end */}
        {/* [ Main Content ] start */}
        <div className="pcoded-main-container">
          <div className="pcoded-wrapper">
            <div className="pcoded-content">
              <div className="pcoded-inner-content">
                {/* [ breadcrumb ] start */}
                {/* [ breadcrumb ] end */}
                <div className="main-body">
                  <div className="page-wrapper">
                    {/* [ Main Content ] start */}
                    <div className="row">
                      {/*[ daily sales section ] start*/}
                      <div className="col-md-6 col-xl-4">
                        <div className="card daily-sales">
                          <div className="card-block">
                            <h6 className="mb-4">Daily Sales</h6>
                            <div className="row d-flex align-items-center">
                              <div className="col-9">
                                <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                  <i className="feather icon-arrow-up text-c-green f-30 m-r-10" />
                                  $ 249.95
                                </h3>
                              </div>
                              <div className="col-3 text-right">
                                <p className="m-b-0">67%</p>
                              </div>
                            </div>
                            <div
                              className="progress m-t-30"
                              style={{ height: 7 }}
                            >
                              <div
                                className="progress-bar progress-c-theme"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*[ daily sales section ] end*/}
                      {/*[ Monthly  sales section ] starts*/}
                      <div className="col-md-6 col-xl-4">
                        <div className="card Monthly-sales">
                          <div className="card-block">
                            <h6 className="mb-4">Monthly Sales</h6>
                            <div className="row d-flex align-items-center">
                              <div className="col-9">
                                <h3 className="f-w-300 d-flex align-items-center  m-b-0">
                                  <i className="feather icon-arrow-down text-c-red f-30 m-r-10" />
                                  $ 2.942.32
                                </h3>
                              </div>
                              <div className="col-3 text-right">
                                <p className="m-b-0">36%</p>
                              </div>
                            </div>
                            <div
                              className="progress m-t-30"
                              style={{ height: 7 }}
                            >
                              <div
                                className="progress-bar progress-c-theme2"
                                role="progressbar"
                                style={{ width: "35%" }}
                                aria-valuenow={35}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*[ Monthly  sales section ] end*/}
                      {/*[ year  sales section ] starts*/}
                      <div className="col-md-12 col-xl-4">
                        <div className="card yearly-sales">
                          <div className="card-block">
                            <h6 className="mb-4">Yearly Sales</h6>
                            <div className="row d-flex align-items-center">
                              <div className="col-9">
                                <h3 className="f-w-300 d-flex align-items-center  m-b-0">
                                  <i className="feather icon-arrow-up text-c-green f-30 m-r-10" />
                                  $ 8.638.32
                                </h3>
                              </div>
                              <div className="col-3 text-right">
                                <p className="m-b-0">80%</p>
                              </div>
                            </div>
                            <div
                              className="progress m-t-30"
                              style={{ height: 7 }}
                            >
                              <div
                                className="progress-bar progress-c-theme"
                                role="progressbar"
                                style={{ width: "70%" }}
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*[ year  sales section ] end*/}
                      {/*[ Recent Users ] start*/}
                      <div className="col-xl-8 col-md-6">
                        <div className="card Recent-Users">
                          <div className="card-header">
                            <h5>Recent Users</h5>
                          </div>
                          <div className="card-block px-0 py-3">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <tbody>
                                  <tr className="unread">
                                    <td>
                                      <img
                                        className="rounded-circle"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-1.jpg"
                                        alt="activity-user"
                                      />
                                    </td>
                                    <td>
                                      <h6 className="mb-1">
                                        Isabella Christensen
                                      </h6>
                                      <p className="m-0">
                                        Lorem Ipsum is simply…
                                      </p>
                                    </td>
                                    <td>
                                      <h6 className="text-muted">
                                        <i className="fas fa-circle text-c-green f-10 m-r-15" />
                                        11 MAY 12:56
                                      </h6>
                                    </td>
                                    <td>
                                      <a
                                        href="#!"
                                        className="label theme-bg2 text-white f-12"
                                      >
                                        Reject
                                      </a>
                                      <a
                                        href="#!"
                                        className="label theme-bg text-white f-12"
                                      >
                                        Approve
                                      </a>
                                    </td>
                                  </tr>
                                  <tr className="unread">
                                    <td>
                                      <img
                                        className="rounded-circle"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-2.jpg"
                                        alt="activity-user"
                                      />
                                    </td>
                                    <td>
                                      <h6 className="mb-1">
                                        Mathilde Andersen
                                      </h6>
                                      <p className="m-0">
                                        Lorem Ipsum is simply text of…
                                      </p>
                                    </td>
                                    <td>
                                      <h6 className="text-muted">
                                        <i className="fas fa-circle text-c-red f-10 m-r-15" />
                                        11 MAY 10:35
                                      </h6>
                                    </td>
                                    <td>
                                      <a
                                        href="#!"
                                        className="label theme-bg2 text-white f-12"
                                      >
                                        Reject
                                      </a>
                                      <a
                                        href="#!"
                                        className="label theme-bg text-white f-12"
                                      >
                                        Approve
                                      </a>
                                    </td>
                                  </tr>
                                  <tr className="unread">
                                    <td>
                                      <img
                                        className="rounded-circle"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-3.jpg"
                                        alt="activity-user"
                                      />
                                    </td>
                                    <td>
                                      <h6 className="mb-1">Karla Sorensen</h6>
                                      <p className="m-0">
                                        Lorem Ipsum is simply…
                                      </p>
                                    </td>
                                    <td>
                                      <h6 className="text-muted">
                                        <i className="fas fa-circle text-c-green f-10 m-r-15" />
                                        9 MAY 17:38
                                      </h6>
                                    </td>
                                    <td>
                                      <a
                                        href="#!"
                                        className="label theme-bg2 text-white f-12"
                                      >
                                        Reject
                                      </a>
                                      <a
                                        href="#!"
                                        className="label theme-bg text-white f-12"
                                      >
                                        Approve
                                      </a>
                                    </td>
                                  </tr>
                                  <tr className="unread">
                                    <td>
                                      <img
                                        className="rounded-circle"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-1.jpg"
                                        alt="activity-user"
                                      />
                                    </td>
                                    <td>
                                      <h6 className="mb-1">Ida Jorgensen</h6>
                                      <p className="m-0">
                                        Lorem Ipsum is simply text of…
                                      </p>
                                    </td>
                                    <td>
                                      <h6 className="text-muted f-w-300">
                                        <i className="fas fa-circle text-c-red f-10 m-r-15" />
                                        19 MAY 12:56
                                      </h6>
                                    </td>
                                    <td>
                                      <a
                                        href="#!"
                                        className="label theme-bg2 text-white f-12"
                                      >
                                        Reject
                                      </a>
                                      <a
                                        href="#!"
                                        className="label theme-bg text-white f-12"
                                      >
                                        Approve
                                      </a>
                                    </td>
                                  </tr>
                                  <tr className="unread">
                                    <td>
                                      <img
                                        className="rounded-circle"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-2.jpg"
                                        alt="activity-user"
                                      />
                                    </td>
                                    <td>
                                      <h6 className="mb-1">Albert Andersen</h6>
                                      <p className="m-0">
                                        Lorem Ipsum is simply dummy…
                                      </p>
                                    </td>
                                    <td>
                                      <h6 className="text-muted">
                                        <i className="fas fa-circle text-c-green f-10 m-r-15" />
                                        21 July 12:56
                                      </h6>
                                    </td>
                                    <td>
                                      <a
                                        href="#!"
                                        className="label theme-bg2 text-white f-12"
                                      >
                                        Reject
                                      </a>
                                      <a
                                        href="#!"
                                        className="label theme-bg text-white f-12"
                                      >
                                        Approve
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*[ Recent Users ] end*/}
                      {/* [ statistics year chart ] start */}
                      <div className="col-xl-4 col-md-6">
                        <div className="card card-event">
                          <div className="card-block">
                            <div className="row align-items-center justify-content-center">
                              <div className="col">
                                <h5 className="m-0">Upcoming Event</h5>
                              </div>
                              <div className="col-auto">
                                <label className="label theme-bg2 text-white f-14 f-w-400 float-right">
                                  34%
                                </label>
                              </div>
                            </div>
                            <h2 className="mt-3 f-w-300">
                              45
                              <sub className="text-muted f-14">Competitors</sub>
                            </h2>
                            <h6 className="text-muted mt-4 mb-0">
                              You can participate in event{" "}
                            </h6>
                            <i className="fab fa-angellist text-c-purple f-50" />
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-block border-bottom">
                            <div className="row d-flex align-items-center">
                              <div className="col-auto">
                                <i className="feather icon-zap f-30 text-c-green" />
                              </div>
                              <div className="col">
                                <h3 className="f-w-300">235</h3>
                                <span className="d-block text-uppercase">
                                  TOTAL IDEAS
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card-block">
                            <div className="row d-flex align-items-center">
                              <div className="col-auto">
                                <i className="feather icon-map-pin f-30 text-c-blue" />
                              </div>
                              <div className="col">
                                <h3 className="f-w-300">26</h3>
                                <span className="d-block text-uppercase">
                                  TOTAL LOCATIONS
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* [ statistics year chart ] end */}
                      {/*[social-media section] start*/}
                      <div className="col-md-12 col-xl-4">
                        <div className="card card-social">
                          <div className="card-block border-bottom">
                            <div className="row align-items-center justify-content-center">
                              <div className="col-auto">
                                <i className="fab fa-facebook-f text-primary f-36" />
                              </div>
                              <div className="col text-right">
                                <h3>12,281</h3>
                                <h5 className="text-c-green mb-0">
                                  +7.2%{" "}
                                  <span className="text-muted">
                                    Total Likes
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="card-block">
                            <div className="row align-items-center justify-content-center card-active">
                              <div className="col-6">
                                <h6 className="text-center m-b-10">
                                  <span className="text-muted m-r-5">
                                    Target:
                                  </span>
                                  35,098
                                </h6>
                                <div className="progress">
                                  <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: "60%", height: 6 }}
                                    aria-valuenow={60}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <h6 className="text-center  m-b-10">
                                  <span className="text-muted m-r-5">
                                    Duration:
                                  </span>
                                  3,539
                                </h6>
                                <div className="progress">
                                  <div
                                    className="progress-bar progress-c-theme2"
                                    role="progressbar"
                                    style={{ width: "45%", height: 6 }}
                                    aria-valuenow={45}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4">
                        <div className="card card-social">
                          <div className="card-block border-bottom">
                            <div className="row align-items-center justify-content-center">
                              <div className="col-auto">
                                <i className="fab fa-twitter text-c-blue f-36" />
                              </div>
                              <div className="col text-right">
                                <h3>11,200</h3>
                                <h5 className="text-c-purple mb-0">
                                  +6.2%{" "}
                                  <span className="text-muted">
                                    Total Likes
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="card-block">
                            <div className="row align-items-center justify-content-center card-active">
                              <div className="col-6">
                                <h6 className="text-center m-b-10">
                                  <span className="text-muted m-r-5">
                                    Target:
                                  </span>
                                  34,185
                                </h6>
                                <div className="progress">
                                  <div
                                    className="progress-bar progress-c-green"
                                    role="progressbar"
                                    style={{ width: "40%", height: 6 }}
                                    aria-valuenow={40}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <h6 className="text-center  m-b-10">
                                  <span className="text-muted m-r-5">
                                    Duration:
                                  </span>
                                  4,567
                                </h6>
                                <div className="progress">
                                  <div
                                    className="progress-bar progress-c-blue"
                                    role="progressbar"
                                    style={{ width: "70%", height: 6 }}
                                    aria-valuenow={70}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4">
                        <div className="card card-social">
                          <div className="card-block border-bottom">
                            <div className="row align-items-center justify-content-center">
                              <div className="col-auto">
                                <i className="fab fa-google-plus-g text-c-red f-36" />
                              </div>
                              <div className="col text-right">
                                <h3>10,500</h3>
                                <h5 className="text-c-blue mb-0">
                                  +5.9%{" "}
                                  <span className="text-muted">
                                    Total Likes
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="card-block">
                            <div className="row align-items-center justify-content-center card-active">
                              <div className="col-6">
                                <h6 className="text-center m-b-10">
                                  <span className="text-muted m-r-5">
                                    Target:
                                  </span>
                                  25,998
                                </h6>
                                <div className="progress">
                                  <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: "80%", height: 6 }}
                                    aria-valuenow={80}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <h6 className="text-center  m-b-10">
                                  <span className="text-muted m-r-5">
                                    Duration:
                                  </span>
                                  7,753
                                </h6>
                                <div className="progress">
                                  <div
                                    className="progress-bar progress-c-theme2"
                                    role="progressbar"
                                    style={{ width: "50%", height: 6 }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*[social-media section] end*/}
                      {/* [ rating list ] starts*/}
                      <div className="col-xl-4 col-md-6">
                        <div className="card user-list">
                          <div className="card-header">
                            <h5>Rating</h5>
                          </div>
                          <div className="card-block">
                            <div className="row align-items-center justify-content-center m-b-20">
                              <div className="col-6">
                                <h2 className="f-w-300 d-flex align-items-center float-left m-0">
                                  4.7{" "}
                                  <i className="fas fa-star f-10 m-l-10 text-c-yellow" />
                                </h2>
                              </div>
                              <div className="col-6">
                                <h6 className="d-flex  align-items-center float-right m-0">
                                  0.4{" "}
                                  <i className="fas fa-caret-up text-c-green f-22 m-l-10" />
                                </h6>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-xl-12">
                                <h6 className="align-items-center float-left">
                                  <i className="fas fa-star f-10 m-r-10 text-c-yellow" />
                                  5
                                </h6>
                                <h6 className="align-items-center float-right">
                                  384
                                </h6>
                                <div
                                  className="progress m-t-30 m-b-20"
                                  style={{ height: 6 }}
                                >
                                  <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: "70%" }}
                                    aria-valuenow={70}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <h6 className="align-items-center float-left">
                                  <i className="fas fa-star f-10 m-r-10 text-c-yellow" />
                                  4
                                </h6>
                                <h6 className="align-items-center float-right">
                                  145
                                </h6>
                                <div
                                  className="progress m-t-30  m-b-20"
                                  style={{ height: 6 }}
                                >
                                  <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: "35%" }}
                                    aria-valuenow={35}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <h6 className="align-items-center float-left">
                                  <i className="fas fa-star f-10 m-r-10 text-c-yellow" />
                                  3
                                </h6>
                                <h6 className="align-items-center float-right">
                                  24
                                </h6>
                                <div
                                  className="progress m-t-30  m-b-20"
                                  style={{ height: 6 }}
                                >
                                  <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <h6 className="align-items-center float-left">
                                  <i className="fas fa-star f-10 m-r-10 text-c-yellow" />
                                  2
                                </h6>
                                <h6 className="align-items-center float-right">
                                  1
                                </h6>
                                <div
                                  className="progress m-t-30  m-b-20"
                                  style={{ height: 6 }}
                                >
                                  <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: "10%" }}
                                    aria-valuenow={10}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                              <div className="col-xl-12">
                                <h6 className="align-items-center float-left">
                                  <i className="fas fa-star f-10 m-r-10 text-c-yellow" />
                                  1
                                </h6>
                                <h6 className="align-items-center float-right">
                                  0
                                </h6>
                                <div
                                  className="progress m-t-30  m-b-20"
                                  style={{ height: 6 }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: 0 }}
                                    aria-valuenow={0}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* [ rating list ] end*/}
                      <div className="col-xl-8 col-md-12 m-b-30">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="home-tab"
                              data-toggle="tab"
                              href="#home"
                              role="tab"
                              aria-controls="home"
                              aria-selected="false"
                            >
                              Today
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link active show"
                              id="profile-tab"
                              data-toggle="tab"
                              href="#profile"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="true"
                            >
                              This Week
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="contact-tab"
                              data-toggle="tab"
                              href="#contact"
                              role="tab"
                              aria-controls="contact"
                              aria-selected="false"
                            >
                              All
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>User</th>
                                  <th>Activity</th>
                                  <th>Time</th>
                                  <th>Status</th>
                                  <th className="text-right" />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-1.jpg"
                                        alt="activity-user"
                                      />
                                      Ida Jorgensen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-green">Done</h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-green f-10" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle  m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-2.jpg"
                                        alt="activity-user"
                                      />
                                      Albert Andersen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">Jumps over the lazy</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">2:37 PM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-red">Missed</h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-red f-10" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle  m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-3.jpg"
                                        alt="activity-user"
                                      />
                                      Silje Larsen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">Dog the quick brown</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">10:23 AM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-purple">
                                      Delayed
                                    </h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-purple f-10" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle  m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-1.jpg"
                                        alt="activity-user"
                                      />
                                      Ida Jorgensen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">4:28 PM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-green">Done</h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-green f-10" />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className="tab-pane fade active show"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                          >
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>User</th>
                                  <th>Activity</th>
                                  <th>Time</th>
                                  <th>Status</th>
                                  <th className="text-right" />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle  m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-2.jpg"
                                        alt="activity-user"
                                      />
                                      Albert Andersen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">Jumps over the lazy</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">2:37 PM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-red">Missed</h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-red f-10" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-1.jpg"
                                        alt="activity-user"
                                      />
                                      Ida Jorgensen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-green">Done</h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-green f-10" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle  m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-1.jpg"
                                        alt="activity-user"
                                      />
                                      Ida Jorgensen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">4:28 PM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-green">Done</h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-green f-10" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle  m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-3.jpg"
                                        alt="activity-user"
                                      />
                                      Silje Larsen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">Dog the quick brown</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">10:23 AM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-purple">
                                      Delayed
                                    </h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-purple f-10" />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="contact"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                          >
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>User</th>
                                  <th>Activity</th>
                                  <th>Time</th>
                                  <th>Status</th>
                                  <th className="text-right" />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle  m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-3.jpg"
                                        alt="activity-user"
                                      />
                                      Silje Larsen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">Dog the quick brown</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">10:23 AM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-purple">
                                      Delayed
                                    </h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-purple f-10" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-1.jpg"
                                        alt="activity-user"
                                      />
                                      Ida Jorgensen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">3:28 PM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-green">Done</h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-green f-10" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle  m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-2.jpg"
                                        alt="activity-user"
                                      />
                                      Albert Andersen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">Jumps over the lazy</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">2:37 PM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-red">Missed</h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-red f-10" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h6 className="m-0">
                                      <img
                                        className="rounded-circle  m-r-10"
                                        style={{ width: 40 }}
                                        src="assets/images/user/avatar-1.jpg"
                                        alt="activity-user"
                                      />
                                      Ida Jorgensen
                                    </h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">The quick brown fox</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0">4:28 PM</h6>
                                  </td>
                                  <td>
                                    <h6 className="m-0 text-c-green">Done</h6>
                                  </td>
                                  <td className="text-right">
                                    <i className="fas fa-circle text-c-green f-10" />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* [ Main Content ] end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
