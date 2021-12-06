<template>
    <Header />

    <Countdown />

    <main class="content">
        <section class="content-section" id="lisejam-nedir">
            <div class="section-title">
                <h1>LİSEJAM NEDİR?</h1>
            </div>
            <div class="section-text">
                <p>LiseJam, liseli genç takımların toplanıp 48 saat içerisinde verilen temaya göre oyun geliştirdikleri liseler arası ONLINE bir etkinliktir.</p>
            </div>
            <div id="prizes">
                <h2>Ödüller</h2>
                <ul>
                    <li>1. 5000₺</li>
                    <li>2. 3000₺</li>
                    <li>3. 1000₺</li>
                </ul>
            </div>
        </section>

        <Divider />
        
        <section class="content-section" id="nasil-katilinir">
            <div class="left">
                <div class="section-title">
                    <h1>Nasıl Katılınır?</h1>
                </div>
                <div class="section-text">
                    <ul>
                        <li>1- İlk olarak <router-link to="kayit">"lisejam.com/kayit"</router-link> adresine giriniz.</li>
                        <li>2- Kayıt sayfasında sizden istenen tüm bilgileri eksiksiz bir şekilde doldurunuz.</li>
                        <li>3- Dilerseniz kayıt işleminden sonra e-postanıza gelen bilgiler ile Discord sunucumuza katılabilirsiniz.</li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <iframe width="560" height="320" src="https://www.youtube-nocookie.com/embed/uK_wk3Ag63U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
        <Divider />
        <section class="content-section" id="rules">
            <div class="section-title">
                <h1>Kurallar</h1>
            </div>
            <div class="section-text">
                <ul>
                    <li>1- Hile yapmak yasaktır.</li>
                    <li>2- Eğlenmemek yasaktır.</li>
                </ul>
            </div>
        </section>
        <Divider />
        <section class="content-section" id="faq">
            <div class="section-title">
                <h1>S.S.S.</h1>
            </div>
            <div class="section-text">
                <ul>
                    <li>A</li>
                </ul>
            </div>
        </section>
    </main>

    <footer>
        <h1>Arda Kara</h1>
    </footer>

</template>

<script>
import Header from "../components/Header.vue"
import Countdown from "../components/Countdown.vue"
import Divider from "../components/Divider.vue"

export default {
    name: "Index",
    components: {
        Header,
        Countdown,
        Divider
    }
}
</script>

<style scoped>
.content-section {
    width: 100%;

    color: #000000;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.section-title {
    color: white;
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #000000;
}
.section-title h1 {
    font-size: 3.5rem;
    z-index: 1;
}
.section-text {
    margin: 1rem 0;

    font-size: 1.6rem;
}
#lisejam-nedir {
    height: 400px;
    padding: 0 90px;
}
#lisejam-nedir .section-text {
    width: 55%;
}
#nasil-katilinir {
    height: 400px;
    flex-direction: row;
    padding: 30px 90px;
    background-color: springgreen;
    /* background-image: url("../../assets/questions2.svg");
    background-size: cover; */
}
/* #nasil-katilinir .section-title {
    background-image: url("../../assets/questions3.svg");
    background-size: 200%;
    background-repeat: no-repeat;
} */
#nasil-katilinir .section-text {
    padding: 0px 20px;
}
#faq {
    height: 500px;
    padding: 0 90px;
    background-image: url("../../assets/questions2.svg");
    background-size: cover;
    background-color: #00ADB5;
}
#faq .section-title {
    background-image: url("../../assets/questions3.svg");
    background-size: 150%;
    background-repeat: no-repeat;
}
.left {
    width: 50%;
}
.right {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#prizes {
    width: 75%;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1.4rem;
}
#prizes h2 {
    font-size: 2rem;
}
li {
    list-style: none;
}
</style>