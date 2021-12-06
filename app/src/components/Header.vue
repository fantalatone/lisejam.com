<template>
    <header class="header">
        <div class="header-top">
            <div id="logo-background">
                <svg viewBox="0 0 200 200" id="logo-blob" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" transform="translate(100 100)">
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            values="
                                        M57.3,-64.5C73.5,-54.7,85.2,-35.9,88.7,-15.7C92.2,4.6,87.6,26.2,76.2,42.2C64.8,58.2,46.8,68.5,27.9,74.3C9.1,80.1,-10.5,81.4,-25.4,74.1C-40.3,66.8,-50.6,51,-61.9,34.3C-73.1,17.7,-85.3,0.3,-83.2,-15.2C-81.2,-30.7,-64.8,-44.3,-48.6,-54C-32.3,-63.8,-16.2,-69.7,2.2,-72.4C20.6,-75,41.2,-74.3,57.3,-64.5Z;
                                        M43,-48.4C59.1,-37.7,77.8,-27.4,82.4,-12.9C86.9,1.6,77.2,20.3,65.5,35.1C53.7,50,40,60.9,23.3,69.2C6.7,77.5,-12.8,83.2,-31.4,79.4C-50,75.6,-67.7,62.5,-75.5,45.3C-83.4,28.2,-81.3,7.1,-76.6,-12.4C-71.8,-31.9,-64.4,-49.9,-51.2,-61.1C-38,-72.3,-19,-76.7,-2.8,-73.4C13.4,-70.1,26.9,-59.1,43,-48.4Z;
                                        M47.8,-56.6C63,-44.2,77.1,-30.1,79.8,-14.2C82.4,1.7,73.5,19.5,64,37.8C54.5,56.1,44.3,74.9,29.6,79.4C14.9,83.9,-4.3,74.2,-22.9,66.1C-41.6,58,-59.7,51.4,-71.4,37.9C-83.1,24.4,-88.5,3.9,-83.8,-13.4C-79.1,-30.8,-64.4,-45,-48.8,-57.4C-33.2,-69.8,-16.6,-80.3,-0.1,-80.1C16.3,-80,32.6,-69.1,47.8,-56.6Z;
                                        M57.3,-64.5C73.5,-54.7,85.2,-35.9,88.7,-15.7C92.2,4.6,87.6,26.2,76.2,42.2C64.8,58.2,46.8,68.5,27.9,74.3C9.1,80.1,-10.5,81.4,-25.4,74.1C-40.3,66.8,-50.6,51,-61.9,34.3C-73.1,17.7,-85.3,0.3,-83.2,-15.2C-81.2,-30.7,-64.8,-44.3,-48.6,-54C-32.3,-63.8,-16.2,-69.7,2.2,-72.4C20.6,-75,41.2,-74.3,57.3,-64.5Z
                                    "
                        />
                    </path>
                </svg>
            </div>
            <div id="logo"></div>
        </div>
        <div class="wave"></div>
    </header>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
.header {
    height: calc(70vh + 200px);
    
    /* filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, .35)); */

    display: flex;
    align-items: center;
    flex-direction: column;
}
.header-top {
    width: 100%;
    height: 70vh;
    z-index: 1;

    background-image: url("../../assets/wp.png");
    background-size: 1920px;
    background-position: center;
    background-attachment: fixed;

    position: relative;
}
#logo {
    width: 250px;
    height: 65%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url("../../assets/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
#logo-background {
    width: 400px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
/* #logo-blob {
    filter: drop-shadow(5px 0px 5px rgba(0, 0, 0, .4)) drop-shadow(-5px 0px 5px rgba(0, 0, 0, .4)) drop-shadow(0px 5px 5px rgba(0, 0, 0, .4)) drop-shadow(0px -5px 5px rgba(0, 0, 0, .4));
} */
.wave {
    width: 100%;
    height: 200px;

    background-image: url("../../assets/wp.png");
    background-position: center;
    background-size: 1920px;
    background-attachment: fixed;
    
    mask: url("../../assets/wave.svg");
    mask-size: 101%;
    mask-position: -1px -1px;
    mask-repeat: no-repeat;
}
</style>