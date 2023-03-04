<template>
  <div class="setting__container">
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
    </div>
    <div class="setting">
      <div class="dropdown">
        <button type="button" class="dropbtn"></button>
        <div class="dropdown-content" id="myDropdown">
          <button type="button">Link 1</button>
          <button type="button">Link 2</button>
          <button type="button">Link 3</button>
        </div>
      </div>
      <div class="mode">
        <label class="switch">
          <input type="checkbox" name="mode__window" id="mode__window">
          <span class="slider round"></span>
        </label>
        <img src="../assets/icon-moon.svg" alt="moon">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Setting"
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
</style>