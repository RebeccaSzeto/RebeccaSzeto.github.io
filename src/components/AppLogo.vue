<template>
  <div class="WaszLogo">
  </div>
</template>

<style>

.WaszLogo {
    position: relative;
    width: 130px;
    height: 100px;
}

.WaszLogo:before,
.WaszLogo:after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 60px;
    height: 60px;
    border: 20px solid #35495E;
    -moz-border-radius: 50px 50px 0 50px;
         border-radius: 50px 50px 0 50px;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
}

.WaszLogo:after {
    left: auto;
    right: 0;
    -moz-border-radius: 50px 50px 50px 0;
         border-radius: 50px 50px 50px 0;
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
}

</style>

