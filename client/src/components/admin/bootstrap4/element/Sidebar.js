import React from "react";

import logo from "../../../../assets/images/browser/chrome.png";
const Sidebar = () => {
  return (
    <div class="vue__block vue__sidebar">
      <div class="vue__logo">
        <div class="logo__name">
          <img src={logo} alt="logo" className="vue__logo__img" />
          <h3>HoaL</h3>
        </div>
        <div className="btn__zoom">
          <i class="far fa-dot-circle"></i>
        </div>
      </div>
      <div class="dashboard__option">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action vue__btn">
            <div class="vue__icon__text__btn__arrow">
              <div class="vue__icon__text">
                <div class="vue__btn__icon__home vue__btn__icon">
                  <i class="fas fa-home"></i>
                </div>
                <div class="vue__btn__text vue__btn__text__home">Dashboard</div>
              </div>
              <div class="vue__btn__arrow">
                <div class="vue__noti__number">2</div>
                <i class="fas fa-angle-down"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="dashboard__option">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action vue__btn">
            <div class="vue__icon__text__btn__arrow">
              <div class="vue__icon__text">
                <div class="vue__btn__icon">
                  <i class="far fa-circle"></i>
                </div>
                <div class="vue__btn__text">Menu Items</div>
              </div>
              <div class="vue__btn__arrow">
                <div class="vue__noti__number">2</div>
                <i class="fas fa-angle-down"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="dashboard__option">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action vue__btn"
            id="first__item"
          >
            <div class="vue__icon__text__btn__arrow">
              <div class="vue__icon__text">
                <div class="vue__btn__icon">
                  <i class="far fa-circle"></i>
                </div>
                <div class="vue__btn__text">Right</div>
              </div>
              <div class="vue__btn__arrow">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </a>
          <a
            href="#"
            class="
            list-group-item list-group-item-action
            vue__btn vue__btn__hide
          "
            id="second__item"
          >
            <div class="vue__icon__text__btn__arrow">
              <div class="vue__icon__text">
                <div class="vue__btn__icon">icon</div>
                <div class="vue__btn__text">text</div>
              </div>
              <div class="vue__btn__arrow">arrow</div>
            </div>
          </a>
          <a href="#" class="list-group-item list-group-item-action vue__btn">
            <div class="vue__icon__text__btn__arrow">
              <div class="vue__icon__text">
                <div class="vue__btn__icon">
                  <i class="fas fa-home"></i>
                </div>
                <div class="vue__btn__text ">Dashboard</div>
              </div>
              <div class="vue__btn__arrow">
                <div class="vue__noti__text">New</div>
                <i class="fas fa-angle-down"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
