import React, { Component } from 'react'
import www from '../../assets/1.png';
import centang from '../../assets/2.png';
import money from '../../assets/3.png';
import proses from '../../assets/5.png';
import done from '../../assets/6.png';
import arrow from '../../assets/arrow.png';
import human from '../../assets/human.svg';
import logo from '../../assets/invest1.png';
import wallet from '../../assets/wallet.svg';


export default class index extends Component {
  render() {
    return (
        <div className="App">
            <nav class="navbar navbar-expand-lg ">
                <img class="logo" src={logo} />
                <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
                        <a href="#" class="menu1">Sign In</a>
                        <a href="#" class="menu2">Sign Up</a>
                </div>
            </nav>
            <div class="container-fluid mt-1">
                <div class="row">
                <div class="col-lg-5 login height-full teks_wallet">
                    <h1 class="text-head teks2"><b>THE BEST WAY TO CONSERVE YOUR NATURE AND MONEY</b></h1>
                    <h5 class="font-grey text-subhead keterangan">Investasikan untuk sekarang dan masa depan yang lebih baik!</h5>
                    <form class="form-login">
                    <br/><br/>
                    <div class="wrap-button">
                        <button type="submit" class="btn btn-login mt-4 masuk1"><h4>Let's Invest</h4></button> 
                    </div>
                    </form>
                    </div>
                <div class="col-lg-5 height-full bg-home wallet">
                        <img class="wallet" src={wallet} />
                </div>
                </div>
            </div>

            <div class="container-fluid">
                <h2><br/><b>Bagaimana Cara Kerja Moneystation?<br/><br/></b></h2>
                    <div className="row">
                        <div className="col-md-1"> <img src={www} className="simbol" alt="logo" /><br/><span class="note mt-5"><p>REGISTRASI INVESTOR BARU</p></span></div>
                        <div className="col-md-1"> <img src={arrow} className="arrow" alt="logo" /> </div>
                        <div className="col-md-1"> <img src={centang} className="simbol" alt="logo" /><br/><span class="note"><p>TUNGGU VERIFIKASI</p></span></div>
                        <div className="col-md-1"> <img src={arrow} className="arrow" alt="logo" /> </div>
                        <div className="col-md-1"> <img src={money} className="simbol" alt="logo" /><br/><span class="note"><p>MASUKKAN NOMINAL INVESTASI</p></span></div>
                        <div className="col-md-1"> <img src={arrow} className="arrow" alt="logo" /> </div>
                        <div className="col-md-1"> <img src={centang} className="simbol" alt="logo" /><br/><span class="note"><p>TUNGGU VERIFIKASI</p></span></div>
                        <div className="col-md-1"> <img src={arrow} className="arrow" alt="logo" /> </div>
                        <div className="col-md-1"> <img src={proses} className="simbol" alt="logo" /><br/><span class="note"><p>PANTAU PROSESNYA</p></span></div>
                        <div className="col-md-1"> <img src={arrow} className="arrow" alt="logo" /> </div>
                        <div className="col-md-1"> <img src={done} className="simbol" alt="logo" /><br/><span class="note"><p>NIKMATI HASILNYA</p></span></div>
                    </div>
                <h2><br/><b>Apa Perbedaan Investasi Moneystation dengan Lainnya?</b><br/></h2>
                <h4 class="keterangan"><br/><p> Moneystation merupakan situs web yang mempertemukan antara investor (masyarakat luas) dengan pengelola wisata yang membutuhkan modal pembangunan pariwisata khususnya wilayah Kabupaten Banyuwangi. Sesuai dengan penjelasannya, moneystation ini berinvestasi dengan pegelola pariwisata. Dengan menggunakan situs web ini tidak hanya user yang merasa diuntungkan, tetapi juga kemajuan pariwisata di Kabupaten Banyuwangi</p></h4>
            </div>
            <div class="container-fluid mt-3">
                <div class="row">
                    <div class="col-lg-5 mt-5 height-full bg-home">
                        <div class="card card-costum human">
                            <img class="human" src ={human} />
                        </div>
                    </div>
                    <div class="col-lg-5 login height-full teks_human">
                    <h1 class="text-head teks1">Kembangkan Uangmu Sekarang!</h1>
                    <h5 class="font-grey text-subhead keterangan">Investasikan uangmu dibidang pariwisata. <br/>Investasikan untuk sekarang dan masa depan yang lebih baik!</h5>
                    <form class="form-login">
                        <div class="wrap-button">
                            <button type="submit" class="btn btn-login masuk2"><h4>Let's Invest</h4></button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
      
    )
  }
}
