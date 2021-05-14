import React from "react";

const Sidebar = () => {
  return (
    <div class="vue__block vue__sidebar">
      <div class="vue__logo bg-info">vue__logo</div>
      <div class="dashboard__option">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action active vue__btn"
          >
            Active item
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
            <div class="vue__icon__text">
              <div class="vue__btn__icon">
                <i class="fab fa-bitcoin"></i>
              </div>
              <div class="vue__btn__text">Dashboard</div>
            </div>
            <div class="vue__btn__arrow">
              <i class="fas fa-arrow-right"></i>
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
            <div class="vue__icon__text">
              <div class="vue__btn__icon">icon</div>
              <div class="vue__btn__text">text</div>
            </div>
            <div class="vue__btn__arrow">arrow</div>
          </a>
          <a href="" class="vue__box vue__btn">
            {" "}
            box{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
