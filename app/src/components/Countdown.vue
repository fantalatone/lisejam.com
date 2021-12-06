// TODO: Optimizasyon ✔️
// TODO: Web-database Bağlantılı Çalışma
// *: Sayfa yüklenince gerisayım değerlerinin yüklenmesi interval ile ilgili yani değerleri ✔️
// *: interval ile başlatmadan önce bir kere yüklemelisin ✔️

<template>
    <div class="countdown-container">
        <div class="background-container"></div>
        
        <div class="content">
            <span id="content-title">Etkinliğin Başlamasına</span>
            <div class="content-countdown">
                <div class="countdown-values-container">
                    <div class="value">
                        {{displayDays}}
                        <div class="title">Gün</div>    
                    </div>
                    <div>/</div>
                    <div class="value">
                        {{displayHours}}
                        <div class="title">Saat</div>    
                    </div>
                    <div>/</div>
                    <div class="value">
                        {{displayMinutes}}
                        <div class="title">Dakika</div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        endDate: new Date(2021, 11, 12, 0, 0, 0, 0),
        now: new Date()
    }),
    computed: {
        _minutes: () => 1000 * 60,
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
        _distance() {
            return this.endDate - this.now; 
        }
    },
    mounted() {
        this.updateDisplay();
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            setInterval(() => {
                this.now = new Date();
                this.updateDisplay();
            }, 1000);
        },
        updateDisplay() {
            const days = Math.floor(this._distance / this._days);
            const hours = Math.floor((this._distance % this._days) / this._hours);
            const minutes = Math.floor((this._distance % this._hours) / this._minutes);

            this.displayDays = days < 10 ? "0" + days : days;
            this.displayHours = hours < 10 ? "0" + hours : hours;
            this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        }
    }
}
</script>

<style scoped>
.countdown-container {
    width: 100%;
    height: 260px;

    /* background-color: slateblue; */

    position: relative;
}
.content {
    height: 425px;
    width: 100%;
    padding: 15px;
    bottom: 0px;

    z-index: -1;

    position: absolute;

    display: flex;
    justify-content: center;    
    flex-direction: column;
    align-items: center;
    /* background-color: springgreen; */

    color: white;
}
.content #content-title {
    font-weight: 600;
    font-size: 4rem;
}
.content .content-countdown {
    width: 70%;
    margin: 10px 0;
}
.content .countdown-values-container {
    font-size: 9.5rem;
    font-weight: 200;

    display: flex;
    justify-content: space-around;
    align-items: center;
}
.content .countdown-values-container .value {
    position: relative;
}
.content .countdown-values-container .value .title {
    bottom: -55px;
    left: 50%;

    transform: translate(-50%, -50%);
    position: absolute;

    font-size: 2rem;
    font-weight: 300;
}
.background-container {
    width: 100%;
    height: 750px;
    z-index: -1;

    position: absolute;
    bottom: 0;

    background-color: lightseagreen;
    /* background: linear-gradient(0deg, #0A8FBD 10%, #A1E4E9 80%); */
}
</style>