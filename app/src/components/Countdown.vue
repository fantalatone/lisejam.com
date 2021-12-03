// TODO: Optimizasyon
// TODO: Web-database Bağlantılı Çalışma
// *: Sayfa yüklenince gerisayım değerlerinin yüklenmesi interval ile ilgili yani değerleri
// *: interval ile başlatmadan önce bir kere yüklemelisin

<template>
    <div class="countdown-container">
        <div class="countdown-header countdown-title">
            <span>Gün</span>
            <span>Saat</span>
            <span>Dakika</span>
        </div>
        <div class="countdown-header countdown-values">
            <span>{{displayDays}}</span>
            <span>{{displayHours}}</span>
            <span>{{displayMinutes}}</span>
        </div>
    </div>
</template>

<script>

const endDate = new Date(2021, 11, 12, 0, 0, 0, 0);
const now = new Date();

export default {
    data: () => ({
        clockUpdateTime: 60 * 1000,
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
    }),
    computed: {
        _minutes: () => 1000 * 60,
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        }
    },
    mounted() {

        const distance = endDate.getTime() - now.getTime();

        this.setDateValues(distance);
        this.showRemaining();
    },
    methods: {
        showRemaining() {
            const timer = setInterval(() => {
                const distance = endDate.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                    return;
                }

                this.setDateValues(distance);

            }, this.clockUpdateTime);
        },
        setDateValues(distance) {
            const days = Math.floor(distance / this._days);
            const hours = Math.floor((distance % this._days) / this._hours);
            const minutes = Math.floor((distance % this._hours) / this._minutes);

            this.displayDays = days < 10 ? "0" + days : days;
            this.displayHours = hours < 10 ? "0" + hours : hours;
            this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        }
    }
}
</script>

<style scoped>

.countdown-container {
    background-color: #7e7e7e;
    color: white;
    width: 30%;
    margin: 0 auto;
    padding: 10px;
}
.countdown-header {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.countdown-header span {
    text-align: center;
    width: 110px;
}
.countdown-header.countdown-title span {
    font-size: 1.6rem;
}
.countdown-header.countdown-values span{
    font-size: 3rem;
}

</style>