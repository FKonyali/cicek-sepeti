<template>
    <div class="footer__mid">
        <div class="footer__m-left">
            <router-link to="/" title="Çiçek Sepeti" class="footer__m-logo">
                <img src="@/assets/img/logo.svg" alt="Çiçek Sepeti">
            </router-link>
            <ul class="footer__m-socials">
                <li>
                    <a href="#" target="_blank" title="Facebook">
                        <i class="icon-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" title="Twitter">
                        <i class="icon-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" title="Instagram">
                        <i class="icon-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" title="Youtube">
                        <i class="icon-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" title="Ne ki bu acaba">
                        <i class="icon-write"></i>
                    </a>
                </li>
            </ul>
            <div class="footer__m-gdpr">
                <p>
                    CicekSepeti.com olarak kişisel verilerinizin gizliliğini <br>önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine <a href="#" title="Kişisel Verilerin Korunması Kanunu">buradan</a> ulaşabilirsiniz.    
                </p>    
            </div>
        </div>
        <div class="footer__m-right">
            <ul class="footer__mr-links">
                <li>
                    <h6>
                        Faydalı Bilgiler
                    </h6>
                </li>
                <li>
                    <router-link to="#" title="Çiçek Bakımı">
                        Çiçek Bakımı
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Çiçek Eşliğinde Notlar">
                        Çiçek Eşliğinde Notlar
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Çiçek Anlamları">
                        Çiçek Anlamları
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Özel Günler">
                        Özel Günler
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Mevsimlere Göre Çiçekler">
                        Mevsimlere Göre Çiçekler
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="BonnyFood Saklama Koşulları">
                        BonnyFood Saklama Koşulları
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Site Haritası">
                        Site Haritası
                    </router-link>
                </li>
            </ul>
            <ul class="footer__mr-links">
                <li>
                    <h6>
                        Kurumsal
                    </h6>
                </li>
                <li>
                    <router-link to="#" title="Hakkımızda">
                        Hakkımızda
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Kariyer">
                        Kariyer
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="ÇiçekSepeti’nde Satış Yap">
                        ÇiçekSepeti’nde Satış Yap
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Kurumsal Müşterilerimiz">
                        Kurumsal Müşterilerimiz
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Reklamlarımız">
                        Reklamlarımız
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Basında Biz">
                        Basında Biz
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Kampanyalar">
                        Kampanyalar
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Vizyonumuz">
                        Vizyonumuz
                    </router-link>
                </li>
            </ul>
            <ul class="footer__mr-links">
                <li>
                    <h6>
                        İletişim
                    </h6>
                </li>
                <li>
                    <router-link to="#" title="Bize Ulaşın">
                        Bize Ulaşın
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Sıkça Sorulan Sorular">
                        Sıkça Sorulan Sorular
                    </router-link>
                </li>
            </ul>
            <ul class="footer__mr-links">
                <li>
                    <h6>
                        Gizlilik Sözleşmesi
                    </h6>
                </li>
                <li>
                    <router-link to="#" title="Mesafeli Satış Sözleşmesi">
                        Mesafeli Satış Sözleşmesi
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Bilgi Toplumu Hizmetleri">
                        Bilgi Toplumu Hizmetleri
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Gizlilik Sözleşmesi">
                        Gizlilik Sözleşmesi
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Ödeme Seçenekleri">
                        Ödeme Seçenekleri
                    </router-link>
                </li>
                <li>
                    <router-link to="#" title="Hesap Bilgileri">
                        Hesap Bilgileri
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterMid"
    }
</script>

<style lang="sass">
    .footer
        &__mid
            padding: 100px 0 66px
            display: flex
            flex-wrap: wrap

        &__m
            &-left
                padding-right: 61.5px
                width: 516.5px

            &-logo
                width: 209px
                display: block
                margin-bottom: 15px

                img
                    width: 100%

            &-socials
                display: flex
                align-items: center
                flex-wrap: wrap
                margin: 0 -15.5px

                a
                    padding: 15.5px
                    display: block

            &-gdpr
                font: 400 15px/22px var(--mainf)
                color: #000

                a
                    text-decoration: underline
                    color: #000

            &-right
                position: relative
                border-left: 1px dashed #9B9B9B
                display: flex
                align-items: flex-start
                justify-content: center
                flex: 1
                padding-left: 40px
                
        &__mr
            &-links
                padding: 0 35px 30px
                text-align: center

                &:last-child
                    padding-right: 0

                h6
                    font: 400 18px/23px var(--mainf)
                    color: #044DC3
                    margin-bottom: 6.5px

                li
                    font: 400 15px/19px var(--mainf)
                    
                a
                    display: block
                    color: #000
                    padding: 4.5px

    
    @media (max-width: 1280px)
        .footer
            &__mid
                flex-direction: column

            &__m
                &-left
                    width: 100%
                    padding: 0 0 30px
                    text-align: center

                &-right
                    padding: 30px 0 0 0
                    border: 0
                    border-top: 1px dashed #9B9B9B

                &-socials
                    justify-content: center

                &-logo
                    margin: 0 auto

    @media (max-width: 1030px)
        .footer

            &__mid
                padding: 50px 0 18px

            &__top
                flex-direction: column
                height: auto
                align-items: center
                padding: 0 30px 30px

                &-left
                    width: 100%
                    text-align: center
                    margin: 0 0 30px

    @media (max-width: 660px)
        .footer
            &__m
                &-right
                    flex-wrap: wrap

</style>