<style>
    body {
      background-color: #f8f9fa;
      font-size: 14px;
    }
    .body {
      max-width: 720px;
      margin: 0 auto;
      font-family: Arial;
      line-height: 1.5;
      background: #fff;
    }
    .content {
      margin: 10px 0;
      background-color: #ffffff;
      padding: 10px;
    }
    .header {
      text-align: center;
    }
    .header img {
      max-width: 100%;
      height: auto;
    }
    .footer {
      background-color: #ffffff;
      padding: 10px;
      margin: 10px 0;
      text-align: center;
    }
    .socialmedia {
      background-color: #ffffff;
      margin: 10px auto;
      padding: 10px 0 10px 0;
      height: 35px;
      width: 100%;
      text-align: center;
    }
    .socialmedia img {
      width: 35px;
    }
    .footer-cd {
      background-color: #515151;
      color: #ffffff;
      padding: 10px;
      margin: 5px 0;
    }
    .col {
      width: 50%;
    }
    .bold {
      font-weight: 700;
    }
    .clr {
      clear: both;
    }
    .nav-menu {
      display: flex;
      justify-content: center;
      background: #f8f9fa;
    }
    .item {
      width: 240px;
      text-align: center;
      text-decoration: none;
      color: #000;
      padding: 0.5em 0;
    }
    .item:hover {
      background: #fff;
    }
    .header img {
      width: 720px;
      margin-bottom: 1em;
    }
    .content h1 {
      display: inline;
      color: #6bad8d;
      font-size: 20px;
      line-height: 43px;
      font-weight: bold;
    }
    .content h2 {
      font-size: 16px;
      font-weight: normal;
    }
    .content h4 {
      font-size: 14px;
      font-style: italic;
    }
    .newsletter img {
      width: 720px;
    }
    .content {
      margin-bottom: 1em;
    }
    .space {
      height: 0.5em;
      background: #f8f9fa;
    }
    .row {
      display: flex;
      align-items: center;
    }
    .col-left {
      width: 520px;
    }
    .col-right {
      width: 180px;
    }
    .btn {
      border-color: #000;
      color: #fff;
      background: #000;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1em;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      width: 180px;
    }
    .btn:hover {
      border-color: #000;
      color: #000;
      background: #fff;
    }
    .info {
    }
    .shipment,
    .pack,
    .tracking {
      font-weight: 700;
    }
    span {
      font-weight: normal;
    }
  </style>
  <div class="body">
    <div class="header">
      <img src="https://www.casu.pl/media/wysiwyg/logocasu.jpg" />
    </div>
    <div class="nav-menu">
      <a
        class="item"
        href="https://www.casu.pl/women/obuwie-1.html?casu_nowosc=tak"
        >Damskie</a
      >
      <a class="item" href="https://www.casu.pl/men/obuwie.html?casu_nowosc=tak"
        >Męskie</a
      >
      <a class="item" href="https://www.casu.pl/dzieciece.html?casu_nowosc=tak"
        >Dziecięce</a
      >
    </div>
    <div class="content">
      <h1>
        [imie], dziękujemy za złożenie zamówienia numer [numer_zamowienia_sklep]
      </h1>
      <p>[lista_przedmiotow]</p>
      <hr />
      <div class="przycisk row">
        <p class="col-left">
          Aby dowiedzieć się więcej nt. zamówienia, statusu dostawy
        </p>
        <a class="col-right" href="[link_zamowienia]"
          ><button type="button" class="btn">Szczegóły zamówienia</button></a
        >
      </div>
      <div class="przycisk row">
        <p class="col-left">
          Dostęp do wszystkich opcji związanych z kontem klienta
        </p>
        <a class="col-right" href="https://www.casu.pl/customer/account/login/"
          ><button type="button" class="btn">Twoje konto w sklepie</button></a
        >
      </div>
      <div class="przycisk row">
        <p class="col-left">.</p>
        <a class="col-right" href="https://www.casu.pl/zwrot"
          ><button type="button" class="btn" style="width: 182px;">
            Formularz zwrotu
          </button></a
        >
      </div>
      <hr />
      <p class="info">
       <br />e-mail
        <a href="mailto:casu@casu.pl">casu@casu.pl</a><br />
        <a href="tel:+48506455483">506 455 483</a>
      </p>
      <h2>Życzymy miłego dnia,</h2>
      <h4>Casu.pl</h4>
      <p class="">
       
      </p>
    </div>
    <div class="space"></div>
    <div class="newsletter">
      <a
        href="http://www.casu.pl/#newsletter-validate-detail"
        title="Link do zapisu na newsletter"
      >
        <img
          alt="Baner do zapisu na newsletter"
          src="https://www.casu.pl/media/wysiwyg/template-newsletter.jpg"
        />
      </a>
    </div>
    <div class="socialmedia">
      <a
        title="Link do Facebooka"
        style="margin-right: 10px;"
        href="https://www.facebook.com/Twoje.CASU"
        ><img src="https://www.casu.pl/media/wysiwyg/facebook.png"
      />
    {{-- <h3>{{ $content['title'] }}</h3> --}}
{{-- <p style="color: rgb(211, 141, 141)">{{ $content['body'] }}</p> </a> --}}
      <a title="Link do instagrama" href="http://instagram.com/casu/"
        ><img src="https://www.casu.pl/media/wysiwyg/instagram2.png"
      /></a>
      <a
        title="Link do Bloga"
        style="margin-left: 10px;"
        href="https://www.casu.pl/blog/"
        ><img src="https://www.casu.pl/media/wysiwyg/blog.png"
      /></a>
    </div>
    <div class="footer clr">
      08:00 - 16:00 <br />
      Komórka : 506 455 483 <br />
      e-mail: casu@casu.pl
    </div>
  </div>
  

{{-- <h3>{{ $content['title'] }}</h3>
<p style="color: rgb(211, 141, 141)">{{ $content['body'] }}</p> --}}