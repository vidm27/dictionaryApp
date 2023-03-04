<template>
  <div class="setting__container">
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
    </div>
    <div class="setting">
      <div class="dropdown">
        <button @click="showDropdown" type="button" class="dropbtn" data-font="sans__serif" value="Inter"
                id="current__font">
          <span id="font__text">Sans Serif</span>
          <img src="../assets/icon-arrow-down.svg" alt="arrow down">
        </button>
        <div class="dropdown-content" id="font__dropdown">
          <button @click="changeFontWindow" class="font" type="button" id="font__sans__serif" value="Inter">Sans Serif
          </button>
          <button @click="changeFontWindow" class="font" type="button" id="font__serif" value="Lato">Serif</button>
          <button @click="changeFontWindow" class="font" type="button" id="font__mono" value="Inconsolata">Mono</button>
        </div>
      </div>
      <div class="mode">
        <label class="switch">
          <input @click="switchModeStyle" type="checkbox" name="mode__window" id="mode__window">
          <span class="slider round"></span>
        </label>
        <img src="../assets/icon-moon.svg" alt="moon">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Setting",
  methods: {
    showDropdown: function (event) {
      console.log(event.target);
      const dropdown = document.getElementById("font__dropdown");
      dropdown.classList.toggle("show");
    },
    changeFontWindow: function (event) {
      const font = event.target.value
      const body = document.getElementsByTagName("body")[0];
      body.style.fontFamily = font
      const currentFont = document.getElementById("current__font");
      const fontText = document.getElementById("font__text")
      fontText.textContent = event.target.textContent;
      currentFont.value = font
      currentFont.style.fontFamily = font;
    },
    switchModeStyle: function (event) {
      const body = document.body;
      body.classList.toggle("black__mode");
    }
  }
}
</script>

<style scoped>
.setting__container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-top: 2em;
}

.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 25px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 5px;
  bottom: 5px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #A445ED;
}

input:focus + .slider {
  box-shadow: 0 0 1px #A445ED;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 25px;
}

.slider.round:before {
  border-radius: 50%;
}

.setting {
  display: flex;
  align-items: center;

}

.setting .mode {
  display: flex;
  margin: 0 1rem;
}

.mode img {
  margin-left: .5rem;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 1rem;
  border: none;
  outline: none;
  color: #2D2D2D;
  font-weight: bold;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 183px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 1rem;
}

.show {
  display: flex;
}

div#font__dropdown {
  flex-direction: column;
  background: #f9f9f9;
  text-align: left;
}

button.font {
  background: none;
  border: none;
  padding: .6rem 1rem;
  text-align: left;
  font-weight: bold;
  font-size: 1.0625rem;
}

button.font:hover {
  color: #A445ED;
  transition: ease-in-out .5s;
}

button.font#font__sans__serif {
  font-family: 'Inter';
}

button.font#font__serif {
  font-family: 'Lora';
}

button.font#font__mono {
  font-family: 'Inconsolata';
}

.dropbtn span {
  margin-right: 1rem;
}
</style>