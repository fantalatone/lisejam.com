<template>
    <!-- <Nav /> -->
    <Header />

    <Countdown />

    <main class="content">
        <section class="content-section" id="lisejam-nedir">
            <h1 class="section-title">LİSEJAM NEDİR?</h1>
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
        <section class="content-section" id="nasil-katilinir">
            <div class="left">
                <h1 class="section-title">Nasıl Katılınır?</h1>
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
        <section class="content-section" id="faq">
            <h1 class="section-title">S.S.S.</h1>
            <div>
                <ul>
                    <li>A</li>
                </ul>
            </div>
        </section>
    </main>

</template>

<script>
import Header from "../components/Header.vue"
import Countdown from "../components/Countdown.vue"
// import Nav from "../components/Nav.vue"

export default {
    name: "Index",
    components: {
        Header,
        // Nav
        Countdown
    }
}
</script>

<style scoped>
.content {
    margin: -10rem 0;
}
.content-section {
    width: 100%;
    margin: 2rem 0;

    color: #121624;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: lightcoral;
}
.section-title {
    font-size: 3.5rem;
    text-align: center;
}
.section-text {
    margin: 1rem 0;

    font-size: 1.6rem;
}
#lisejam-nedir {
    height: 400px;
}

#lisejam-nedir .section-text {
    width: 55%;
}
#nasil-katilinir {
    height: 350px;
    flex-direction: row;
    padding: 30px 90px;
}
#faq {
    height: 500px;
}
.left {
    width: 50%;
}
.right {
    width: 50%;
    display: flex;
    justify-content: end;
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